import type { ReactFC } from '@/types/component';

const Header: ReactFC = ({ children }) => {
  return (
    <div className="mb-16">
      {children}
    </div>
  )
}

export default Header;