import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuBox from "./MenuBox"
import device from "../styles/device"

const Header = () => {
  const [disabled, setDisabled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    let timer = setTimeout(() => {
      setDisabled(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [disabled])
  const disableMenu = () => {
    setDisabled(!disabled)
  }
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <HeaderBar>
      <Logo onClick={handleMenu}>JUTRONG</Logo>
      <MenuBox isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
      <MenuText onClick={handleMenu} isMenuOpen={isMenuOpen}>
        MENU
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
`
const Logo = styled.a`
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
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
