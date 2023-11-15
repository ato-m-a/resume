import { useModal } from '@/hooks/useModal';
import { type ComponentType } from 'react';
import Fallback from './fallback';
import type { ModalProps } from './types/modal';

const withState = <T extends {}>(WrappedComponent: ComponentType<ModalProps>) => {
  const Component = (props: T) => {
    const { activeItem } = useModal();

    if (!activeItem) return <Fallback />;

    return (
      <WrappedComponent activeItem={activeItem} {...props} />
    )
  }

  return Component;
}

export default withState;