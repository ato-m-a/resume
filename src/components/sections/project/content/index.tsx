import * as DividedRow from '@/components/layout/divided-row';
import { useAnimation } from '@/hooks/useAnimation';
import { useModal } from '@/hooks/useModal';
import type { Project } from '@/types/fixtures';
import { useRef, type ReactElement } from 'react';
import Listitem from './listitem';

const Content = (project: Project): ReactElement => {
  const { name, at, summary } = project;
  const { openModal } = useModal();

  const listitemRef = useRef<HTMLLIElement>(null);
  useAnimation(listitemRef);

  return (
    <li className="my-10" ref={listitemRef}>
      <DividedRow.responsiveWrapper>
        <DividedRow.titleColumn>
          <a className="text-xl my-2 text-blue-900 hover:underline cursor-pointer" onClick={() => openModal(project)}>{name}</a>
          <p className="text-lg font-light">
            {at} <span className="text-lg">({summary.participants}명)</span>
          </p>
          <div className="mt-1 max-lg:flex max-lg:flex-row">
            <p className="text-lg max-lg:mr-4">{summary.role}</p>
            <p className="text-lg font-thin">{summary.period}</p>
          </div>
        </DividedRow.titleColumn>
        <DividedRow.contentColumn>
          <ul className="flex-1 pl-4 max-lg:px-14">
            {
              summary.content.map((content, index) => (
                <Listitem key={`project-content-${index}`} content={content} />
              ))
            }
          </ul>
        </DividedRow.contentColumn>
      </DividedRow.responsiveWrapper>
    </li>
  )
}

export default Content;