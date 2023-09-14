import * as React from "react"
import styled from "styled-components"

const skillsData = [
  {
    id: 1,
    skillsName: "HTML / CSS",
    skillsExplain: `웹 접근성 및 최적화된 성능을 고려하여 시멘틱한 HTML 구조를 작성하는 데 능숙합니다.
    반응형 웹 디자인을 구현하기위해 Flexbox, Grid를 활용한 경험이 있습니다. 
      SCSS를 활용하여 유지 관리가 쉬운 모듈식 CSS 구조를 설계하고 구현한 경험이 있습니다.`,
  },
  {
    id: 2,
    skillsName: "Javascript (ES6+)",
    skillsExplain: `ES6 이후의 모던 자바스크립트를 활용해 프로젝트에 적용할 수 있으며 더 깔끔한 코드를 위해 지속적으로 공부하고 있습니다.`,
  },
  {
    id: 3,
    skillsName: "React",
    skillsExplain: `React를 활용하여 다양한 웹 애플리케이션을 개발한 경험이 있습니다.
      styled-components과 같은 UI라이브러리를 활용하여 반응형 및 사용자 친화적인 인터페이스를 구축하였습니다.
      현재는 적절한 컴포넌트 분리와 재사용을 위한 Custom Hook위주로 공부하고 있습니다.`,
  },
  {
    id: 4,
    skillsName: "Typescript",
    skillsExplain: `React와 Typescript를 함께 사용하여 타입 안정성을 갖춘 컴포넌트를 개발하였습니다.`,
  },
  {
    id: 5,
    skillsName: "Github",
    skillsExplain: `Git Flow와 같은 협업 워크플로우를 사용하여 팀원들과 원활하게 코드를 통합하였습니다.
       프로젝트 초기 단계에서 커밋 메시지 규칙을 정하고, 해당 컨벤션을 문서화하여 팀원 모두와 공유하였습니다.`,
  },
  {
    id: 6,
    skillsName: "Figma",
    skillsExplain: `디자인 리뷰 및 피드백 과정에서 Figma의 코멘트 기능을 활용하여 팀원 간의 피드백 과정을 더욱 효율적으로 진행하였습니다.`,
  },
  {
    id: 7,
    skillsName: "Progressive Web App (PWA)",
    skillsExplain: `웹 애플리케이션을 모바일 및 데스크톱에서 네이티브 앱처럼 동작하게 만드는 PWA 기술에 익숙합니다. 
    Service Worker를 활용하여 오프라인 경험을 제공하였으며, 푸시 알림 기능 구현 경험이 있습니다.`,
  },
]

const Skills = () => {
  return (
    <>
      <Skills_wrap>
        <Skills_title>Skills</Skills_title>
        {skillsData.map(skill => (
          <Skills_content key={skill.id}>
            <Skills_name>{skill.skillsName}</Skills_name>
            <Skills_explain>{skill.skillsExplain}</Skills_explain>
          </Skills_content>
        ))}
      </Skills_wrap>
    </>
  )
}

export default Skills

const Skills_wrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`
const Skills_title = styled.h2`
  font-family: "IBM Plex Sans", sans-serif;
  text-align: left;
  font-size: 24px;
  margin-bottom: 70px;
`
const Skills_content = styled.div`
  text-align: left;
  margin-bottom: 70px;
`
const Skills_name = styled.h3`
  font-family: "IBM Plex Sans", sans-serif;
`
const Skills_explain = styled.p`
  white-space: pre-line;
  font-size: 17px;
  line-height: 1.6em;
`
