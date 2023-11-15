import type { ComponentType } from 'react';
import type { ModalProps } from '../types/modal';
import withDetail from '../withState';
import Figure from './figure';
import Image from './image';
import Paragraph from './paragraph';

const Body: ComponentType<ModalProps> = ({ project }) => {
  const { contents } = project.details;

  return (
    <div className="flex justify-between px-6 w-full max-lg:flex-col gap-x-14">
      {
        contents.map((content, index) => (
          <Figure key={`body-${index}`} className="flex flex-col basis-1/2 py-20 max-lg:py-16 max-md:py-12">
            <div className="mb-10 max-lg:px-12 max-md:px-6">
              <Image src={content.image} />
            </div>
            {
              content.paragraphs.map((paragraph, index) => (
                <Paragraph key={`body-paragraph-${index}`} className={`font-pretendard text-2xl max-md:text-lg popup-animate break-keep font-light ${index !== content.paragraphs.length - 1 ? 'mb-2' : ''}`}>
                  {paragraph}
                </Paragraph>
              ))
            }
          </Figure>
        ))
      }
    </div>
  )
}

export default withDetail(Body);