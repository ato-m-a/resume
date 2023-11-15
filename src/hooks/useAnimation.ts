import { useEffect, type RefObject } from 'react';

export const useAnimation = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const element = ref.current;

    const animate = () => {
      let start: number | null = null;
      const duration = 1000;

      const easeOutQuad = (t: number) => t * (2 - t);

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        // 비선형 타이밍 계산
        const easedProgress = easeOutQuad(progress / duration);

        const opacity = Math.min(easedProgress, 1);
        const translateY = Math.max(40 - 40 * easedProgress, 0);

        if (element) {
          element.style.opacity = opacity.toString();
          element.style.transform = `translateY(${translateY}px)`;
        }

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate();
        }
      });
    }, { threshold: 0.1 });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
}
