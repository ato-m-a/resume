import * as Widget from '@/components/experience-widget';
import careers from '@/fixtures/career.json';
import type { ReactElement } from 'react';
import type { Career } from './experience-widget/types/experience';

const Experience = (): ReactElement => {
  return (
    <ul className="flex flex-col font-pretendard">
      {
        careers.map((career: Career, index) => (
          <Widget.listitem key={`job-li-${index}`} {...career} />
        ))
      }
    </ul>
  )
}

export default Experience;