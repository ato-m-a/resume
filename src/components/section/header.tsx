import type { ReactFC } from '@/components/types/FC';

const Header: ReactFC = ({ children }) => {
  return (
    <div className="mb-16">
      {children}
    </div>
  )
}

export default Header;