import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import device from "../styles/device"
import useMenu from "../hooks/useMenu"

const Header = () => {
  const { setMenuState, isMenuOpen } = useMenu()
  const [isClicked, setIsClicked] = useState(false)

  const handleMenu = () => {
    const isScrollLock = document.body.classList.contains("no-scroll")
    setIsClicked(true)
    setMenuState()

    if (isScrollLock) {
      document.body.classList.remove("no-scroll")
    } else {
      document.body.classList.add("no-scroll")
    }
  }
  return (
    <HeaderBar>
      <Logo onClick={handleMenu} isMenuOpen={isMenuOpen}>
        JUTRONG
      </Logo>
      <MenuText
        onClick={handleMenu}
        disabled={isClicked}
        isMenuOpen={isMenuOpen}
      >
        {isMenuOpen ? "CLOSE" : "MENU"}
      </MenuText>
    </HeaderBar>
  )
}

export default Header

const HeaderBar = styled.header`
  width: 920px;
  display: flex;
  background-color: transparent;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 60px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: background-color 0.3s;
  z-index: 99;

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: 95%;
  }
`
const Menu = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  appearance: none;
  font-weight: 600;
`
const MenuText = styled.div`
  cursor: pointer;
  color: ${props => (props.isMenuOpen ? "#fff" : `#191919`)};
  font-weight: 900;
`
const Logo = styled.a`
  font-weight: 900;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  color: ${props => (props.isMenuOpen ? "#fff" : `#191919`)};
  &:hover&::before {
    width: 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #121212;
  }
`
