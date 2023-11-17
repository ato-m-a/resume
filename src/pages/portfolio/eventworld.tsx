import { fetchPortfolio } from '@/common/api/portfolio';
import * as Notion from '@/components/layout/notion';
import { type ReactElement } from 'react';
import { useQuery } from 'react-query';

const Eventworld = (): ReactElement => {
  const { isLoading, data } = useQuery({
    queryKey: ['portfolio', 'eventworld'],
    queryFn: () => fetchPortfolio('eventworld'),
  });

  return (
    <div className="bg-notion-bg w-screen h-screen">
      <Notion.header src="/projects/form.webp" title="이벤트월드 SaaS 전환" />
      {
        isLoading ? null : <Notion.renderer recordMap={data} />
      }
    </div>
  )
}

export default Eventworld;