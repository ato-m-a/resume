import type { ComponentType } from 'react';
import type { ModalProps } from '../types/modal';
import withState from '../withState';

const Subtitle: ComponentType<ModalProps> = ({ project }) => {
  const { at } = project.summary;

  return <span className="text-lg font-thin max-lg:text-sm">{at}</span>
}

export default withState(Subtitle);