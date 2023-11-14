import { myImage } from '@/common/assets';
import type { ReactElement } from 'react';

const Image = (): ReactElement => {
  return (
    <div className="w-64 h-64 rounded-full bg-gray-300 max-md:mx-auto max-md:mb-4 overflow-hidden">
      <img src={myImage} alt="my image" className="w-full h-full object-cover" />
    </div>
  )
}

export default Image;