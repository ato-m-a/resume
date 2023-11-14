import type { NestedJobItemProps } from '@/common/fixtures.d';
import type { ReactElement } from 'react';

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