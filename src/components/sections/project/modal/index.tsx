import * as Floating from '@/components/layout/floating';
import { useModal } from '@/hooks/useModal';
import { useEffect, useState, type ReactElement } from 'react';
import Content from './content';
import Header from './header';

const Modal = (): ReactElement | null => {
  const { isActivate } = useModal();

  const [animate, setAnimate] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (animate && !visible) {
      setVisible(true);
      setTimeout(() => 
        setVisible(false), 
      300);
    }

    if (isActivate) {
      setAnimate(isActivate);
    } else {
      setTimeout(() => {
        setAnimate(isActivate);
      }, 300);
    }
  }, [isActivate, visible, animate]);

  if (!animate && !visible) return null;

  return (
    <Floating.wrapper className={`modal__wrapper ${isActivate ? 'open' : 'close'}`}>
      <div className={`modal ${isActivate ? 'open' : 'close'}`}>
        <Header />
        <Content />
      </div>
    </Floating.wrapper>
  )
}

export default Modal;