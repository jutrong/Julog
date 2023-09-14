import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Header from "../components/header"
import Project from "../components/Project"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Layout from "../components/layout"
import Introduce from "../components/Introduce"
import Seo from "../components/seo"

export const sizes = {
  mobile: `max-width: 480px`,
  tablet: `max-width: 768px`,
  desktop: `max-width: 1024px`,
}

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <>
    <Wrap>
      <Header />
      <Main>
        <Introduce />
        <Line />
        <Project />
        <Line />
        <Skills />
        <Line />
        <Experience />
      </Main>
    </Wrap>
    <Footer>
      <Footer_content></Footer_content>
    </Footer>
  </>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

const Wrap = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (${sizes.tablet}) {
    width: 90%;
  }

  @media (${sizes.mobile}) {
    width: 93%;
  }
`
const Main = styled.main`
  padding-top: 280px;
  text-align: center;
  margin-bottom: 170px;
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

  @media (${sizes.tablet}) {
    padding-top: 150px;
    margin-bottom: 100px;
  }

  @media (${sizes.mobile}) {
    padding-top: 100px;
    margin-bottom: 70px;
  }
`
const Line = styled.div`
  margin: 100px auto;
  width: 80%;
  height: 1px;
  background-color: black;
  opacity: 0.1;
`
const Footer = styled.div`
  width: 100%;
  background-color: #dfe4ea;
  padding: 10px 0;
`
const Footer_content = styled.p`
  text-align: center;
`
