import { useModal } from '@/hooks/useModal';
import type { ModalElement } from '../types/modal';

const Button = (): ModalElement => {
  const { closeModal } = useModal();

  return <p className="modal__button" onClick={closeModal}>닫기</p>;
}

export default Button;