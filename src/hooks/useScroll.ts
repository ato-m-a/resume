import { useEffect, useState } from 'react';

export const useScroll = () => {
  // 스크롤이 헤더 높이를 넘었는지 확인하는 상태
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const offset = window.scrollY;
    const headerHeight = 100; // 헤더의 높이
    if (offset > headerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // 컴포넌트가 마운트되면 스크롤 이벤트 리스너를 추가하고, 언마운트되면 제거
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrolled;
}