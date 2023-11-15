import * as DividedRow from '@/components/layout/divided-row';
import type { Career } from '@/types/fixtures';
import type { ReactElement } from 'react';
import Listitem from './listitem';

const Content = ({ company, url, position, period, description, jobs }: Career): ReactElement => {
  return (
    <li className="my-10">
      <DividedRow.responsiveWrapper>
        <DividedRow.titleColumn>
          <h3 className="text-4xl my-2">{company}</h3>
          <a href={url} target="_blank" rel="noreferer noopener" className="text-xl block italic font-thin hover:underline">
            {url}
          </a>
          <h4 className="text-xl my-2">{position}</h4>
          <p className="text-lg font-thin">{period}</p>
        </DividedRow.titleColumn>
        <DividedRow.contentColumn className="pt-2">
          <p className="italic text-xl font-thin max-lg:text-center">{description}</p>
          <ul className="flex-1 pt-4 pl-4 max-lg:px-14">
            {
              jobs.map((job, index) => (
                <Listitem key={`job-item-${index}`} job={job} />
              ))
            }
          </ul>
        </DividedRow.contentColumn>
      </DividedRow.responsiveWrapper>
    </li>
  )
}

export default Content;