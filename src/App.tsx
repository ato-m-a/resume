import * as assets from '@/common/assets';
import { Experience, Header, TextHighlight } from '@/components';
import * as Accordion from '@/components/accordion';
import * as Section from '@/components/section';
import skillset from '@/fixtures/skillset.json';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Header />
      {/* About Me */}
      <Section.wrapper className="pt-80 max-md:pt-40">
        <Section.header>
          <Section.title>😊 About Me</Section.title>
          <Section.subTitle>저를 소개해 드릴게요 !</Section.subTitle>
        </Section.header>
        <div className="flex max-md:block justify-between items-center">
          <div className="w-64 h-64 rounded-full bg-gray-300 max-md:mx-auto max-md:mb-4 overflow-hidden">
            <img src={assets.myImage} alt="my image" className="w-full h-full object-cover" />
          </div>
          <div className="text-lg w-3/5 max-md:w-full font-extralight leading-9 max-lg:pl-8 max-md:mx-auto font-pretendard break-keep">
            Node.js, AWS 기반의 3년 차 웹 개발자로 소규모 조직에서 서비스의 개발 주기 전반에 걸쳐 주도적으로 업무를 진행해왔습니다.
            주로 프론트엔드 개발을 담당했으며, 필요에 따라 백엔드 개발 및 클라우드 인프라 엔지니어링을 겸하였습니다. <br/>
            창업 초기 단계의 스타트업에서 서비스의 초기 설계부터 개발, 운영까지 경험하였고, 이 과정에서 개발 조직을 리드하며 <TextHighlight>회사의 기술 기반 마련</TextHighlight>에
            기여한 경험이 있습니다. <br />
            마케팅 에이전시에 재직하며 Server-Driven UI를 바탕으로 한 간편 구축 시스템 개발로 동료들의 <TextHighlight>업무 효율성을 제고</TextHighlight>했으며, 
            Next.js, React와 같은 구현 기술을 도입하고 디바이스 선호도, 전환율과 같은 데이터의 정량적 분석을 통해 모바일 퍼스트 레이아웃 도입, 
            UI A/B테스트를 수행하며 <TextHighlight>사용자 경험을 개선</TextHighlight>하였습니다. <br />
          </div>
        </div>
      </Section.wrapper>
      {/* Skills */}
      <Section.wrapper>
        <Section.header>
          <Section.title>💻 Skills</Section.title>
          <Section.subTitle>업무에 사용 중이거나, 사용 경험이 있는 기술들이에요 !</Section.subTitle>
        </Section.header>
        <Accordion.wrapper>
          {/* skills - javascript */}
          <Accordion.listitem id="JavaScript" content={skillset.javascript}>
            <div className="flex items-center">
              <img src={assets.javascript} alt="javascript logo" className="w-6 h-6 rounded" />
              <span className="mx-2">JavaScript</span>
              <span className="text-xs text-green-600">Advanced</span>
            </div>
          </Accordion.listitem>
          {/* skills - typescript */}
          <Accordion.listitem id="TypeScript" content={skillset.typescript}>
            <div className="flex items-center">
              <img src={assets.typescript} alt="typescript logo" className="w-6 h-6 rounded" />
              <span className="mx-2">TypeScript</span>
              <span className="text-xs text-green-600">Advanced</span>
            </div>
          </Accordion.listitem>
          {/* skills - react */}
          <Accordion.listitem id="React" content={skillset.react}>
            <div className="flex items-center">
              <img src={assets.react} alt="react logo" className="w-6 h-6 rounded" />
              <span className="mx-2">React</span>
              <span className="text-xs text-green-400">Intermediate</span>
            </div>
          </Accordion.listitem>
          {/* skills - next.js */}
          <Accordion.listitem id="Next.js" content={skillset.nextjs}>
            <div className="flex items-center">
              <img src={assets.nextjs} alt="next.js logo" className="w-6 h-6" />
              <span className="mx-2">Next.js</span>
              <span className="text-xs text-green-600">Advanced</span>
            </div>
          </Accordion.listitem>
          {/* skills - State Management */}
          <Accordion.listitem id="StateManagement" content={skillset.state_management}>
            <div className="flex items-center">
              <span className="text-xl">⚙️</span>
              <span className="mx-2">상태관리</span>
              <span className="text-xs text-green-400">Intermediate</span>
            </div>
          </Accordion.listitem>
          {/* skills - nestjs */}
          <Accordion.listitem id="NestJS" content={skillset.nestjs}>
            <div className="flex items-center">
              <img src={assets.nestjs} alt="NestJS logo" className="w-6 h-6" />
              <span className="mx-2">NestJS</span>
              <span className="text-xs text-green-600">Advanced</span>
            </div>
          </Accordion.listitem>
          {/* skills - Amazon AWS */}
          <Accordion.listitem id="AmazonAWS" content={skillset.aws}>
            <div className="flex items-center">
              <img src={assets.aws} alt="AWS logo" className="w-6 h-6 rounded" />
              <span className="mx-2">Amazon AWS</span>
              <span className="text-xs text-green-400">Intermediate</span>
            </div>
          </Accordion.listitem>
        </Accordion.wrapper>
      </Section.wrapper>
      {/* Experience */}
      <Section.wrapper>
        <Section.header>
          <Section.title>🌟 Experience</Section.title>
          <Section.subTitle>제가 쌓아온 경험들을 보여드릴게요 !</Section.subTitle>
        </Section.header>
        <Experience />
      </Section.wrapper>
    </RecoilRoot>
  )
}

export default App;

