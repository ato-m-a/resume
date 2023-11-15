import type { ReactElement } from 'react';
import Button from './button';
import Subtitle from './subtitle';
import Title from './title';

const Header = (): ReactElement => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-pretendard">
        <Title />
        <Subtitle />
      </div>
      <Button />
    </div>
  )
}

export default Header;