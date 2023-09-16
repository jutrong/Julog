import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import useMenu from "../hooks/useMenu"
import { Link } from "gatsby"
import { gsap } from "gsap"
import device from "../styles/device"

const menus = [
  { id: 1, path: "/", name: "resume" },
  { id: 2, path: "/", name: "blog" },
  { id: 3, path: "/", name: "contact" },
]

const MenuBox = () => {
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
    <Container isMenuActive={isMenuActive}>
      <Overlay viewBox="0 0 100 100" preserveAspectRatio="none">
        <OverlayPath ref={pathRef} d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
      </Overlay>
      <MenuContainer ref={menuContainerRef}>
        <Menu isMenuActive={isMenuActive}>
          {menus.map(({ id, path, name }) => (
            <li key={id} className="overlay-menu" onClick={onClickLink}>
              <Link href={`/${path}`}>
                <a>
                  <TextWrap>
                    <FillText>{name}</FillText>
                    <StrokeText>{name}</StrokeText>
                  </TextWrap>
                </a>
              </Link>
            </li>
          ))}
        </Menu>
      </MenuContainer>
    </Container>
  )
}

export default MenuBox

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: ${({ isMenuActive }) => (isMenuActive ? "initial" : "none")};
  z-index: 9;

  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const Overlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(180deg);
  pointer-events: none;
`

export const OverlayPath = styled(motion.path)`
  fill: ${props => props.theme.text};
`

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media ${device.desktop} {
    max-width: 960px;
  }
  @media ${device.wideScreen} {
    max-width: 1152px;
  }
  @media ${device.fullHd} {
    max-width: 1244px;
  }

  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const Menu = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 8rem;
  padding: 0 32px;
  margin-bottom: 1.7rem;
  pointer-events: ${({ isMenuActive }) => (isMenuActive ? "initial" : "none")};
  text-transform: uppercase;

  li {
    overflow: hidden;
    transform: translateY(60%);
    font-family: "Dolce Vita";
    font-weight: 700;
    opacity: 0;
  }

  li + li {
    margin-top: 1rem;
  }

  li:hover span {
    transform: translateY(-100%);
  }

  font-size: calc(8vw + 20px);

  @media (min-width: 576px) {
    font-size: calc(6vw + 20px);
    margin-bottom: 2.4rem;
  }

  @media ${device.fullHd} {
    font-size: 6rem;
  }
`

export const TextWrap = styled.div`
  position: relative;

  span {
    display: block;
    font-weight: 700;
    /* text-transform: uppercase; */
    text-align: center;
    transition: transform 0.3s ease-out;
  }
`

export const FillText = styled.span`
  color: white;
`

export const StrokeText = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: black;
  -webkit-text-stroke: 1px #fff;
`

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
