import * as React from "react"
import styled from "styled-components"

import device from "../styles/device"
import ProjectData from "../data/Project"

const Project = () => (
  <ProjectWrap
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-bottom"
  >
    <ProjectTitle>Projects.</ProjectTitle>
    {ProjectData.map(project => (
      <Projects key={project.id}>
        <ProjectName>{project.title}</ProjectName>
        <ServiceWrap>
          <DescriptionWithBtn>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ButtonWrap>
              <ProjectButton href={project.githubLink}>GITHUB</ProjectButton>
              <ProjectButton href={project.liveLink}>Link</ProjectButton>
              {project.blogLink && (
                <ProjectButton href={project.blogLink}>Blog</ProjectButton>
              )}
            </ButtonWrap>
          </DescriptionWithBtn>
          <Image src={project.image} />
        </ServiceWrap>
        <ContentWrap>
          <ContentItem
            title="작업 기간"
            content={`${project.duration.start} - ${project.duration.end}`}
          />
          <ContentItem
            title="참여 인원"
            content={`Frontend ${project.people.frontend}명 · Backend ${project.people.backend}명`}
          />
          <ContentItem title="관련 설명" content={project.explanation} />
          <ContentItem
            title="구현 내용"
            content={project.implementedFeatures}
          />
          <Skills title="기술 스택" skills={project.skills} />
        </ContentWrap>
      </Projects>
    ))}
  </ProjectWrap>
)

const ContentItem = ({ title, content }) => (
  <FlexRow>
    <ContentLeft>{title}</ContentLeft>
    <ContentRight>{content}</ContentRight>
  </FlexRow>
)

const Skills = ({ title, skills }) => (
  <>
    <SkillsTitle>{title}</SkillsTitle>
    <SkillsList>
      {skills.map((skill, index) => (
        <Skill key={index}>{skill}</Skill>
      ))}
    </SkillsList>
  </>
)

const ProjectWrap = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
`

const ProjectTitle = styled.h1`
  text-align: left;
  font-size: 20px;
  margin-bottom: 90px;
  font-family: "IBM Plex Sans", sans-serif;
`
const Projects = styled.div``
const ProjectName = styled.span`
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
  &::before {
    content: "";
    bottom: 0;
    left: 0;
    width: auto;
    height: 8px;
    display: inline-block;
    padding-right: 100px;
    background-color: #d5f033;
    position: absolute;
    z-index: -1;
    opacity: 0.9;
  }
`

const ServiceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  @media ${device.tablet}, ${device.mobileL} {
    flex-direction: column;
    margin-top: 20px;
  }
`

const DescriptionWithBtn = styled.div`
  text-align: left;
  font-size: 16px;
  margin: 40px 0 20px;
  line-height: 35px;
  letter-spacing: 0.46px;
  white-space: pre-line;
`

const ProjectDescription = styled.p``

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`

const ProjectButton = styled.a`
  margin-right: 15px;
  border: none;
  outline: none;
  line-height: 25px;
  text-align: center;
  font-size: 13px;
  width: 80px;
  height: 23px;
  background-color: #121212;
  border-radius: 6px;
  color: #fff;
  display: block;
  &:visited,
  &:link {
    color: white;
  }
  &:last-child {
    margin-right: 0;
  }
`

const Image = styled.img`
  width: 200px;
  margin-right: 60px;
  @media ${device.tablet}, ${device.mobileL} {
    margin-top: 40px;
  }
  border-radius: 5px;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  letter-spacing: 0.6px;
  line-height: 2em;
  div {
    margin: 30px 0;
    display: flex;
    align-items: start;
    @media ${device.mobileL} {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
`

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`

const ContentLeft = styled.span`
  width: 200px;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
`

const ContentRight = styled.span`
  text-align: left;
  font-size: 17px;
  white-space: pre-line;
`

const SkillsTitle = styled.div`
  font-weight: 700;
  text-align: left;
  font-size: 25px;
  @media ${device.mobileL} {
    width: 90%;
    font-weight: 900;
  }
`

const SkillsList = styled.p`
  text-align: left;
  margin-top: 20px;
  font-size: 20px;
  white-space: pre-line;
  line-height: 3em;
  word-spacing: 40px;
  letter-spacing: 2px;
  font-family: "IBM Plex Sans", sans-serif;
  @media ${device.mobileL} {
    word-spacing: 20px;
  }
`

const Skill = styled.span``

export default Project
