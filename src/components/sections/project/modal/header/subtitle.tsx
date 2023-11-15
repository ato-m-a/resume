import type { ComponentType } from 'react';
import type { ModalProps } from '../types/modal';
import withState from '../withState';

const Subtitle: ComponentType<ModalProps> = ({ activeItem }) => {
  return <span className="text-lg font-thin max-lg:text-sm">{activeItem.at}</span>
}

export default withState(Subtitle);