import { useModal } from '@/hooks/useModal';
import type { ModalElement } from '../types/modal';

const Title = (): ModalElement => {
  const { isActivate, activeItem } = useModal();

  if (!isActivate) return null;
  
  return (
    <h1 className="text-2xl font-semibold max-lg:text-lg">{activeItem?.name}</h1>
  )
}

export default Title;