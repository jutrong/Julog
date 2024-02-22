import styled from "styled-components"
import device from "../../../styles/device"

export const IntroduceWrap = styled.div``
export const Title = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
`
export const Imoge = styled.img`
  width: 70px;
  height: 70px;
`
export const TitleContent = styled.p``
export const SubTitle = styled.p`
  margin-top: 30px;
  font-size: 40px;
  @media ${device.mobileL} {
    font-size: 0.7em;
    line-height: 1.3em;
  }
`
export const SubTitleText = styled.span`
  color: #4834d4;
  @media ${device.tablet}, ${device.mobileL} {
    display: block;
  }
`
export const IntroduceText = styled.div`
  text-align: left;
  width: 100%;
  font-size: 15px;
`
export const IntroduceTitle = styled.h2`
  margin-top: 120px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 20px;
`
export const IntroduceContent = styled.div`
  margin-top: 30px;
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
export const Highlight = styled.span`
  font-weight: 700;
  color: #121212;
  font-size: 1.1em;
  position: relative;
  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`

export const IntroduceContentText = styled.p`
  @media ${device.mobileL} {
    font-size: 0.75em;
  }
`
export const IntroduceHeader = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 14px;
  display: block;
`
export const IntroduceImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 30%;
  object-fit: cover;
  opacity: 0.9;
  box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
  @media ${device.tablet}, ${device.mobileL} {
    margin-bottom: 50px;
  }
`
export const IntroduceContact = styled.ul`
  margin-left: 0;
  font-family: "IBM Plex Sans", sans-serif;
  @media ${device.tablet}, ${device.mobileL} {
    margin-top: 50px;
  }
`
export const ContactList = styled.li`
  cursor: pointer;
  margin-top: 18px;
  display: flex;
`
export const ContactListA = styled.a`
  transition: 5s;
  margin-left: 10px;
  &:hover {
    text-decoration: underline;
  }
`
