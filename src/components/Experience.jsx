import * as React from "react"
import styled from "styled-components"
const experienceData = [
  {
    id: 1,
    experienceName: "엘리스 코딩 SW 5기",
    experiencePeriod: " 2023.05.15 ~ 09.01 ",
    experienceExplain: `Software engineer 4개월 과정을 진행하면서 두 번의 팀프로젝트를 진행하였습니다.
    2차 프로젝트 16팀 가운데 1등을하여 대상을 받았습니다.`,
  },
  {
    id: 2,
    experienceName: "인하대학교 ",
    experiencePeriod: "  2017.03 ~ 졸업예정  ",
    experienceExplain: `일본언어문화학과, 문화콘텐츠,문화경영학과 졸업 예정`,
  },
]

const Experience = () => {
  return (
    <>
      <Experience_title>Experience.</Experience_title>
      {experienceData.map(experience => (
        <Experience_content>
          <Experience_name>{experience.experienceName}</Experience_name>
          <Experience_period>{experience.experiencePeriod}</Experience_period>
          <Experience_explain>
            {experience.experienceExplain}
          </Experience_explain>
        </Experience_content>
      ))}
    </>
  )
}

export default Experience

const Experience_title = styled.h2`
  font-family: "IBM Plex Sans", sans-serif;
  text-align: left;
  font-size: 24px;
  margin-bottom: 70px;
`
const Experience_content = styled.div`
  text-align: left;
  margin-bottom: 70px;
`
const Experience_name = styled.h3`
  margin: 0;
`
const Experience_period = styled.span`
  font-size: 11px;
`
const Experience_explain = styled.p`
  white-space: pre-line;
  font-size: 17px;
  line-height: 1.6em;
  margin-top: 30px;
`
