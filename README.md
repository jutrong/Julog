# ReadMe

# 당장 손민수

![phone.png](ReadMe%2037a9cb5b8b134874b9a05233fd49a356/phone.png)

---

메인 이미지

배포 url
계정
배포판과 현재 코드 불일치 명시

페르소나

## 목차

[1. 팀 소개(역할 분담)](https://www.notion.so/1-24ca24f15d474258bea17bd93bcb90e0?pvs=21)

[2. 기술 및 개발 환경
(프로젝트 기간, 프로젝트 목표, 사용기술<기술 선택 이유까지>, 개발환경, Git-Flow전략, 컨벤션)](https://www.notion.so/2-Git-Flow-5da107fc6122498eb964a1e8ff670234?pvs=21)

[3. 주요 기능](https://www.notion.so/3-8ccbaa52a57e4da4b650b2a686ae3512?pvs=21)

[4. 프로젝트 구조(폴더 구조)-](https://www.notion.so/4-dab7c72ffa1d4f72b7bb7b9d5bde1e8e?pvs=21)

[5. UI](https://www.notion.so/5-UI-a3fb3cdfd52f499296bf9fc67bab5150?pvs=21)

[6. 페이지 기능](https://www.notion.so/6-cd4f63e35d7543e6ac0fc22eb92a00ea?pvs=21)

[7. 작업 관리(협업 방법)](https://www.notion.so/7-11212b33448747deb1c7781fc75b5902?pvs=21)

[8. 개선 방향(리팩토링)](https://www.notion.so/8-7d813c19d930420ab90bdcd1d0aefb06?pvs=21)
[9. 팀 활동](https://www.notion.so/9-2a2e507bd96d46dbbda6a5b787888e08?pvs=21)

### 1. 팀 소개(역할 분담)

---

1. 신혜정
   1. FE
   2. 팀장/기획
2. 최재혁
   1. FE
   2. 프론트 리더
3. 이주현(팀원/FE)
   1. FE
   2.
4. 용지은(팀원/FE)
5. 김라온(팀원/FE)
6. 유종훈(팀원/FE)
7. 정충래(백엔드리더/BE)

### 2. 기술 및 개발 환경

(프로젝트 기간, 프로젝트 목표, 사용기술<기술 선택 이유까지>, 개발환경, Git-Flow전략, 컨벤션)

---

1. ㅇㄻㄴㄻㄴㅇㄻㄴㅇㄹ

### 3. 주요 기능

---

1. ㅇㄻㄴㅇㄻㄴㅇㄹ

### 4. 프로젝트 구조(폴더 구조)-

---

- 폴더 구조
  ```jsx
  📦src
   ┣ 📂Context
   ┣ 📂Routes
   ┣ 📂api
   ┣ 📂assets
   ┃ ┣ 📂fonts
   ┃ ┗ 📂images
   ┃ ┃ ┣ 📂png
   ┃ ┃ ┗ 📂svg
   ┣ 📂components
   ┃ ┣ 📂Chatting
   ┃ ┣ 📂Feed
   ┃ ┣ 📂FeedWrite
   ┃ ┣ 📂Home
   ┃ ┣ 📂HotFandom
   ┃ ┣ 📂MyFandom
   ┃ ┣ 📂MyPage
   ┃ ┣ 📂Request
   ┃ ┣ 📂SearchItem
   ┃ ┣ 📂SignUp
   ┃ ┣ 📂SonminsooItem
   ┃ ┗ 📂common
   ┃ ┃ ┣ 📂AlertModal
   ┃ ┃ ┣ 📂BucketListModal
   ┃ ┃ ┣ 📂FooterNavBar
   ┃ ┃ ┣ 📂HeaderBar
   ┃ ┃ ┣ 📂ThrottlingButton
   ┣ 📂constant
   ┣ 📂elements
   ┣ 📂hooks
   ┣ 📂pages
   ┃ ┣ 📂Chatting
   ┃ ┣ 📂Feed
   ┃ ┣ 📂FeedWrite
   ┃ ┣ 📂Home
   ┃ ┣ 📂HotFandom
   ┃ ┣ 📂InitInfo
   ┃ ┣ 📂Login
   ┃ ┣ 📂MyFandom
   ┃ ┣ 📂MyPage
   ┃ ┣ 📂Request
   ┃ ┣ 📂SearchItem
   ┃ ┣ 📂Settings
   ┃ ┣ 📂Signup
   ┃ ┣ 📂SonminsooItem
   ┣ 📂styles
   ┣ 📂types
   ┣ 📂utils
   ┣ 📜App.tsx
   ┣ 📜Router.tsx
   ┣ 📜index.tsx
   ┣ 📜service-worker.ts
   ┣ 📜serviceWorkerRegistration.ts
   ┗ 📜setupProxy.js
  ```
- Git 충돌 방지를 위해 Routes 폴더를 두고 각자 맡은 페이지의 route를 수정할 수 있게 하였습니다.

```
📦Routes
 ┣ 📜Chatting.route.tsx
 ┣ 📜Feed.route.tsx
 ┣ 📜FeedWrite.route.tsx
 ┣ 📜InitInfo.route.tsx
 ┣ 📜Login.route.tsx
 ┣ 📜MyFandom.route.tsx
 ┣ 📜MyPage.route.tsx
 ┣ 📜Request.route.tsx
 ┣ 📜SearchItem.route.tsx
 ┣ 📜Settings.route.tsx
 ┣ 📜Signup.route.tsx
 ┣ 📜Sonminsoo.route.tsx
 ┗ 📜index.tsx
```

- 컴포넌트와 스타일 컴포넌트 구분을 위해 스타일 파일을 분리하였습니다.

```
📦HotFandom
 ┣ 📂style
 ┃ ┣ 📜FandomRanking.style.tsx
 ┃ ┣ 📜HotFamdomHeader.style.tsx
 ┃ ┗ 📜HotFandomCircle.style.tsx
 ┣ 📜FandomRanking.tsx
 ┣ 📜HotFandomCircle.tsx
 ┗ 📜HotFandomHeader.tsx
```

```jsx
return (
  <S.ContentHeaderContainer>
    <S.MyFandomHeaderText>마이 팬덤</S.MyFandomHeaderText>
    <S.CreateBtn onClick={() => navigate("/myfandom/createfandom")}>
      + 새 팬덤 만들기
    </S.CreateBtn>
  </S.ContentHeaderContainer>
)
```

### 5. UI

---

1. ㅁㅇㄻㄴㅇㄹ

### 6. 페이지 기능

---

1. ㄴㄹㅇㄴㅁㅇㄻㄴㅇ

### 7. 작업 관리(협업 방법)

---

## [ Notion ]

- 팀 노션 워크스페이스에서 작업 흐름을 공유하였습니다.

![그림1.png](ReadMe%2037a9cb5b8b134874b9a05233fd49a356/%25EA%25B7%25B8%25EB%25A6%25BC1.png)

## [ Figma ]

- 디자인과 기획은 모두 Figma를 통해 진행했습니다.
- 피그마 댓글기능을 통해서 기능, 디자인에 관한 피드백을 주고 받았습니다.

[https://www.figma.com/file/dmFBG0e6dFjDnUrxWbkKgy/%EB%8B%B9%EC%9E%A5-%EC%86%90%EB%AF%BC%EC%88%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=236%3A3330&mode=design&t=0uSi7Oj3E6bIaoXY-1](https://www.figma.com/file/dmFBG0e6dFjDnUrxWbkKgy/%EB%8B%B9%EC%9E%A5-%EC%86%90%EB%AF%BC%EC%88%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=236%3A3330&mode=design&t=0uSi7Oj3E6bIaoXY-1)

## [ Swagger ]

- 스웨거를 통해 api 문서를 자동화 하였습니다.

## [ Gather ]

- 작업하는 시간에는 게더타운에 접속하여 소통을 원활히 하였습니다.
- 효율적인 협업을 위해 애자일 방법론을 사용하였습니다.
- 매일 10~11시 스크럼을 통해 현재 진행상황을 공유하여 개발 일정을 조율하였습니다.

![Untitled](ReadMe%2037a9cb5b8b134874b9a05233fd49a356/Untitled.png)

### 8. 개선 방향(리팩토링)

---

1. ㅇㄴㄻㅇㄹ

### 9. 팀 활동

---

![Untitled](ReadMe%2037a9cb5b8b134874b9a05233fd49a356/Untitled%201.png)

![Untitled](ReadMe%2037a9cb5b8b134874b9a05233fd49a356/Untitled%202.png)
