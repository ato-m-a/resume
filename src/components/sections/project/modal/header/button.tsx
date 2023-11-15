import { useModal } from '@/hooks/useModal';
import type { ReactElement } from 'react';

const Button = (): ReactElement => {
  const { closeModal } = useModal();

  return <p className="modal__button" onClick={closeModal}>닫기</p>;
}

export default Button;