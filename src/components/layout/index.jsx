import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../HeaderBar"
import GlobalStyle from "../../styles/global"
import theme from "../../styles/theme"
import device from "../../styles/device"
import OverlayMenu from "../overlayMenu/index"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Inner>
          <Header />
          <main>{children}</main>
        </Inner>
      </Container>
      <OverlayMenu />
    </ThemeProvider>
  )
}

export default Layout

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: "IBM Plex Sans", sans-serif;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background: linear-gradient(
      rgb(254, 254, 254) 0%,
      rgb(254, 254, 254) 40%,
      rgba(255, 255, 255, 0.01) 100%
    );
    z-index: 2;
  }
`

const Inner = styled.div`
  padding: 0 2rem;

  /* @media ${device.mobileL} {
    padding: 0 5rem;
  } */
`
