import type { ReactElement } from 'react';
import Body from './body';
import Header from './header';

const Content = (): ReactElement => {
  return (
    <div className="overflow-y-scroll overflow-x-hidden flex flex-col flex-1 pt-8">
      <Header />
      <Body />
    </div>
  )
}

export default Content;