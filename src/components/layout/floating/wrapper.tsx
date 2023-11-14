import type { ReactFC } from '@/types/component';

const Wrapper: ReactFC = ({ children, className }) => {
  return (
    <div className={`fixed ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper;