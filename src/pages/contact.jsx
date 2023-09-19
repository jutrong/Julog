import React, { forwardRef } from "react"
import styled from "styled-components"
import device from "../styles/device"
import Header from "../components/HeaderBar"
import Layout from "../components/layout"
const Contact = forwardRef((props, ref) => {
  return (
    <Layout>
      <Header />
      <div ref={ref}>
        <Container>
          <a href="mailto:leek71358@gmail.com">
            <Mail className="mailto">leek71358@gmail.com</Mail>
          </a>
        </Container>
      </div>
    </Layout>
  )
})

export default Contact

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`

export const Mail = styled.div`
  /* margin-top: 3rem; */
  font-size: 1.5rem;
  color: #191919;
  text-decoration: underline;

  @media ${device.desktop} {
    font-size: 5rem;
  }
`
