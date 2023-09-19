import React, { useEffect, useState, useRef } from "react"
import useMenu from "../../hooks/useMenu"
import { Link } from "gatsby"
import { gsap } from "gsap"
import * as S from "./style"

const menus = [
  { id: 1, path: "resume", name: "resume" },
  { id: 2, path: "blog", name: "blog" },
  { id: 3, path: "contact", name: "contact" },
]

const OverlayMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isPlayOnce, setIsPlayOnce] = useState(false)
  const pathRef = useRef(null)
  const menuContainerRef = useRef(null)
  const menuSelector = gsap.utils.selector(menuContainerRef)
  const { isMenuOpen, setMenuState } = useMenu()

  useEffect(() => {
    if (pathRef.current && isPlayOnce) {
      const overlayTimeline = getOverlayTimeline(
        pathRef.current,
        isMenuOpen,
        setIsMenuActive,
        menuSelector
      )
      overlayTimeline.play()
    } else {
      setIsPlayOnce(true)
    }
  }, [isMenuOpen])

  const onClickLink = () => {
    const isScrollLock = document.body.classList.contains("no-scroll")
    setMenuState()

    if (isScrollLock) {
      document.body.classList.remove("no-scroll")
    } else {
      document.body.classList.add("no-scroll")
    }
  }
  return (
    <S.Container isMenuActive={isMenuActive}>
      <S.Overlay viewBox="0 0 100 100" preserveAspectRatio="none">
        <S.OverlayPath
          ref={pathRef}
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </S.Overlay>
      <S.MenuContainer ref={menuContainerRef}>
        <S.Menu isMenuActive={isMenuActive}>
          {menus.map(({ id, path, name }) => (
            <li key={id} className="overlay-menu" onClick={onClickLink}>
              <Link href={`/${path}`}>
                <a>
                  <S.TextWrap>
                    <S.FillText>{name}</S.FillText>
                    <S.StrokeText>{name}</S.StrokeText>
                  </S.TextWrap>
                </a>
              </Link>
            </li>
          ))}
        </S.Menu>
      </S.MenuContainer>
    </S.Container>
  )
}

export default OverlayMenu

const paths = {
  top: "M 0 100 V 100 Q 50 100 100 100 V 100 z",
  openMiddle: "M 0 100 V 50 Q 50 0 100 50 V 100 z",
  closeMiddle: "M 0 100 V 50 Q 50 100 100 50 V 100 z",
  bottom: "M 0 100 V 0 Q 50 0 100 0 V 100 z",
}

export const getOverlayTimeline = (
  ref,
  isOpen,
  setIsMenuActive,
  menuSelector
) => {
  const allMenu = gsap.utils.toArray(menuSelector(".overlay-menu"))
  gsap.killTweensOf(ref)
  const tl = gsap.timeline({
    paused: true,
  })

  tl.addLabel("start")
    .to(ref, {
      delay: isOpen ? 0 : 0.2,
      duration: 0.8,
      attr: { d: isOpen ? paths.openMiddle : paths.closeMiddle },
      ease: "Power2.easeIn",
    })
    .to(ref, {
      duration: isOpen ? 0.8 : 0.6,
      attr: { d: isOpen ? paths.bottom : paths.top },
      ease: "Power2.easeOut",
      onComplete: () => {
        setIsMenuActive(isOpen)
      },
    })
    .to(
      allMenu,
      {
        opacity: isOpen ? 1 : 0,
        ease: "Power1.easeOut",
        duration: isOpen ? 0.8 : 0.6,
        stagger: 0.06,
        delay: isOpen ? 1 : 0,
      },
      "start"
    )
    .to(
      allMenu,
      {
        y: isOpen ? "0" : "-60%",
        ease: "Power2.easeInOut",
        duration: 0.8,
        stagger: 0.06,
        delay: isOpen ? 0.8 : 0,
        onComplete: () => {
          if (!isOpen) {
            gsap.set(allMenu, { y: "60%" })
          }
        },
      },
      "start"
    )

  return tl
}
