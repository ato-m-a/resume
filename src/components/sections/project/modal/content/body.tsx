import type { ComponentType } from 'react';
import type { ModalProps } from '../types/modal';
import withState from '../withState';
import Image from './image';

const Body: ComponentType<ModalProps> = ({ activeItem }) => {
  return (
    <div className="flex justify-between px-6 w-full max-lg:flex-col gap-x-14">
      {
        activeItem.details.body.map((item, index) => (
          <div key={`body-${index}`} className="flex flex-col basis-1/2 py-20 max-lg:py-16 max-md:py-12">
            <div className="mb-10 max-lg:px-12 max-md:px-6">
              <Image src={item.image} />
            </div>
            {
              typeof item.text === 'string' ? <p className="font-pretendard text-2xl font-light">{item.text}</p> :
              (
                item.text.map((str, index) => (
                  <p className={`font-pretendard text-2xl font-light ${index !== item.text.length - 1 ? 'mb-2' : ''}`}>{str}</p>
                ))
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default withState(Body);