import styled, { keyframes } from "styled-components"
import device from "../../../styles/device"

const fractureAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
`

export const StrategyWrap = styled.div`
  margin-left: 30px;
  margin-top: 100px;
  font-family: "Nanum Myeongjo", serif;
`
export const StrategyTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
`
export const StrategyMain = styled.div`
  margin-top: 100px;
`
export const StrategyKiss = styled.div`
  div {
    margin-left: -50px;
  }
`
export const StrategyYagni = styled.div``
export const StrategyDry = styled.div``
export const StrategyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
export const StrategyName = styled.p`
  font-size: 20px;
  color: black;
  transform: translate(-50%, -50%);
  font-size: 10vw;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 60px;
  margin-right: 10px;

  &::before,
  &::after {
    content: attr(data-heading);
    position: absolute;
    left: 0;
    overflow: hidden;
  }

  &::before {
    height: 50%;
    color: white;
    text-shadow: 3px -2px 5px white, -3px 3px 4px white;
  }

  &::after {
    transform: translateX(-10px);
    height: 49%;
    color: black;
  }

  // Animation
  &::after {
    transform: translateX(0);
    animation: ${fractureAnimation} 6s infinite ease;
  }

  @media ${device.tablet} {
    margin: 40px 100px;
  }

  @media ${device.mobileM} {
    margin: 30px 400px;
  }
`
export const StrategyFullName = styled.p`
  font-size: 16px;
  min-width: 200px;
  display: block;
  margin-left: -140px;
  @media ${device.mobileM} {
    display: none;
  }
`
export const StrategyDescription = styled.p`
  line-height: 1.5em;
  margin-bottom: 100px;
  margin-top: -30px;
`
