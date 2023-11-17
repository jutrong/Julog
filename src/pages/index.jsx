import React, { useEffect } from "react"
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"

import Header from "../components/HeaderBar"
import Project from "../components/Project"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Layout from "../components/layout"
import Introduce from "../components/Introduce"
import Strategy from "../components/strategy"

import Seo from "../components/seo"
import device from "../styles/device"

const Resume = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <Wrap>
        <Header />
        <Main>
          <Introduce />
          <Strategy />
          <Line />
          <Project />
          <Line />
          <Skills />
          <Line />
          <Experience />
          <Line />
        </Main>
      </Wrap>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default Resume

const Wrap = styled.div`
  margin: 0 auto;

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: 96%;
  }
`
const Main = styled.main`
  padding-top: 250px;
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

  @media ${device.tablet} {
    padding-top: 150px;
    margin-bottom: 100px;
  }

  @media ${device.mobileL} {
    padding-top: 100px;
    margin-bottom: 70px;
  }
`
const Line = styled.div`
  margin: 100px auto;
  width: 80%;
  height: 1px;
  background-color: #00000042;
  opacity: 0.1;
`
