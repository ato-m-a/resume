import type { ReactFC } from '@/types/component';

const SectionWrapper: ReactFC = ({ children, className }) => {
  return (
    <section className={`w-full pb-32 bg-gray-100 ${className ?? ''}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper;