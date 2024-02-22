import React from "react"
import * as S from "./style"

const Strategy = () => {
  const handleInputChange = event => {
    event.target.setAttribute("data-heading", event.target.innerText)
  }

  return (
    <S.StrategyWrap
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <S.StrategyTitle>
        코드를 작성할 때 지키려고 하는 원칙은 ______ 입니다.
      </S.StrategyTitle>
      <S.StrategyMain>
        <S.StrategyKiss>
          <S.StrategyBox>
            <S.StrategyName
              data-heading="KISS"
              contentEditable
              onInput={handleInputChange}
            >
              KISS
            </S.StrategyName>
            <S.StrategyFullName> Keep It Simple stupid</S.StrategyFullName>
          </S.StrategyBox>
          <S.StrategyDescription>
            코드를 작성할 때, 복잡성을 최소화하고 불필요한 기능을 배제하여
            간결하고 이해하기 쉬운 코드를 지향합니다.{" "}
          </S.StrategyDescription>
        </S.StrategyKiss>

        <S.StrategyYagni>
          <S.StrategyBox>
            <S.StrategyName
              data-heading="YAGNI"
              contentEditable
              onInput={handleInputChange}
            >
              YAGNI
            </S.StrategyName>
            <S.StrategyFullName>You Aren`t Gonna Need It</S.StrategyFullName>
          </S.StrategyBox>
          <S.StrategyDescription>
            불필요한 기능을 추가하지 않고 현재의 요구에 집중함으로써 더 유연하고
            효율적인 코드를 작성하려고 합니다.
          </S.StrategyDescription>
        </S.StrategyYagni>
        <S.StrategyDry>
          <S.StrategyBox>
            <S.StrategyName
              data-heading="DRY"
              contentEditable
              onInput={handleInputChange}
            >
              DRY
            </S.StrategyName>
            <S.StrategyFullName>Dont repeat yourself</S.StrategyFullName>
          </S.StrategyBox>
          <S.StrategyDescription>
            중복 코드를 최소화하고 유지보수성을 높이는데 노력합니다. 코드는
            단순하면서도 효과적이며,
            <br /> 불필요한 복잡성을 배제하여 유지보수와 확장성을 최적화하려고
            합니다.
          </S.StrategyDescription>
        </S.StrategyDry>
      </S.StrategyMain>
    </S.StrategyWrap>
  )
}

export default Strategy
