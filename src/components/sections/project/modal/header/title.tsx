import type { ComponentType } from 'react';
import type { ModalProps } from '../types/modal';
import withState from '../withState';

const Title: ComponentType<ModalProps> = ({ project }) => {
  const { name } = project.summary;

  return <h1 className="text-2xl font-semibold max-md:text-lg">{name}</h1>
}

export default withState(Title);