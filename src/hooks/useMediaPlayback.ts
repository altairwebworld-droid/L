import { RefObject, useEffect } from 'react';

export function useMediaPlayback(videoRef: RefObject<HTMLVideoElement | null>, enabled = true) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    let inView = false;

    const sync = () => {
      if (inView && !document.hidden) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.22 },
    );

    observer.observe(video);
    document.addEventListener('visibilitychange', sync);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      video.pause();
    };
  }, [enabled, videoRef]);
}

