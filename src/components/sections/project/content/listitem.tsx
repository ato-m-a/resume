import type { LiProps } from '@/components/sections/project/content/types/listitem';
import type { ReactElement } from 'react';

const Listitem = ({ content }: LiProps): ReactElement => {
  if (typeof content === 'string') return <li className="mb-2 list-disc">{content}</li>
  
  return (
    <li className="mb-2">
      <ul className="pl-5 list-indent">
        {
          content.map((detail, index) => (
            <li key={`nested-content-${index}`} className="my-2">{detail}</li>
          ))
        }
      </ul>
    </li>
  )
}


export default Listitem;