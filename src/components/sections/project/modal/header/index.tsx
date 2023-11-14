import { useModal } from '@/hooks/useModal';
import type { ModalElement } from '../types/modal';
import Button from './button';
import Subtitle from './subtitle';
import Title from './title';

const Header = (): ModalElement => {
  const { isActivate } = useModal();

  if (!isActivate) return null;

  return (
    <div className="flex justify-between items-center">
      <div className="font-pretendard">
        <Title />
        <Subtitle />
      </div>
      <Button />
    </div>
  )
}

export default Header;