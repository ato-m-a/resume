import { github, linkedin } from '@/common/assets';
import { useScroll } from '@/hooks/useScroll';
import { ReactElement } from 'react';

const Header = (): ReactElement => {
  const scrolled = useScroll();

  return (
    <header className={`${scrolled ? 'head-down' : ''} fixed w-full py-12 bg-gray-100 z-50 max-md:py-6`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex-1">
          <h1 className="text-5xl text-primary font-normal font-pretendard py-1 max-md:text-3xl">홍준혁</h1>
          <h2 className="text-2xl font-thin font-pretendard text-primary max-md:text-xl">웹 프론트엔드 개발자</h2>
        </div>
        <nav className="flex-1 flex justify-end">
          <ul className="h-full flex items-center space-x-4">
            <li>
              <a href="https://github.com/ato-m-a" target="_blank" rel="noreferer noopener">
                <img className="w-14 h-14 max-md:w-10 max-md:h-10" src={github} alt="go to my github page" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hongjunhyuk" target="_blank" rel="noreferer noopener">
                <img className="w-14 h-14 max-md:w-10 max-md:h-10" src={linkedin} alt="go to my linkedin page" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;