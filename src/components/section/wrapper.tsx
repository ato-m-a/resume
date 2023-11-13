import type { ReactFC } from '@/components/types/FC';
import type { WithClassName } from './types/section';

const SectionWrapper: ReactFC<WithClassName> = ({ children, className }) => {
  return (
    <section className={`w-full pb-32 bg-gray-100 ${className ?? ''}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper;