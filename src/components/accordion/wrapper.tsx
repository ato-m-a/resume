import type { ReactFC } from '@/components/types/FC';

const Wrapper: ReactFC = ({ children }) => {
  return (
    <ul className="w-full">
      {children}
    </ul>
  )
}

export default Wrapper;