import type { ReactElement } from 'react';
import NestedListitem from './nested-listitem';
import type { Career } from './types/experience';

const Listitem = ({ company, url, position, period, description, jobs }: Career): ReactElement => {
  return (
    <li className="my-10">
      <div className="flex">
        <div className="basis-2/6">
          <h3 className="text-4xl my-2">{company}</h3>
          <a href={url} target="_blank" rel="noreferer noopener" className="text-xl block italic font-thin hover:underline">
            {url}
          </a>
          <h4 className="text-xl my-2">{position}</h4>
          <p className="text-lg font-thin">{period}</p>
        </div>
        <div className="flex flex-col pt-2 flex-1">
          <p className="italic text-xl font-thin">{description}</p>
          <ul className="flex-1 pt-4 pl-4">
            {
              jobs.map((job, index) => (
                <NestedListitem key={`job-item-${index}`} job={job} />
              ))
            }
          </ul>
        </div>
      </div>
    </li> 
  )
}

export default Listitem;