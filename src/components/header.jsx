import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header_bar = styled.header`
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
  text-decoration: line-through;
  cursor: pointer;
`
const Header = () => {
  return (
    <Header_bar>
      <Logo>JUTRONG</Logo>
      <Menu>MENU</Menu>
    </Header_bar>
  )
}

export default Header
