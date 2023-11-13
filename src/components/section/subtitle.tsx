import type { ReactFC } from '@/components/types/FC';
import type { WithClassName } from './types/section';

const SubTitle: ReactFC<WithClassName> = ({ children, className }) => {
  return <p className={`text-xl text-center font-pretendard ${className ?? ''}`}>{children}</p>;
}

export default SubTitle;