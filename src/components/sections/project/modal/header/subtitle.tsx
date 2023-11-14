import { useModal } from '@/hooks/useModal';
import type { ModalElement } from '../types/modal';

const Subtitle = (): ModalElement => {
  const { isActivate, activeItem } = useModal();

  if (!isActivate) return null;

  return (
    <span className="text-lg font-thin max-lg:text-sm">{activeItem?.at}</span>
  )
}

export default Subtitle;