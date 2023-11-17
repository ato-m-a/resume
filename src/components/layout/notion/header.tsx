import { useAnimation } from '@/hooks/useAnimation';
import { useRef, type ReactElement } from 'react';
import { HeaderProps } from './types/header';

const Header = ({ src, title }: HeaderProps): ReactElement => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useAnimation(imageWrapperRef);
  useAnimation(headingRef);

  return (
    <>
      <div className="relative w-full h-1/4 overflow-hidden" ref={imageWrapperRef}>
        <img src={src} alt="header image" className="object-cover w-full h-full" />
      </div>
      <h1 className="notion-page font-pretendard font-semibold text-4xl pt-10 pb-2 max-md:text-3xl" ref={headingRef}>{title}</h1>
    </>
  )
}

export default Header;