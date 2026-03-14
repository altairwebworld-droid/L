import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { GlowingEffect } from './ui/glowing-effect';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "white" | "red";
}

export default function TiltCard({ children, className = '', variant = "default" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group h-full ${className}`}
    >
      <div className="relative h-full rounded-[1.5rem] border border-white/10 p-2 md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
          variant={variant}
        />
        <div 
          style={{ 
            transform: "translateZ(20px)", 
            transformStyle: "preserve-3d" 
          }}
          className="relative h-full w-full rounded-xl overflow-hidden bg-[#0c0c0c] border border-white/5 shadow-2xl"
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
