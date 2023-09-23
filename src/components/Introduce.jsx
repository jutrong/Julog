import React, { useEffect } from "react"
import styled from "styled-components"
import ImogeImage from "../images/imoge.png"
import MyImage from "../images/myImgg.png"
import device from "../styles/device"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Introduce = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(".highlight", {
      color: "#4834d4",
      scrollTrigger: {
        trigger: ".highlight",
        start: "top center",
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
            안녕하세요, <br />
            <Highlight className="highlight">항상 긍정적인 마인드셋</Highlight>
            으로 문제를 대하고,
            <br /> 함께 일했을 때 누구나 시너지 효과를 내는 긍정 개발자
            이주현입니다.
            <br />
            <Highlight className="highlight">
              ‘어려운 것은 내가 많이 접하지 않아서 어렵게 느껴지는것이다’
            </Highlight>
            라는 생각을 가지며, <br />
            새로운 기술을 습득하는 것에 대한 두려움이 적습니다.
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
            📧 <ContactListA> leek71358@gmail.com</ContactListA>
          </ContactList>
          <ContactList>
            <Link to="https://velog.io/@jutrong">
              🏡 <ContactListA>Blog</ContactListA>
            </Link>
          </ContactList>
          <ContactList>
            🐱{" "}
            <Link to="https://github.com/jutrong">
              <ContactListA>Github</ContactListA>
            </Link>
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
  @media ${device.mobileL} {
    font-size: 0.7em;
    line-height: 1.3em;
  }
`
const SubTitleText = styled.span`
  color: #4834d4;
  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobileL} {
    display: block;
  }
`
const IntroduceText = styled.div`
  text-align: left;
  width: 100%;
`
const IntroduceTitle = styled.h2`
  margin-top: 120px;
  font-family: "IBM Plex Sans", sans-serif;
`
const IntroduceContent = styled.div`
  margin-top: 50px;
  line-height: 35px;
  letter-spacing: 0.46px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }
`
const Highlight = styled.span`
  font-weight: 700;
  color: #121212;
  font-size: 1.1em;
  position: relative;
  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`

const IntroduceContentText = styled.p`
  @media ${device.mobileL} {
    font-size: 0.75em;
    text-align: center;
  }
`
const IntroduceImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.9;
  @media ${device.tablet} {
    margin-bottom: 50px;
  }

  @media ${device.mobileL} {
    margin-bottom: 50px;
  }
`
const IntroduceContact = styled.ul`
  font-weight: 700;
  margin-left: 0;
  font-family: "IBM Plex Sans", sans-serif;
  margin-top: -20px;
  @media ${device.tablet} {
    margin-top: 50px;
  }
  @media ${device.mobileL} {
    margin-top: 50px;
  }
`
const ContactList = styled.li`
  cursor: pointer;
  margin-top: 15px;
`
const ContactListA = styled.a`
  font-weight: 700;
  transition: 5s;
  &:hover {
    text-decoration: underline;
  }
`
