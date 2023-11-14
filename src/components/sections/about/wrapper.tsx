import type { ReactFC } from '@/types/component';

const Wrapper: ReactFC = ({ children }) => {
  return (
    <div className="flex max-md:block justify-between items-center">
      {children}
    </div>
  )
}

export default Wrapper;