import { useEffect, useState } from 'react';

/**
 * @description 스크롤 이벤트를 감지하여 스크롤 여부를 반환하는 훅
 */
export const useScroll = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const headerHeight = 100; // 헤더의 높이
    if (offset > headerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolled;
}