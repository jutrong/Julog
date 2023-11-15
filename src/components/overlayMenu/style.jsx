import styled from "styled-components"
import { motion } from "framer-motion"
import device from "../../styles/device"

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: ${({ isMenuActive }) => (isMenuActive ? "initial" : "none")};
  z-index: 9;

  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const Overlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(180deg);
  pointer-events: none;
`

export const OverlayPath = styled(motion.path)`
  fill: ${props => props.theme.text};
`

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  @media ${device.desktop} {
    max-width: 960px;
  }

  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const Menu = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  margin: 0;
  font-size: 8rem;
  padding: 0 32px;
  margin-bottom: 1.7rem;
  pointer-events: ${({ isMenuActive }) => (isMenuActive ? "initial" : "none")};
  text-transform: uppercase;

  li {
    overflow: hidden;
    transform: translateY(60%);
    font-family: "Dolce Vita";
    font-weight: 700;
    opacity: 0;
  }

  li + li {
    margin-top: 1rem;
  }

  li:hover span {
    transform: translateY(-100%);
  }

  font-size: 100px;

  @media ${device.mobileL} {
    margin-top: -60px;
  }
`

export const TextWrap = styled.div`
  position: relative;

  span {
    display: block;
    font-weight: 700;
    /* text-transform: uppercase; */
    text-align: center;
    transition: transform 0.3s ease-out;
  }
`

export const FillText = styled.span`
  color: white;
`

export const StrokeText = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: black;
  -webkit-text-stroke: 1px #fff;
`
