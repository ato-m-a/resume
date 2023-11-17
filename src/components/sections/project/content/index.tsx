import { Bullet, DividedRow } from '@/components/layout';
import { useAnimation } from '@/hooks/useAnimation';
import type { Project } from '@/types/fixtures';
import { useRef, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Content = (project: Project): ReactElement => {
  const { at, name, participants, role, period, bullets, path } = project;

  const listitemRef = useRef<HTMLLIElement>(null);
  useAnimation(listitemRef);

  return (
    <li className="my-10" ref={listitemRef}>
      <DividedRow.responsiveWrapper>
        <DividedRow.titleColumn>
          {
            path
              ? <Link className="text-xl my-2 text-blue-900 hover:underline cursor-pointer" to={path}>{name}</Link>
              : <h3 className="text-xl my-2">{name}</h3>
          }
          <p className="text-lg font-light">
            {at} <span className="text-lg">({participants}명)</span>
          </p>
          <div className="mt-1 max-lg:flex max-lg:flex-row">
            <p className="text-lg max-lg:mr-4">{role}</p>
            <p className="text-lg font-thin">{period}</p>
          </div>
        </DividedRow.titleColumn>
        <DividedRow.contentColumn>
          <ul className="flex-1 pl-4 max-lg:px-14">
            {
              bullets.map((bullet, index) => (
                <Bullet key={`project-bullet-${index}`} {...bullet} />
              ))
            }
          </ul>
        </DividedRow.contentColumn>
      </DividedRow.responsiveWrapper>
    </li>
  )
}

export default Content;