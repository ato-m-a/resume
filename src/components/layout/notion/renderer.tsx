import { useAnimation } from '@/hooks/useAnimation';
import { useRef } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';

const Notion = ({ recordMap }: { recordMap: any }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useAnimation(wrapperRef);

  return (
    <div ref={wrapperRef} className="bg-notion-bg">
      <NotionRenderer recordMap={recordMap} components={{ Code, Collection }} />
    </div>
  )
}

export default Notion;