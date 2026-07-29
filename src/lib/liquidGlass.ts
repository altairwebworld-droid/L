import * as THREE from 'three';

/**
 * Metaball "liquid glass" renderer.
 *
 * Droplets are simulated on the CPU (merge, split, surface tension, soft-body
 * trailing) and packed into a data texture. The fragment shader accumulates the
 * metaball field and refracts a background source through it, so whatever sits
 * behind the canvas — a drawn gradient or a playing video — bends through the
 * droplets.
 */

const FIXED_DT_MS = 8;
const MAX_FRAME_DT_MS = 100;
const MAX_CATCHUP = 6;

const DAMP = 0.993;
const MOUSE_R = 0.18;
const MOUSE_F = 0.004;
const TENSION_RANGE = 0.12;
const TENSION_F = 0.0004;
const MERGE_RATIO = 0.62;
const SPLIT_SPEED = 0.013;
const SPLIT_MIN_R = 0.04;
const MAX_SPEED = 0.015;
const BOUNCE = 0.4;
const WANDER_F = 0.00004;
const CENTER_PULL = 0.000008;
const SOFT_STIFFNESS = 0.22;
const SOFT_DAMPING = 0.6;

const vertSrc = /* glsl */ `void main(){ gl_Position = vec4(position, 1.0); }`;

function buildFragment(maxEntries: number) {
  return /* glsl */ `
precision highp float;
#define MAX_N ${maxEntries}

uniform vec2      uRes;
uniform vec2      uBgSize;
uniform sampler2D uData;
uniform sampler2D uBg;
uniform int       uCount;
uniform float     uRefract;

/* Map screen uv to background uv with object-fit: cover semantics. */
vec2 coverUV(vec2 uv){
  float ca = uRes.x / max(uRes.y, 1.0);
  float ta = uBgSize.x / max(uBgSize.y, 1.0);
  vec2 s = (ca > ta) ? vec2(1.0, ta / ca) : vec2(ca / ta, 1.0);
  return (uv - 0.5) * s + 0.5;
}

void main(){
  vec2  uv  = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2  p   = (uv - 0.5) * vec2(asp, 1.0);

  float field = 0.0;
  vec2  grad  = vec2(0.0);
  vec2  lens  = vec2(0.0);
  float lensW = 0.0;

  for(int i = 0; i < MAX_N; i++){
    if(i >= uCount) break;
    vec4  d = texture2D(uData, vec2((float(i)+0.5)/float(MAX_N), 0.5));
    vec2  c = d.xy;
    float r = d.z;
    if(r < 0.001) continue;
    vec2  delta = p - c;
    float dSq   = dot(delta, delta) + 1e-5;
    float contrib = r * r / dSq;
    field += contrib;
    grad  += -2.0 * contrib / dSq * delta;

    float w = r * r / (dSq + r * r);
    lens += (c - p) * w;
    lensW += w;
  }

  lens /= (lensW + 0.001);
  float lensLen = length(lens);

  float thr  = 1.0;
  float edge = smoothstep(thr - 0.08, thr + 0.03, field);

  float mappedLens = atan(lensLen * 6.0) * uRefract;
  vec2  refractDir = (lensLen > 1e-5) ? lens / lensLen : vec2(0.0);
  float refractMask = smoothstep(thr - 0.2, thr + 1.5, field);
  vec2  refractedUV = clamp(uv + refractDir * mappedLens * refractMask, 0.001, 0.999);

  vec3  bgClean = texture2D(uBg, coverUV(uv)).rgb;

  float gradLen = length(grad);
  float nScale = atan(gradLen * 0.5) * 0.3;
  vec2  nGrad  = (gradLen > 1e-4) ? (grad / gradLen) * nScale : vec2(0.0);
  vec3  N = normalize(vec3(-nGrad, 1.0));
  vec3  L = normalize(vec3(0.3, 0.6, 1.0));
  vec3  V = vec3(0.0, 0.0, 1.0);
  vec3  H = normalize(L + V);
  float diff = max(dot(N, L), 0.0);
  float spec = pow(max(dot(N, H), 0.0), 180.0);

  float cosTheta = max(dot(N, V), 0.0);
  float fresnel  = 0.04 + 0.96 * pow(1.0 - cosTheta, 4.0);

  float rim = smoothstep(thr + 0.6, thr, field) * edge;

  float caStr = 0.0018 * edge;
  vec3 bgCA;
  bgCA.r = texture2D(uBg, coverUV(refractedUV + vec2(caStr, caStr * 0.5))).r;
  bgCA.g = texture2D(uBg, coverUV(refractedUV)).g;
  bgCA.b = texture2D(uBg, coverUV(refractedUV - vec2(caStr, caStr * 0.5))).b;

  float depth = smoothstep(thr, thr + 3.0, field);
  vec3  tint  = mix(vec3(1.0), vec3(0.93, 0.96, 1.0), depth * 0.45);

  vec3 glassColor = bgCA * tint * (0.92 + 0.08 * diff)
                  + vec3(1.0) * spec * 0.85
                  + vec3(0.9, 0.95, 1.0) * rim * 0.22
                  + vec3(1.0) * fresnel * 0.10;

  float shadowField = smoothstep(thr - 0.35, thr - 0.05, field);
  vec3 bg = bgClean * (1.0 - shadowField * 0.06);

  float borderOuter = smoothstep(thr - 0.10, thr - 0.01, field);
  float borderInner = smoothstep(thr + 0.0, thr + 0.06, field);
  float border = borderOuter * (1.0 - borderInner) * 0.28;

  vec3  col = mix(bg, glassColor, edge);
  col += vec3(1.0) * border;

  gl_FragColor = vec4(col, 1.0);
}
`;
}

type Droplet = {
  x: number;
  y: number;
  r: number;
  area: number;
  vx: number;
  vy: number;
  alive: boolean;
  wanderAngle: number;
  wanderSpeed: number;
  softPrevX: number;
  softPrevY: number;
  softOffX: number;
  softOffY: number;
  softVelX: number;
  softVelY: number;
};

export type LiquidGlassBackground =
  | { kind: 'video'; video: HTMLVideoElement }
  | { kind: 'canvas'; draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => void };

export type LiquidGlassOptions = {
  background: LiquidGlassBackground;
  /** Droplets present at start. */
  seedCount?: number;
  /** Hard ceiling on simulated droplets. */
  maxDroplets?: number;
  /** Pointer repulsion and click-to-spawn. */
  interactive?: boolean;
  /** Refraction strength; lower keeps overlaid text legible. */
  refractStrength?: number;
};

/**
 * Mounts a liquid-glass canvas into `mount`. Returns a dispose function that
 * tears down the renderer, listeners and GPU resources.
 */
export function createLiquidGlass(mount: HTMLElement, options: LiquidGlassOptions): () => void {
  const {
    background,
    seedCount = 12,
    maxDroplets = 40,
    interactive = true,
    refractStrength = 0.035,
  } = options;

  const maxEntries = maxDroplets * 2;

  let width = mount.clientWidth || 1;
  let height = mount.clientHeight || 1;
  let aspect = width / height;

  const renderer = new THREE.WebGLRenderer({ antialias: false });
  // Passthrough colour: the shader composites already-encoded texel values.
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(width, height);
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  /* ── Background source ─────────────────────────────── */
  let bgTexture: THREE.Texture;
  let bgCanvas: HTMLCanvasElement | null = null;
  let bgCtx: CanvasRenderingContext2D | null = null;
  const bgSize = new THREE.Vector2(16, 9);

  if (background.kind === 'canvas') {
    bgCanvas = document.createElement('canvas');
    bgCtx = bgCanvas.getContext('2d');
    bgTexture = new THREE.CanvasTexture(bgCanvas);
    bgTexture.minFilter = THREE.LinearFilter;
    bgTexture.magFilter = THREE.LinearFilter;
  } else {
    bgTexture = new THREE.VideoTexture(background.video);
    bgTexture.minFilter = THREE.LinearFilter;
    bgTexture.magFilter = THREE.LinearFilter;
  }

  function refreshBackground() {
    if (background.kind === 'canvas' && bgCanvas && bgCtx) {
      const w = renderer.domElement.width;
      const h = renderer.domElement.height;
      if (w === 0 || h === 0) return;
      bgCanvas.width = w;
      bgCanvas.height = h;
      background.draw(bgCtx, w, h);
      bgSize.set(w, h);
      bgTexture.needsUpdate = true;
    } else if (background.kind === 'video') {
      const v = background.video;
      if (v.videoWidth > 0 && v.videoHeight > 0) {
        bgSize.set(v.videoWidth, v.videoHeight);
      }
    }
  }

  refreshBackground();
  if (background.kind === 'canvas') {
    document.fonts?.ready.then(refreshBackground).catch(() => undefined);
  } else {
    background.video.addEventListener('loadedmetadata', refreshBackground);
  }

  /* ── Droplet state ─────────────────────────────────── */
  const dropletBuf = new Float32Array(maxEntries * 4);
  const dropletTex = new THREE.DataTexture(dropletBuf, maxEntries, 1, THREE.RGBAFormat, THREE.FloatType);
  dropletTex.minFilter = THREE.NearestFilter;
  dropletTex.magFilter = THREE.NearestFilter;
  dropletTex.needsUpdate = true;

  let drops: Droplet[] = [];

  function makeDroplet(x: number, y: number, r: number, vx: number, vy: number): Droplet {
    return {
      x,
      y,
      r,
      area: Math.PI * r * r,
      vx,
      vy,
      alive: true,
      wanderAngle: Math.random() * Math.PI * 2,
      wanderSpeed: 0.3 + Math.random() * 0.5,
      softPrevX: x,
      softPrevY: y,
      softOffX: 0,
      softOffY: 0,
      softVelX: 0,
      softVelY: 0,
    };
  }

  function spawn(x: number, y: number, r: number) {
    if (drops.length >= maxDroplets) return;
    const angle = Math.random() * Math.PI * 2;
    const spd = 0.0003 + Math.random() * 0.0008;
    drops.push(makeDroplet(x, y, r, Math.cos(angle) * spd, Math.sin(angle) * spd));
  }

  for (let i = 0; i < seedCount; i++) {
    spawn((Math.random() - 0.5) * 0.7, (Math.random() - 0.5) * 0.5, 0.03 + Math.random() * 0.05);
  }

  const mat = new THREE.ShaderMaterial({
    vertexShader: vertSrc,
    fragmentShader: buildFragment(maxEntries),
    uniforms: {
      uRes: { value: new THREE.Vector2(renderer.domElement.width, renderer.domElement.height) },
      uBgSize: { value: bgSize },
      uData: { value: dropletTex },
      uBg: { value: bgTexture },
      uCount: { value: 0 },
      uRefract: { value: refractStrength },
    },
  });
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

  /* ── Pointer ───────────────────────────────────────── */
  const mouse = { x: 999, y: 999, active: false, down: false };
  let spawnCD = 0;

  const onPointerMove = (e: PointerEvent) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * aspect;
    mouse.y = 0.5 - (e.clientY - rect.top) / rect.height;
    mouse.active = true;
  };
  const onPointerDown = () => {
    mouse.down = true;
  };
  const onPointerUp = () => {
    mouse.down = false;
  };
  const onPointerLeave = () => {
    mouse.active = false;
    mouse.down = false;
  };

  if (interactive) {
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointerleave', onPointerLeave);
  }

  const resizeObserver = new ResizeObserver(() => {
    width = mount.clientWidth;
    height = mount.clientHeight;
    if (width === 0 || height === 0) return;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    aspect = width / height;
    mat.uniforms.uRes.value.set(renderer.domElement.width, renderer.domElement.height);
    refreshBackground();
  });
  resizeObserver.observe(mount);

  /* ── Simulation ────────────────────────────────────── */
  function applyForces() {
    for (const d of drops) {
      d.wanderAngle += (Math.random() - 0.5) * d.wanderSpeed;
      d.vx += Math.cos(d.wanderAngle) * WANDER_F;
      d.vy += Math.sin(d.wanderAngle) * WANDER_F;
      d.vx -= d.x * CENTER_PULL;
      d.vy -= d.y * CENTER_PULL;

      if (interactive && mouse.active) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dSq = dx * dx + dy * dy;
        const rr = MOUSE_R + d.r;
        if (dSq < rr * rr && dSq > 1e-5) {
          const dist = Math.sqrt(dSq);
          const s = 1 - dist / rr;
          const f = s * s * MOUSE_F;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }
      }
    }

    for (let i = 0; i < drops.length; i++) {
      const a = drops[i];
      for (let j = i + 1; j < drops.length; j++) {
        const b = drops[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dSq = dx * dx + dy * dy;
        const rng = TENSION_RANGE + a.r + b.r;
        if (dSq < rng * rng && dSq > 1e-5) {
          const dist = Math.sqrt(dSq);
          const f = (1 - dist / rng) * TENSION_F;
          const fx = (dx / dist) * f;
          const fy = (dy / dist) * f;
          a.vx += fx;
          a.vy += fy;
          b.vx -= fx;
          b.vy -= fy;
        }
      }
    }
  }

  function integrate() {
    for (const d of drops) {
      const sp = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
      if (sp > MAX_SPEED) {
        const s = MAX_SPEED / sp;
        d.vx *= s;
        d.vy *= s;
      }
      d.x += d.vx;
      d.y += d.vy;
      d.vx *= DAMP;
      d.vy *= DAMP;

      const wx = aspect * 0.5;
      const wy = 0.5;
      if (d.x - d.r < -wx) {
        d.x = -wx + d.r;
        d.vx = Math.abs(d.vx) * BOUNCE;
      }
      if (d.x + d.r > wx) {
        d.x = wx - d.r;
        d.vx = -Math.abs(d.vx) * BOUNCE;
      }
      if (d.y - d.r < -wy) {
        d.y = -wy + d.r;
        d.vy = Math.abs(d.vy) * BOUNCE;
      }
      if (d.y + d.r > wy) {
        d.y = wy - d.r;
        d.vy = -Math.abs(d.vy) * BOUNCE;
      }
    }
  }

  function mergeDroplets() {
    for (let i = 0; i < drops.length; i++) {
      const a = drops[i];
      if (!a.alive) continue;
      for (let j = i + 1; j < drops.length; j++) {
        const b = drops[j];
        if (!b.alive) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < (a.r + b.r) * MERGE_RATIO) {
          const na = a.area + b.area;
          a.x = (a.x * a.area + b.x * b.area) / na;
          a.y = (a.y * a.area + b.y * b.area) / na;
          a.vx = (a.vx * a.area + b.vx * b.area) / na;
          a.vy = (a.vy * a.area + b.vy * b.area) / na;
          a.r = Math.sqrt(na / Math.PI);
          a.area = na;
          b.alive = false;
        }
      }
    }
    drops = drops.filter((d) => d.alive);
  }

  function splitDroplets() {
    const add: Droplet[] = [];
    for (const d of drops) {
      if (d.r < SPLIT_MIN_R) continue;
      const sp = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
      if (sp < SPLIT_SPEED) continue;

      const ha = d.area * 0.5;
      const nr = Math.sqrt(ha / Math.PI);
      const nx = -d.vy / sp;
      const ny = d.vx / sp;
      const off = nr * 0.7;

      d.r = nr;
      d.area = ha;
      d.x -= nx * off;
      d.y -= ny * off;

      const child = makeDroplet(d.x + nx * off * 2, d.y + ny * off * 2, nr, d.vx + nx * sp * 0.35, d.vy + ny * sp * 0.35);
      child.area = ha;
      add.push(child);
    }
    for (const a of add) if (drops.length < maxDroplets) drops.push(a);
  }

  let autoTimer = 0;
  function autoSpawn() {
    autoTimer += FIXED_DT_MS;
    const floor = Math.max(4, Math.round(seedCount * 0.8));
    if (autoTimer > 2000 && drops.length < floor) {
      autoTimer = 0;
      spawn((Math.random() - 0.5) * aspect * 0.6, (Math.random() - 0.5) * 0.6, 0.025 + Math.random() * 0.03);
    }
  }

  function mouseSpawn() {
    if (!interactive || !mouse.down || !mouse.active) return;
    spawnCD -= FIXED_DT_MS;
    if (spawnCD <= 0 && drops.length < maxDroplets) {
      spawnCD = 120;
      spawn(mouse.x + (Math.random() - 0.5) * 0.02, mouse.y + (Math.random() - 0.5) * 0.02, 0.02 + Math.random() * 0.015);
    }
  }

  function updateSoftBodies() {
    for (const d of drops) {
      const dx = d.x - d.softPrevX;
      const dy = d.y - d.softPrevY;
      d.softVelX += (dx - d.softOffX) * SOFT_STIFFNESS;
      d.softVelY += (dy - d.softOffY) * SOFT_STIFFNESS;
      d.softVelX *= SOFT_DAMPING;
      d.softVelY *= SOFT_DAMPING;
      d.softOffX += d.softVelX;
      d.softOffY += d.softVelY;
      d.softPrevX = d.x;
      d.softPrevY = d.y;
    }
  }

  function fixedUpdate() {
    applyForces();
    integrate();
    mergeDroplets();
    splitDroplets();
    updateSoftBodies();
    autoSpawn();
    mouseSpawn();
  }

  function sync() {
    dropletBuf.fill(0);
    const n = Math.min(drops.length, maxDroplets);
    for (let i = 0; i < n; i++) {
      const d = drops[i];
      dropletBuf[i * 4] = d.x;
      dropletBuf[i * 4 + 1] = d.y;
      dropletBuf[i * 4 + 2] = d.r;
      dropletBuf[i * 4 + 3] = 1;

      // Trailing ghost blob merges with the parent to form a teardrop tail.
      const gi = (n + i) * 4;
      dropletBuf[gi] = d.x - d.softOffX * 3.5;
      dropletBuf[gi + 1] = d.y - d.softOffY * 3.5;
      dropletBuf[gi + 2] = d.r * 0.7;
      dropletBuf[gi + 3] = 1;
    }
    dropletTex.needsUpdate = true;
    mat.uniforms.uCount.value = n * 2;
  }

  /* ── Loop ──────────────────────────────────────────── */
  let last = performance.now();
  let acc = 0;
  let paused = false;
  let onScreen = true;
  let rafId = 0;

  const onVisibilityChange = () => {
    paused = document.hidden;
    if (!paused) last = performance.now();
  };
  document.addEventListener('visibilitychange', onVisibilityChange);

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) last = performance.now();
    },
    { threshold: 0 },
  );
  intersectionObserver.observe(mount);

  function loop() {
    rafId = requestAnimationFrame(loop);
    if (paused || !onScreen) return;

    const now = performance.now();
    const dt = Math.min(now - last, MAX_FRAME_DT_MS);
    last = now;
    acc += dt;

    let g = 0;
    while (acc >= FIXED_DT_MS && g < MAX_CATCHUP) {
      fixedUpdate();
      acc -= FIXED_DT_MS;
      g++;
    }
    if (g >= MAX_CATCHUP) acc = 0;

    sync();
    renderer.render(scene, camera);
  }
  rafId = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(rafId);
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (background.kind === 'video') {
      background.video.removeEventListener('loadedmetadata', refreshBackground);
    }
    if (interactive) {
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave);
    }
    mat.dispose();
    dropletTex.dispose();
    bgTexture.dispose();
    renderer.dispose();
    if (renderer.domElement.parentElement === mount) {
      mount.removeChild(renderer.domElement);
    }
  };
}
