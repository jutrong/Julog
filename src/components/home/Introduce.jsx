import React, { useEffect } from "react"
import * as S from "./style"
import ImogeImage from "../../images/imoge.png"
import MyImage from "../../images/myImgg.png"
import resume from "../../images/resume.pdf"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Introduce = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(".highlight", {
      color: "#4934d4c0",
      scrollTrigger: {
        trigger: ".highlight",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    })
  }, [])

  return (
    <S.IntroduceWrap>
      <S.Title
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <S.Imoge src={ImogeImage} />
        <S.TitleContent>안녕하세요,</S.TitleContent>
        <S.SubTitle>
          <S.SubTitleText>단단하고 담백한</S.SubTitleText> 개발자 이주현입니다.
        </S.SubTitle>
      </S.Title>
      <S.IntroduceText
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <S.IntroduceTitle>Introduce.</S.IntroduceTitle>
        <S.IntroduceContent>
          <S.IntroduceContentText>
            <S.IntroduceHeader className="highlight">
              문제해결 과정을 즐기는 프론트엔드 개발자 이주현입니다. <br />
            </S.IntroduceHeader>
            코드를 통해 꼭 필요한 요소를 만들면서도, <br />제 자신도 한 조직의
            대체불가능한 중요한 요소가 되고 싶다는 생각을 가지고 있습니다.
          </S.IntroduceContentText>
          <S.IntroduceImg src={MyImage} />
        </S.IntroduceContent>
        <S.IntroduceContact>
          <S.ContactList>
            📧 <S.ContactListA> leek71358@gmail.com</S.ContactListA>
          </S.ContactList>
          <S.ContactList>
            <Link to="https://velog.io/@jutrong">
              🏡 <S.ContactListA>Blog</S.ContactListA>
            </Link>
          </S.ContactList>
          <S.ContactList>
            <Link to="https://github.com/jutrong">
              😺 <S.ContactListA>Github</S.ContactListA>
            </Link>
          </S.ContactList>
          <S.ContactList>
            <a href={resume} target="_blank" rel="noreferrer">
              📜 <S.ContactListA>Resume</S.ContactListA>
            </a>
          </S.ContactList>
        </S.IntroduceContact>
      </S.IntroduceText>
    </S.IntroduceWrap>
  )
}

export default Introduce
