import type { ReactElement } from 'react';
import type { NestedJobItemProps } from './types/experience';

const NestedListitem = ({ job }: NestedJobItemProps): ReactElement => {
  if (typeof job === 'string') return <li className="my-2 list-disc">{job}</li>
  
  return (
    <li className="my-2">
      <ul className="pl-5 list-disc">
        {
          job.map((detail, index) => (
            <li key={`nested-job-${index}`} className="my-2">{detail}</li>
          ))
        }
      </ul>
    </li>
  )
}

export default NestedListitem;