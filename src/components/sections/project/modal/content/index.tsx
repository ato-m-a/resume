import { useModal } from '@/hooks/useModal';
import type { ModalElement } from '../types/modal';

const Content = (): ModalElement => {
  const { isActivate } = useModal();

  if (!isActivate) return null;

  return (
    <div className="overflow-scroll flex flex-col flex-1 pt-4">
      
    </div>
  )
}

export default Content;