import { useAnimation } from '@/hooks/useAnimation';
import type { ReactFC } from '@/types/component';
import { useRef } from 'react';

const Figure: ReactFC = ({ children, className }) => {
  const figureRef = useRef<HTMLElement>(null);
  useAnimation(figureRef);

  return (
    <figure className={className} ref={figureRef}>
      {children}
    </figure>
  )
}

export default Figure;