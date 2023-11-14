import type { ReactFC } from '@/types/component';

const Wrapper: ReactFC = ({ children }) => {
  return (
    <ul className="w-full">
      {children}
    </ul>
  )
}

export default Wrapper;