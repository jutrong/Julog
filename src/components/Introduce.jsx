import * as React from "react"
import styled from "styled-components"
import imoge from "../images/imoge.png"
import myImg from "../images/myImg.png"

export const sizes = {
  mobile: `max-width: 480px`,
  tablet: `max-width: 768px`,
  desktop: `max-width: 1024px`,
}

const Introduce = () => {
  return (
    <>
      <Title>
        <Imoge src={imoge} />
        <Title_content>안녕하세요,</Title_content>
        <SubTitle>
          <SubTitle_text>단단하고 담백한</SubTitle_text> 개발자 이주현입니다.
        </SubTitle>
      </Title>
      <Introduce_text>
        <Introduce_title>Introduce.</Introduce_title>
        <Introduce_content>
          <Introduce_content_text>
            안녕하세요, <Highlight>항상 긍정적인 마인드셋</Highlight>으로 문제를
            대하고,
            <br /> 주체적인 학습을 통해 지속적으로 성장을 추구하는 신입 개발자
            이주현입니다.
            <br />{" "}
            <Highlight>
              ‘어려운 것은 내가 많이 접하지 않아서 어렵게 느껴지는것이다’
            </Highlight>
            라는 생각을 가지며, <br />
            새로운 기술을 습득하는 것에 대한 두려움이 적습니다.
            <br /> 사용자 누구나 기대한 대로 작동하는 웹사이트를 선호합니다.
            <br />
            <Highlight> 기본에 충실한 담백하고 단단한 개발자</Highlight>를
            지향하고 있습니다.
          </Introduce_content_text>
          <Introduce_img src={myImg} />
        </Introduce_content>
        <Introduce_contact>
          <Contact_list>
            📧 <Contact_list_a>jutrong@naver.com</Contact_list_a>
          </Contact_list>
          <Contact_list>
            🏡 <Contact_list_a>Blog</Contact_list_a>
          </Contact_list>
          <Contact_list>
            🐱 <Contact_list_a>Github</Contact_list_a>
          </Contact_list>
        </Introduce_contact>
      </Introduce_text>
    </>
  )
}
export default Introduce

const Title = styled.h1`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Imoge = styled.img`
  width: 70px;
  height: 70px;
`
const Title_content = styled.p``
const SubTitle = styled.p`
  margin-top: 30px;
  font-size: 40px;
`
const SubTitle_text = styled.span`
  color: #4834d4;
`
const Introduce_text = styled.div`
  text-align: left;
  width: 100%;
`
const Introduce_title = styled.h2`
  margin-top: 120px;
`
const Introduce_content = styled.div`
  display: block;
  margin-top: 50px;
  line-height: 35px;
  letter-spacing: 0.46px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: space-between;

  @media (${sizes.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  @media (${sizes.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`
const Highlight = styled.span`
  font-weight: 700;
  color: #4834d4;
  font-size: 1.1em;
`
const Introduce_content_text = styled.p``
const Introduce_img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.9;
  @media (${sizes.tablet}) {
    margin-top: 50px;
  }

  @media (${sizes.mobile}) {
    flex-direction: column;
    margin-top: 50px;
  }
`
const Introduce_contact = styled.ul`
  font-weight: 700;
  margin-left: 0;
  margin-top: 50px;
`
const Contact_list = styled.li`
  cursor: pointer;
`
const Contact_list_a = styled.a`
  font-weight: 700;
  transition: 5s;
  &:hover {
    text-decoration: underline;
  }
`
