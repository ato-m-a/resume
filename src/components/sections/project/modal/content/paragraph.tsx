import { useAnimation } from '@/hooks/useAnimation';
import type { ReactFC } from '@/types/component';
import { useRef } from 'react';

const Paragraph: ReactFC = ({ children, className }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  useAnimation(paragraphRef);

  return (
    <p className={className} ref={paragraphRef}>
      {children}
    </p>
  )
}

export default Paragraph;