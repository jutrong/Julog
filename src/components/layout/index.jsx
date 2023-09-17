import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../header"
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
  max-width: 1900px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Inner = styled.div`
  padding: 0 2rem;

  /* @media ${device.mobileL} {
    padding: 0 5rem;
  } */
`
