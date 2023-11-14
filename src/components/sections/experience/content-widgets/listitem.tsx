import type { LiProps } from '@/components/sections/experience/types/listitem';
import type { ReactElement } from 'react';

const Listitem = ({ job }: LiProps): ReactElement => {
  if (typeof job === 'string') return <li className="my-2 list-disc">{job}</li>
  
  return (
    <li className="my-2">
      <ul className="pl-5 list-indent">
        {
          job.map((detail, index) => (
            <li key={`nested-job-${index}`} className="my-2">{detail}</li>
          ))
        }
      </ul>
    </li>
  )
}


export default Listitem;