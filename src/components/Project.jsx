import * as React from "react"
import styled from "styled-components"
import phone from "../images/phone.png"
import skills from "../images/skill.png"
import { Link } from "gatsby"

export const sizes = {
  mobile: `max-width: 480px`,
  tablet: `max-width: 768px`,
  desktop: `max-width: 1024px`,
}

const Project = () => {
  return (
    <Project_Wrap>
      <Project_title>Projects.</Project_title>
      <Project_name>당장 손민수</Project_name>
      <Project_service_wrap>
        <Project_service>
          나의 최애의 아이템을 간편하게 찾을 수 있도록.
          <br /> 나의 최애 아이템을 구매할 수 있도록. <br />
          최애 아이템을 빠르고 쉽게.
          <br /> 혼자하는 덕질이 아닌 함께.
          <br /> <b>PWA기반의 이미지 중심 소셜 네트워크 서비스</b>를
          개발하였습니다.
          <Product_btn_wrap>
            <Link to="https://github.com/jutrong/sonminsoo-project">
              <Project_btn_first>GITHUB</Project_btn_first>
            </Link>
            <Link to="*">
              <Project_btn_second>PORTFOLIO</Project_btn_second>
            </Link>
          </Product_btn_wrap>
        </Project_service>
        <Phone src={phone} />
      </Project_service_wrap>
      <Project_content>
        <Duration>
          <Duration_left>작업 기간</Duration_left>
          <Duration_right>23.08.15 - 09.01</Duration_right>
        </Duration>
        <People>
          <People_left>참여 인원</People_left>
          <People_right>Frontend 6명 / Backend 1명</People_right>
        </People>
        <Explan>
          <Explan_left>관련 설명</Explan_left>
          <Explan_right>
            PWA기반의 SNS서비스를 개발하는 팀프로젝트입니다. <br />
            현재 리펙토링 진행중입니다.
          </Explan_right>
        </Explan>
        <Implement>
          <Implement_left>구현 내용</Implement_left>
          <Implement_right>
            <Implement_ul>
              <Implement_li>피드 페이지 CRUD</Implement_li>
              <Implement_li>댓글 작성 삭제</Implement_li>
              <Implement_li>피드 좋아요 </Implement_li>{" "}
              <Implement_li>
                multipart/form-data를 사용하여 이미지 업로드{" "}
              </Implement_li>
              <Implement_li>아이템 검색</Implement_li>
            </Implement_ul>
          </Implement_right>
        </Implement>
        <Skills>기술 스택</Skills>
        <Skills_img src={skills} />
      </Project_content>
    </Project_Wrap>
  )
}
export default Project

const Project_Wrap = styled.div`
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
`
const Project_title = styled.h1`
  text-align: left;
  font-size: 24px;
  margin-bottom: 90px;
  font-family: "IBM Plex Sans", sans-serif;
`

const Project_name = styled.h2`
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
const Project_service_wrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
  position: relative;

  @media (${sizes.tablet}) {
    flex-direction: column;
    margin-top: 20px;
  }

  @media (${sizes.mobile}) {
    flex-direction: column;
  }
`
const Project_service = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 40px;
  line-height: 1.5;
  text-align: left;
  line-height: 35px;
  letter-spacing: 0.46px;
`
const Product_btn_wrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`
const Project_btn_first = styled.a`
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
const Project_btn_second = styled.a`
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
  @media (${sizes.tablet}) {
    margin-top: 40px;
  }

  @media (${sizes.mobile}) {
    margin-top: 40px;
  }
`
const Project_content = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 20px 0;
    display: flex;
  }
  span {
    @media (${sizes.tablet}) {
      justify-content: space-around;
      width: 90%;
    }

    @media (${sizes.mobile}) {
      justify-content: space-around;
      width: 90%;
      font-size: 14px;
    }
  }
`

const Duration = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

const Duration_left = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`

const Duration_right = styled.span`
  text-align: left;
  font-size: 18px;
`

const People = styled.div`
  display: flex;
`

const People_left = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`

const People_right = styled.span`
  text-align: left;
  font-size: 18px;
`

const Explan = styled.div`
  display: flex;
`

const Explan_left = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`

const Explan_right = styled.span`
  text-align: left;
  font-size: 18px;
`

const Implement = styled.div`
  display: flex;
`

const Implement_left = styled.span`
  width: 300px;
  text-align: left;
  font-size: 25px;
  font-weight: 700;
`
const Implement_ul = styled.ul`
  margin-left: 0;
`
const Implement_li = styled.li`
  display: block;
`
const Implement_right = styled.span`
  text-align: left;
  font-size: 18px;
`

const Skills = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-align: left;
  @media (${sizes.mobile}) {
    width: 90%;
  }
`
const Skills_img = styled.img`
  margin: 30px;
  width: 70%;
  object-fit: cover;
  @media (${sizes.mobile}) {
    width: 90%;
  }
`
