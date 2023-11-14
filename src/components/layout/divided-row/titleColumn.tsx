import type { ReactFC } from '@/types/component';

const TitleColumn: ReactFC = ({ children }) => {
  return (
    <div className="basis-2/6 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:mb-4">
      {children}
    </div>
  )
}

export default TitleColumn;