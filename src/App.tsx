import { FixtureRepository } from '@/common/repository';
import { Header } from '@/components';
import { Emoji, Floating, ModalPortal, RemoteControl, Section, TextHighlight } from '@/components/layout';
import { About, Experience, Project, Skills } from '@/components/sections';
import { RecoilRoot } from 'recoil';
import type { Career, Project as Projects, Skill } from './types/fixtures';

const App = () => {
  const careers = FixtureRepository.get<Career>('career');
  const skills = FixtureRepository.get<Skill>('skills');
  const projects = FixtureRepository.get<Projects>('project');

  return (
    <RecoilRoot>
      <Header />
      {/* About Me */}
      <Section.wrapper className="pt-80 max-md:pt-40" id="about">
        <Section.header>
          <Section.title><Emoji.hello /> About Me</Section.title>
          <Section.subtitle>저를 소개해 드릴게요 !</Section.subtitle>
        </Section.header>
        <About.wrapper>
          <About.image />
          <About.content>
            <p className="mb-2">
              Node.js, AWS 기반의 3년 차 웹 개발자로 소규모 조직에서 서비스의 개발 주기 전반에 걸쳐 주도적으로 업무를 진행해왔습니다. 창업 초기 단계의 스타트업에서 처음부터 구축에 참여하며
              <TextHighlight>서비스의 초기 설계부터 개발, 운영</TextHighlight>까지 경험하며 회사의 기술 기반 마련에 기여한 경험이 있습니다.
            </p>
            <p className="mb-2">
              동료들의 <TextHighlight>업무 효율을 개선하는 일</TextHighlight>을 좋아합니다. 개별 제작하던 어드민 시스템의 SaaS 전환 및 운영 백오피스 개발, 
              Server-Driven UI를 바탕으로 한 간편 구축 시스템 개발을 통해 개발 리소스를 절감하고 운영과 관리의 일관성을 확보한 경험이 있습니다.
            </p>
            <p>
              개인이 하고 싶은 일보다 <TextHighlight>팀과 회사 차원의 임팩트에 집중</TextHighlight>합니다. 프론트엔드 영역이 고객을 처음 맞이하고 서비스의 첫인상을 책임진다는 
              부분에 매력을 느꼈지만, 필요에 따라 NestJS 백엔드 개발 및 Amazon AWS 클라우드 엔지니어링 또한 수행해왔습니다. 이러한 다방면의 경험을 바탕으로 어떠한 기술적인 도전에도 
              적극적으로 대응하고, 주도적으로 업무하여 비즈니스 성장에 기여하고자 합니다.
            </p>
          </About.content>
        </About.wrapper>
      </Section.wrapper>
      {/* Skills */}
      <Section.wrapper id="skills">
        <Section.header>
          <Section.title><Emoji.skill /> Skills</Section.title>
          <Section.subtitle>업무에 사용 중이거나, 사용 경험이 있는 기술들이에요 !</Section.subtitle>
          <Section.subtitle className="mt-2">
            <span className="bg-blue-600 text-white px-2 py-1 text-sm rounded mr-2">Beginner - 1</span>
            <span className="bg-green-600 text-white px-2 py-1 text-sm rounded mr-2">Intermediate - 2</span>
            <span className="bg-orange-600 text-white px-2 py-1 text-sm rounded mr-2">Advanced - 3</span>
            <span className="bg-red-600 text-white px-2 py-1 text-sm rounded">Expert - 4</span>
          </Section.subtitle>
        </Section.header>
        <Skills.wrapper>
          {
            skills.map((skill, index) => (
              <Skills.content key={`skill-content-${index}`} id={skill.id} bullets={skill.bullets}>
                <Skills.title id={skill.id} level={skill.level} icon={skill.icon}  />
              </Skills.content>
            ))
          }
        </Skills.wrapper>
      </Section.wrapper>
      {/* Experience */}
      <Section.wrapper id="experience">
        <Section.header>
          <Section.title><Emoji.experience /> Experience</Section.title>
          <Section.subtitle>제가 쌓아온 경험들을 보여드릴게요 !</Section.subtitle>
        </Section.header>
        <Experience.wrapper>
          {
            careers.map((career, index) => (
              <Experience.content key={`career-li-${index}`} {...career} />
            ))
          }
        </Experience.wrapper>
      </Section.wrapper>
      {/* Project */}
      <Section.wrapper id="project">
        <Section.header>
          <Section.title><Emoji.project /> Project</Section.title>
          <Section.subtitle>지금까지 이런 프로젝트를 해왔어요 !</Section.subtitle>
        </Section.header>
        <Project.wrapper>
          {
            projects.map((project, index) => (
              <Project.content key={`project-li-${index}`} {...project} />
            ))
          }
        </Project.wrapper>
      </Section.wrapper>
      <Floating.wrapper className="font-pretendard font-thin p-2 bottom-2 left-2 max-md:text-sm">
        <p>2023년 11월 15일 업데이트</p>
      </Floating.wrapper>
      <RemoteControl />
      <ModalPortal>
        <Project.modal />
      </ModalPortal>
    </RecoilRoot>
  )
}

export default App;

