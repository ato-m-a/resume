import type { ReactFC } from '@/types/component';

const ContentColumn: ReactFC = ({ children, className }) => {
  return (
    <div className={`flex flex-col pt-2 flex-1 ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default ContentColumn;