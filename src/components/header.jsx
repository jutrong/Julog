import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const sizes = {
  mobile: `max-width: 480px`,
  tablet: `max-width: 768px`,
  desktop: `max-width: 1024px`,
}

const Header = () => {
  return (
    <HeaderBar>
      <Logo>JUTRONG</Logo>
      <Menu>MENU</Menu>
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

  @media (${sizes.tablet}) {
    width: 90%;
  }

  @media (${sizes.mobile}) {
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
