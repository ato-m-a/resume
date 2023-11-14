import type { ReactElement } from 'react';
import * as Widget from './title-widgets';
import type { TitleProps } from './types/title';

const Title = ({ id, icon, level }: TitleProps): ReactElement => {
  const Level = Widget.getComponent(level);

  return (
    <div className="flex items-center">
      <Widget.icon icon={icon} />
      <span className="mx-2">{id}</span>
      <Level />
    </div>
  )
}

export default Title;