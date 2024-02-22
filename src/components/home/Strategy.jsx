import React from "react"
import styled, { keyframes } from "styled-components"
import device from "../../styles/device"

const fractureAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
`

const Strategy = () => {
  const handleInputChange = event => {
    event.target.setAttribute("data-heading", event.target.innerText)
  }
  return (
    <StrategyWrap>
      <StrategyTitle>
        코드를 작성할 때 지키려고 하는 원칙은 ____ 입니다.
      </StrategyTitle>
      <StrategyMain>
        <StrategyKiss>
          <StrategyBox>
            <StrategyName
              data-heading="KISS"
              contentEditable
              onInput={handleInputChange}
            >
              KISS
            </StrategyName>
            <StrategyFullName>Keep It Simple stupid</StrategyFullName>
          </StrategyBox>
          <StrategyDescription>
            코드를 작성할 때, 복잡성을 최소화하고 불필요한 기능을 배제하여
            간결하고 이해하기 쉬운 코드를 지향합니다.{" "}
          </StrategyDescription>
        </StrategyKiss>

        <StrategyYagni>
          <StrategyBox>
            <StrategyName
              data-heading="YAGNI"
              contentEditable
              onInput={handleInputChange}
            >
              YAGNI
            </StrategyName>
            <StrategyFullName>You Aren`t Gonna Need It</StrategyFullName>
          </StrategyBox>
          <StrategyDescription>
            불필요한 기능을 추가하지 않고 현재의 요구에 집중함으로써 더 유연하고
            효율적인 코드를 작성하려고 합니다.
          </StrategyDescription>
        </StrategyYagni>
        <StrategyDry>
          <StrategyBox>
            <StrategyName
              data-heading="DRY"
              contentEditable
              onInput={handleInputChange}
            >
              DRY
            </StrategyName>
            <StrategyFullName>Dont repeat yourself</StrategyFullName>
          </StrategyBox>
          <StrategyDescription>
            중복 코드를 최소화하고 유지보수성을 높이는데 노력합니다. 코드는
            단순하면서도 효과적이며,
            <br /> 불필요한 복잡성을 배제하여 유지보수와 확장성을 최적화하려고
            합니다.
          </StrategyDescription>
        </StrategyDry>
      </StrategyMain>
    </StrategyWrap>
  )
}

export default Strategy

const StrategyWrap = styled.div`
  margin-left: 30px;
  margin-top: 100px;
  font-family: "Nanum Myeongjo", serif;
`
const StrategyTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
`
const StrategyMain = styled.div`
  margin-top: 100px;
`
const StrategyKiss = styled.div``
const StrategyYagni = styled.div``
const StrategyDry = styled.div``
const StrategyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
`
const StrategyName = styled.p`
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
    margin: 20px 100px;
  }

  @media ${device.mobileM} {
    margin: 20px 400px;
  }
`
const StrategyFullName = styled.div`
  font-size: 16px;
  margin-left: -200px;
`
const StrategyDescription = styled.p`
  line-height: 1.5em;
  margin-bottom: 100px;
  margin-top: -30px;
`
