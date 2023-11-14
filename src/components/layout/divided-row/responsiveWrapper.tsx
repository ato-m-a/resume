import type { ReactFC } from '@/types/component';

const ResponsiveWrapper: ReactFC = ({ children }) => {
  return (
    <div className="flex max-lg:flex-col">
      {children}
    </div>
  )
}

export default ResponsiveWrapper;