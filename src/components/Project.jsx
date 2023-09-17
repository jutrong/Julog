import * as React from "react"
import styled from "styled-components"
import phone from "../images/phone.png"
import skills from "../images/skill.png"
import { Link } from "gatsby"
import device from "../styles/device"

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
      <ProjectName>당장 손민수</ProjectName>
      <ProjectServiceWrap>
        <ProjectService>
          나의 최애의 아이템을 간편하게 찾을 수 있도록.
          <br /> 나의 최애 아이템을 구매할 수 있도록. <br />
          최애 아이템을 빠르고 쉽게.
          <br /> 혼자하는 덕질이 아닌 함께.
          <br /> <b>PWA기반의 이미지 중심 소셜 네트워크 서비스</b>를
          개발하였습니다.
          <ProductBtnWrap>
            <Link to="https://github.com/jutrong/sonminsoo-project">
              <ProjectBtnFirst>GITHUB</ProjectBtnFirst>
            </Link>
            <Link to="*">
              <ProjectBtnSecond>PORTFOLIO</ProjectBtnSecond>
            </Link>
          </ProductBtnWrap>
        </ProjectService>
        <Phone src={phone} />
      </ProjectServiceWrap>
      <ProjectContent>
        <Duration>
          <DurationLeft>작업 기간</DurationLeft>
          <DurationRight>23.08.15 - 09.01</DurationRight>
        </Duration>
        <People>
          <PeopleLeft>참여 인원</PeopleLeft>
          <PeopleRight>Frontend 6명 / Backend 1명</PeopleRight>
        </People>
        <Explan>
          <ExplanLeft>관련 설명</ExplanLeft>
          <ExplanRight>
            PWA기반의 SNS서비스를 개발하는 팀프로젝트입니다. <br />
            현재 리펙토링 진행중입니다.
          </ExplanRight>
        </Explan>
        <Implement>
          <ImplementLeft>구현 내용</ImplementLeft>
          <ImplementRight>
            <ImplementUl>
              <ImplementLi>피드 페이지 CRUD</ImplementLi>
              <ImplementLi>댓글 작성 삭제</ImplementLi>
              <ImplementLi>피드 좋아요 </ImplementLi>{" "}
              <ImplementLi>
                multipart/form-data를 사용하여 이미지 업로드{" "}
              </ImplementLi>
              <ImplementLi>아이템 검색</ImplementLi>
            </ImplementUl>
          </ImplementRight>
        </Implement>
        <Skills>기술 스택</Skills>
        <SkillsImg src={skills} />
      </ProjectContent>
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

const ProjectName = styled.h2`
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  &::before {
    content: "";
    bottom: 0;
    left: 0;
    width: 92px;
    height: 8px;
    background-color: #d5f033;
    position: absolute;
    z-index: -1;
    opacity: 0.9;
  }
`
const ProjectServiceWrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
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
  div {
    margin: 20px 0;
    display: flex;
  }
  span {
    line-height: 1.5em;
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
const ImplementUl = styled.ul`
  margin-left: 0;
`
const ImplementLi = styled.li`
  display: block;
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
const SkillsImg = styled.img`
  margin: 30px;
  width: 70%;
  object-fit: cover;
  @media ${device.mobileL} {
    width: 90%;
  }
`
