import type { ReactElement } from 'react';
import type { IconProps } from './types/title';

const Icon = ({ icon }: IconProps): ReactElement => {
  const regex = new RegExp(/^\/images\/.*\.webp$/);

  if (regex.test(icon)) return <img src={icon} alt="skill logo" className="w-6 h-6 rounded" />
  return <span className="text-xl">{icon}</span>
}

export default Icon;