import type { ReactFC } from '@/types/component';

const Content: ReactFC = ({ children }) => {
  return (
    <div className="text-lg w-3/5 max-md:w-full font-extralight leading-9 max-md:mx-auto font-pretendard break-keep">
      {children}
    </div>
  )
}

export default Content;