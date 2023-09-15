import React, { useEffect } from "react"
import styled from "styled-components"
import ImogeImage from "../images/imoge.png"
import MyImage from "../images/myImg.png"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Sizes = {
  mobile: `max-width: 480px`,
  tablet: `max-width: 768px`,
  desktop: `max-width: 1024px`,
}

const Introduce = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(".highlight", {
      color: "#4834d4",
      scrollTrigger: {
        trigger: ".highlight",
        start: "center center",
        end: "center center",
        scrub: 1,
      },
    })
  }, [])

  return (
    <IntroduceWrap>
      <Title
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Imoge src={ImogeImage} />
        <TitleContent>안녕하세요,</TitleContent>
        <SubTitle>
          <SubTitleText>단단하고 담백한</SubTitleText> 개발자 이주현입니다.
        </SubTitle>
      </Title>
      <IntroduceText
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <IntroduceTitle>Introduce.</IntroduceTitle>
        <IntroduceContent>
          <IntroduceContentText>
            안녕하세요,{" "}
            <Highlight className="highlight">항상 긍정적인 마인드셋</Highlight>
            으로 문제를 대하고,
            <br /> 주체적인 학습을 통해 지속적으로 성장을 추구하는 신입 개발자
            이주현입니다.
            <br />
            <Highlight className="highlight">
              ‘어려운 것은 내가 많이 접하지 않아서 어렵게 느껴지는것이다’
            </Highlight>
            라는 생각을 가지며, <br />
            새로운 기술을 습득하는 것에 대한 두려움이 적습니다.
            <br /> 사용자 누구나 기대한 대로 작동하는 웹사이트를 선호합니다.
            <br />
            <Highlight className="highlight">
              {" "}
              기본에 충실한 담백하고 단단한 개발자
            </Highlight>
            를 지향하고 있습니다.
          </IntroduceContentText>
          <IntroduceImg src={MyImage} />
        </IntroduceContent>
        <IntroduceContact>
          <ContactList>
            📧 <ContactListA>jutrong@naver.com</ContactListA>
          </ContactList>
          <ContactList>
            🏡 <ContactListA>Blog</ContactListA>
          </ContactList>
          <ContactList>
            🐱 <ContactListA>Github</ContactListA>
          </ContactList>
        </IntroduceContact>
      </IntroduceText>
    </IntroduceWrap>
  )
}

export default Introduce

const IntroduceWrap = styled.div``
const Title = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
`
const Imoge = styled.img`
  width: 70px;
  height: 70px;
`
const TitleContent = styled.p``
const SubTitle = styled.p`
  margin-top: 30px;
  font-size: 40px;
`
const SubTitleText = styled.span`
  color: #4834d4;
`
const IntroduceText = styled.div`
  text-align: left;
  width: 100%;
`
const IntroduceTitle = styled.h2`
  margin-top: 120px;
`
const IntroduceContent = styled.div`
  display: block;
  margin-top: 50px;
  line-height: 35px;
  letter-spacing: 0.46px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: space-between;

  @media (${Sizes.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  @media (${Sizes.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`
const Highlight = styled.span`
  font-weight: 700;
  color: #121212;
  font-size: 1.1em;
  position: relative;
`

const IntroduceContentText = styled.p``
const IntroduceImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.9;
  @media (${Sizes.tablet}) {
    margin-top: 50px;
  }

  @media (${Sizes.mobile}) {
    flex-direction: column;
    margin-top: 50px;
  }
`
const IntroduceContact = styled.ul`
  font-weight: 700;
  margin-left: 0;
  margin-top: -30px;
`
const ContactList = styled.li`
  cursor: pointer;
`
const ContactListA = styled.a`
  font-weight: 700;
  transition: 5s;
  &:hover {
    text-decoration: underline;
  }
`
