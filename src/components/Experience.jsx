import * as React from "react"
import styled from "styled-components"
const experienceData = [
  {
    id: 1,
    experienceName: "엘리스 코딩 SW 5기",
    experiencePeriod: " 2023.05.15 ~ 09.01 ",
    experienceExplain: `Software engineer 4개월 과정을 진행하면서 두 번의 팀프로젝트를 진행하였습니다.
    최종 프로젝트 16팀 가운데 1등을하여 대상을 받았습니다.`,
  },
  {
    id: 2,
    experienceName: "인하대학교 ",
    experiencePeriod: "  2017.03 ~ 졸업예정  ",
    experienceExplain: `일본언어문화학과, 문화콘텐츠,문화경영학과 졸업 예정`,
  },
  {
    id: 3,
    experienceName: "프리온보딩 FE 챌린지 September 반응형",
    experiencePeriod: "2023.09.04 ~ 09.17",
    experienceExplain: `반응형 웹 디자인을 통해 미디어 쿼리를 이용하여 디바이스 화면 크기에 따라 스타일을 동적으로 조절하는 방법을 익혔습니다. 
      또한, 유연한 그리드 시스템을 활용하여 다양한 디바이스에서 일관된 레이아웃을 제공하고, 
      뷰포트 단위를 사용하여 화면 크기에 따른 동적인 크기 조절을 구현했습니다. 
      이러한 기술들을 통해 사용자 경험을 향상시키는 반응형 웹 페이지를 구축하는 방법을 숙지했습니다.`,
  },
  {
    id: 4,
    experienceName: "프리온보딩 FE 챌린지 October 로그인",
    experiencePeriod: "2023.10.07 ~ 10.18",
    experienceExplain: `사용자 인증, 안전한 비밀번호 저장(해싱), JWT 토큰 발급, 클라이언트 저장 및 전송, 소셜 로그인(OAuth)을 구현하며 학습하였습니다.`,
  },
]

const Experience = () => {
  return (
    <>
      <ExperienceTitle>Experience.</ExperienceTitle>
      {experienceData.map(experience => (
        <ExperienceContent
          key={experience.id}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          <ExperienceName>{experience.experienceName}</ExperienceName>
          <ExperiencePeriod>{experience.experiencePeriod}</ExperiencePeriod>
          <ExperienceExplain>{experience.experienceExplain}</ExperienceExplain>
        </ExperienceContent>
      ))}
    </>
  )
}

export default Experience

const ExperienceTitle = styled.h2`
  font-family: "IBM Plex Sans", sans-serif;
  text-align: left;
  font-size: 20px;
  margin-bottom: 70px;
`
const ExperienceContent = styled.div`
  text-align: left;
  margin-bottom: 70px;
`
const ExperienceName = styled.h3`
  margin: 0;
`
const ExperiencePeriod = styled.span`
  font-size: 11px;
`
const ExperienceExplain = styled.p`
  white-space: pre-line;
  font-size: 17px;
  line-height: 1.6em;
  margin-top: 30px;
`
