import * as React from "react"
import styled from "styled-components"
import phone from "../images/phone.png"
import skills from "../images/skill.png"
import menu from "../images/menu.png"
import { Link } from "gatsby"
import device from "../styles/device"

const projectsData = [
  {
    id: 1,
    title: "당장 손민수",
    description: [
      `나의 최애의 아이템을 간편하게 찾을 수 있도록.
      나의 최애 아이템을 구매할 수 있도록.
      최애 아이템을 빠르고 쉽게.
      혼자하는 덕질이 아닌 함께.
      PWA기반의 이미지 중심 소셜 네트워크 서비스를 개발하였습니다.`,
    ],
    githubLink: "https://github.com/jutrong/sonminsoo-project",
    liveLink: "https://kdt-sw-5-2-team11.elicecoding.com",
    duration: {
      start: "23.08.15",
      end: "09.01",
    },
    people: {
      frontend: 6,
      backend: 1,
    },
    image: phone,
    explanation: `PWA기반의 SNS서비스를 개발하는 팀프로젝트입니다. 
    현재 리펙토링 진행중입니다.`,
    implementedFeatures: [
      `피드 페이지 CRUD
      댓글 작성 삭제
      피드 좋아요
      multipart/form-data를 사용하여 이미지 업로드
      아이템 검색`,
    ],
    skills: [
      `React TypeScript  Styled-Components  PWA  Axios  JWT
       Nest-Js Socket.io Prsima Redis AWS S3 postgres,`,
    ],
  },
  {
    id: 2,
    title: "Personal blog",
    description: [
      `개발자는 개인 페이지 하나씩은 가져야지! 하면서 만든 gatsby기반 정적사이트
      이력서 포트폴리오 블로그를 한 곳에 `,
    ],
    githubLink: "https://github.com/jutrong/Julog",
    liveLink: "https://jutrong.netlify.app",
    duration: {
      start: "23.09.11",
      end: "진행중",
    },
    people: {
      frontend: 1,
      backend: 0,
    },
    image: menu,
    explanation: `블로그와 이력서를 하나의 웹페이지로 관리하기 위해 만든 개인 웹사이트입니다.`,
    implementedFeatures: [
      `Figma를 통한 디자인, 기획
      Gatsby.js를 이용한 마크다운 블로그 포스팅 구현
      Gsap을 활용한 애니메이션 효과`,
    ],
    skills: [`React Gatsby Styled-Components Gsap Netlify`],
  },
]

const Project = () => {
  return (
    <ProjectWrap
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <ProjectTitle>Projects.</ProjectTitle>
      {projectsData.map(project => (
        <React.Fragment key={project.id}>
          <ProjectName>{project.title}</ProjectName>
          <ProjectServiceWrap>
            <ProjectService>
              {project.description}
              <ProductBtnWrap>
                <ProjectBtnFirst
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </ProjectBtnFirst>
                <ProjectBtnSecond
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </ProjectBtnSecond>
              </ProductBtnWrap>
            </ProjectService>
            <Phone src={project.image} />
          </ProjectServiceWrap>
          <ProjectContent>
            <Duration>
              <DurationLeft>작업 기간</DurationLeft>
              <DurationRight>
                {project.duration.start} - {project.duration.end}
              </DurationRight>
            </Duration>
            <People>
              <PeopleLeft>참여 인원</PeopleLeft>
              <PeopleRight>
                Frontend {project.people.frontend}명 / Backend{" "}
                {project.people.backend}명
              </PeopleRight>
            </People>
            <Explan>
              <ExplanLeft>관련 설명</ExplanLeft>
              <ExplanRight>{project.explanation}</ExplanRight>
            </Explan>
            <Implement>
              <ImplementLeft>구현 내용</ImplementLeft>
              <ImplementRight>
                <ImplementUl>{project.implementedFeatures}</ImplementUl>
              </ImplementRight>
            </Implement>
            <Skills>기술 스택</Skills>
            <SkillsStack>
              {project.skills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsStack>
          </ProjectContent>
        </React.Fragment>
      ))}
    </ProjectWrap>
  )
}
export default Project

const ProjectWrap = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
`
const ProjectTitle = styled.h1`
  text-align: left;
  font-size: 24px;
  margin-bottom: 90px;
  font-family: "IBM Plex Sans", sans-serif;
`

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
const ProjectServiceWrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;

  @media ${device.tablet} {
    flex-direction: column;
    margin-top: 20px;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`
const ProjectService = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 40px;
  line-height: 1.5;
  text-align: left;
  line-height: 35px;
  letter-spacing: 0.46px;
  white-space: pre-line;
`
const ProductBtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
const ProjectBtnFirst = styled.a`
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
`
const ProjectBtnSecond = styled.a`
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
`

const Phone = styled.img`
  width: 200px;
  margin-right: 60px;
  @media ${device.tablet} {
    margin-top: 40px;
  }

  @media ${device.mobileL} {
    margin-top: 40px;
  }
`
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  letter-spacing: 0.6px;
  line-height: 3em;

  div {
    margin: 20px 0;
    display: flex;
  }
  span {
    line-height: 2em;
    @media ${device.tablet} {
      justify-content: space-around;
      width: 90%;
      margin-top: 20px;
    }

    @media ${device.mobileL} {
      justify-content: space-around;
      width: 90%;
      font-size: 13px;
      margin-top: 20px;
      line-height: 1.5em;
    }
  }
`

const Duration = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

const DurationLeft = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`

const DurationRight = styled.span`
  text-align: left;
  font-size: 18px;
`

const People = styled.div`
  display: flex;
`

const PeopleLeft = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`

const PeopleRight = styled.span`
  text-align: left;
  font-size: 18px;
`

const Explan = styled.div`
  display: flex;
`

const ExplanLeft = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`

const ExplanRight = styled.span`
  text-align: left;
  font-size: 18px;
  white-space: pre-line;
`

const Implement = styled.div`
  display: flex;
`

const ImplementLeft = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`
const ImplementUl = styled.p`
  white-space: pre-line;
`

const ImplementRight = styled.span`
  text-align: left;
  font-size: 18px;
`

const Skills = styled.div`
  font-weight: 700;
  text-align: left;
  font-size: 25px;

  @media ${device.mobileL} {
    width: 90%;
    font-size: 14px;
    font-weight: 900;
  }
`

const SkillsStack = styled.p`
  text-align: left;
  /* font-weight: bold; */
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
const SkillItem = styled.span``
