import React from 'react';

interface SplineSceneProps {
  url: string;
  className?: string;
}

export default function SplineScene({ url, className = '' }: SplineSceneProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      <iframe 
        src={url} 
        className="w-full h-full border-0"
        title="Spline 3D Scene"
        loading="lazy"
        allow="accelerometer; gyroscope; visibility-sensor; xr-spatial-tracking"
      />
    </div>
  );
}
