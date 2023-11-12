import type { ReactFC } from '@/components/types/FC';

const SubTitle: ReactFC = ({ children }) => {
  return <p className="text-xl text-center font-pretendard">{children}</p>;
}

export default SubTitle;