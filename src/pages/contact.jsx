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
  @media ${device.tablet} {
    margin-top: -150px;
  }

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
  font-size: 5rem;
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.mobileL} {
    font-size: 2rem;
  }
`
