import type { ReactFC } from '@/types/component';
import type { WrapperProps } from './types/wrapper';

const SectionWrapper: ReactFC<WrapperProps> = ({ children, className, id }) => {
  return (
    <section className={`w-full pb-32 bg-gray-100 ${className ?? ''}`} id={id}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper;