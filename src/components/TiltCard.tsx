import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { GlowingEffect } from './ui/glowing-effect';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "white" | "red";
}

export default function TiltCard({ children, className = '', variant = "default" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => {
      setInteractive(media.matches);
      if (!media.matches) {
        x.set(0);
        y.set(0);
      }
    };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [x, y]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseLeave={interactive ? handleMouseLeave : undefined}
      style={{
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative group h-full ${className}`}
    >
      <div className="relative h-full rounded-2xl md:rounded-3xl p-2 md:p-3 shadow-2xl">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={!interactive}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d"
          }}
          className={`relative h-full w-full rounded-xl md:rounded-2xl ${
            variant === "white"
              ? "border border-black/5 bg-white text-[#0b3478] shadow-[0_20px_60px_rgba(3,12,32,0.18)]"
              : "lycore-card"
          }`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
