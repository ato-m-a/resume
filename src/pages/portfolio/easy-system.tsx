import { fetchPortfolio } from '@/common/api/portfolio';
import * as Notion from '@/components/layout/notion';
import { type ReactElement } from 'react';
import { useQuery } from 'react-query';

const EasySystem = (): ReactElement => {
  const { isLoading, data } = useQuery({
    queryKey: ['portfolio', 'easy-sys'],
    queryFn: () => fetchPortfolio('easy-sys'),
  });

  return (
    <div className="bg-notion-bg w-screen h-screen">
      <Notion.header src="/projects/laptop.webp" title="⚙️ 사전청약 페이지 간편 구축 시스템" />
      {
        isLoading ? null : <Notion.renderer recordMap={data} />
      }
    </div>
  )
}

export default EasySystem;