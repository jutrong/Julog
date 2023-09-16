import React from "react"
import styled from "styled-components"
import { skillsData } from "../data/Skill"

const Skills = () => {
  return (
    <>
      <SkillsWrap>
        <SkillsTitle>Skills.</SkillsTitle>
        {skillsData.map(skill => (
          <SkillsContent
            key={skill.id}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <SkillsName>{skill.skillsName}</SkillsName>
            <SkillsExplain>{skill.skillsExplain}</SkillsExplain>
          </SkillsContent>
        ))}
      </SkillsWrap>
    </>
  )
}

export default Skills

const SkillsWrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`
const SkillsTitle = styled.h2`
  font-family: "IBM Plex Sans", sans-serif;
  text-align: left;
  font-size: 24px;
  margin-bottom: 70px;
`
const SkillsContent = styled.div`
  text-align: left;
  margin-bottom: 70px;
`
const SkillsName = styled.h3`
  font-family: "IBM Plex Sans", sans-serif;
  margin-bottom: 20px;
`
const SkillsExplain = styled.p`
  white-space: pre-line;
  font-size: 17px;
  line-height: 1.6em;
`
