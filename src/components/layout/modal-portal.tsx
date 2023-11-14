import type { ReactNode, ReactPortal } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props): ReactPortal | null => {
  const root = document.getElementById('modal-root');

  if (root) return ReactDom.createPortal(children, root);
  return null;
}

export default ModalPortal;