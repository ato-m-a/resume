import type { ComponentType } from 'react';
import type { ModalProps } from '../types/modal';
import withState from '../withState';
import Figure from './figure';
import Image from './image';
import Paragraph from './paragraph';

const Header: ComponentType<ModalProps> = ({ activeItem }) => {
  return (
    <Figure className="flex px-6 w-full max-lg:flex-col">
      <div className="flex basis-2/5 max-lg:p-12 max-md:p-6">
        <Image src={activeItem.details.header.image} />
      </div>
      <figcaption className="flex flex-col flex-1 pl-16 font-pretendard max-lg:p-4">
        <Paragraph className="font-medium text-2xl mb-8">
          {
            activeItem.details.header.tech_stack.map((skill, index) => (
              <span className="tech-stack max-md:text-lg" key={`stack-${index}`}>{skill}</span>
            ))
          }
        </Paragraph>
        <div className="text-2xl font-light max-md:text-lg">
          {
            activeItem.details.header.text.map((text, index) => (
              <Paragraph className="break-keep mb-4" key={`text-${index}`}>{text}</Paragraph>
            ))
          }
        </div>
      </figcaption>
    </Figure>
  )
};

export default withState(Header);