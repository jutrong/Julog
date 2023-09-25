---
date: "2023-09-25"
title: "styled-components가 왜 React.js스타일 적용에 최고인지"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTNfMTY1/MDAxNjEwNTM0NTE5NDYx.yEzBL-RZa6428Cu1OFGOXlI7UIoaEBCWzJBJ51tARJUg.-PWMPM_5HEYX0PGIKneQrzPNLHCH9lOfeY6o3sCEpaQg.JPEG.rbfl7979/DB76EACD-16F9-4B88-B61D-E51E62DFB15F.jpeg?type=w800"
---

## styled-components가 왜 React.js스타일 적용에 최고인지

#### style을 입히는 방법

1. **global style**

import "./styles.css"
파일에 있는 모든 내용이 css적용됨

2. **직접 style 속성을 입혀주기**

```
<div style = {{backgroundColor:'red'}} ></div>
```

3. **css module**

import styles from "./Movie.module.css"
className들을 마치 오보젝트 속성인 것처럼 사용

```
<div className={styles.intro}></div>
```

className을 랜덤하게 만들어 줘서 이름이 겹치는걸 방지

세 가지 방식보다 더 나을 방식이 있음
that is** styled-components**

### Adapting and Extending

이미 있는 스타일 속성을 그래도 상속받고 스타일을 추가하고 싶을 때

```
<Box bgColor="teal" />
<Box bgColor="tomato" />
<Circle bgColor="blue"/>

const Box =styled.div`
	width: 100px;
    height:100px;
    background-color:${(props) => props.bgColor}
`
const Circle = styled.(Box)`
	border-radius:50px;
`
```

### 'As' and Attrs

스타일 속성을 상속받으며 태그 이름을 변경하고 싶을 때

```
<Btn>Log in</Btn>
<Btn as='a' href="/">Log in</Btn>
```

html 속성 부여
속성을 하나하나 부여하지 않아도 일괄 적용

```
const Input = styled.input.attrs({required:true})`
background-color: tomato;
`

<Input />
<Input />
<Input />
<Input />
<Input />
```

### Animation

```
const Box = styled.div`
	animation:${rotationAnimation} 1s linear infinite
`

const rotationAnimation = keyframes`
from {
	transform:rotate(0deg)
}
to {
	transform:rotate(30deg)
}
`
```

### components 타겟팅

```
const Box = styled.div`
	${Emoji}:hover {
    	font-size: 98px;
}

<Box>
	<Emoji/>   << 여기에만 스타일 적용ㅠㅍ
</Box>
<Emoji/>    `

```

### styled-components 속성을 활용하여 기존에 작성한 스타일을 잠깐 수정해보자.

```
<ContentWrap>
          <ContentItem
            title="작업 기간"
            content={`${project.duration.start} - ${project.duration.end}`}
          />
          <ContentItem
            title="참여 인원"
            content={`Frontend ${project.people.frontend}명 / Backend ${project.people.backend}명`}
          />
          <ContentItem title="관련 설명" content={project.explanation} />
          <ContentItem
            title="구현 내용"
            content={project.implementedFeatures}
          />
          <Skills title="기술 스택" skills={project.skills} />
        </ContentWrap>
```

반복되는 스타일을 입히지 않기위해 공통적으로 <ContentItem/>에 스타일을주고 title, content를 props로 받아 데이터를 보여주었다.

```
const ContentItem = ({ title, content }) => (
  <FlexRow>
    <ContentLeft>{title}</ContentLeft>
    <ContentRight>{content}</ContentRight>
  </FlexRow>
)
```

기존에는 각각의 component에 이름을 붙히고 각각 똑같은 style을 부여하다보니 코드가 길어지고 똑같은 코드가 반복되는 문제가 있었는데, 이렇게 공통적으로 style을 입히고 props로 데이터를 바인딩하면 코드가 더 깔끔해진다.
