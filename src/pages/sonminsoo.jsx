import React, { useState } from "react"
import Youtube from "react-youtube"
import Layout from "../components/layout"
import styled from "styled-components"
import favi from "../images/favi.svg"
import serviceImg from "../images/minsooservice.png"
import on from "../images/toggle.svg"
import off from "../images/toggleoff.svg"
import feedText from "../images/feedtext.png"
import time from "../images/time.png"
import imageCode from "../images/imagecode.png"
import hashtag from "../images/hashtag.png"
import formData from "../images/formdata.png"

const Sonminsoo = () => {
  const [isPageImg, setIsPageImg] = useState(false)
  const [isFeedTextCodeOpen, setIsFeedTextCodeOpen] = useState(false)
  const [isTimeCodeOpen, setIsTimeCodeOpen] = useState(false)
  const [isImageCodeOpen, setIsImageCodeOpen] = useState(false)

  return (
    <>
      <Layout>
        <SonminsooWrap>
          <SonminsooTitle>
            <SonminsooImg src={favi} />
            <SonminsooMainTitle>당장-손민수</SonminsooMainTitle>
          </SonminsooTitle>
          <Line />
          <SonminsooVideo>
            <Youtube
              videoId="FJzvQ0aJ36w"
              opts={{
                width: "60%",
                heigth: "100%",
              }}
            />
            <SonminsooCaption>당장-손민수 시연영상</SonminsooCaption>
          </SonminsooVideo>
          <SonminsooServiceBox>
            <SonminsooService>
              나의 최애의 아이템을 <strong>간편하게</strong> 찾을 수 있도록.
              <br /> 나의 최애 아이템을 구매할 수 있도록.
              <br />
              최애 아이템을 <strong>빠르고 쉽게</strong>.
              <br /> 혼자하는 덕질이 아닌 <strong>함께</strong>.
              <br /> <strong>PWA기반의 이미지 중심 소셜 네트워크 서비스</strong>
            </SonminsooService>
            <SonminsooServiceImg src={serviceImg} />
            <SonminsooGithub>
              👉 깃허브 :{" "}
              <GinhubLink
                href={"https://github.com/jutrong/sonminsoo-project"}
                target="_blank"
              >
                https://github.com/jutrong/sonminsoo-project
              </GinhubLink>
            </SonminsooGithub>
          </SonminsooServiceBox>
          <Line />
          <SonminsooPage>
            <SonminsooToggleBtn onClick={() => setIsPageImg(!isPageImg)}>
              {isPageImg ? <Toggle src={on} /> : <Toggle src={off} />}
              <ToggleTitle>페이지별 화면</ToggleTitle>
            </SonminsooToggleBtn>
            {isPageImg ? (
              <SonminsooPageImg isPageImg={isPageImg}>
                <PageImgWrap>
                  <PageImgTitle>유저</PageImgTitle>
                  <PageImage>
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/0278a691-13ed-493f-8bf0-11e38b7bb302/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/83544b0a-e822-48af-a144-a1566885364a/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/4a89bfbe-bd4b-426b-9d05-43b6d3297910/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/d37d8511-ad17-4566-8d79-86d53b454ba6/image.PNG" />
                  </PageImage>
                </PageImgWrap>
                <PageImgWrap>
                  <PageImgTitle>홈</PageImgTitle>
                  <PageImage>
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/cbaed164-b033-4df0-a6ad-39f8794566ad/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/387be322-1daf-435b-9693-5ea0ae716f6e/image.PNG" />
                  </PageImage>
                </PageImgWrap>
                <PageImgWrap>
                  <PageImgTitle>피드</PageImgTitle>
                  <PageImage>
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/19939e0f-05ce-4b5d-9b00-25cc05cefef8/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/842bbbe6-8d50-472a-8733-0910f49afbe6/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/edf019e4-8957-4d75-b197-28df07dbc1a5/image.PNG" />
                  </PageImage>
                </PageImgWrap>
                <PageImgWrap>
                  <PageImgTitle>손민수 아이템</PageImgTitle>
                  <PageImage>
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/9d2c30f6-988e-48a5-8a27-46472c0defe0/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/7485c6f2-c687-4639-bfd6-41b3a2e8ef33/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/ac5581c0-c276-4790-a4a2-0cd1f80bdc6d/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/7d3180e9-c9a7-485c-875c-5399942b343e/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/35f6c00b-0084-47a7-a357-d10d30737929/image.PNG" />
                  </PageImage>
                </PageImgWrap>
                <PageImgWrap>
                  <PageImgTitle>채팅</PageImgTitle>
                  <PageImage>
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/ad62aeb3-ba4e-44e0-b9eb-112d7c6ccc37/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/07b7f569-31e9-4bb8-9840-47cd23a5dbd5/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/499eb0dd-e3aa-40f4-a838-ff2920be1339/image.PNG" />
                  </PageImage>
                </PageImgWrap>
                <PageImgWrap>
                  <PageImgTitle>마이페이지</PageImgTitle>
                  <PageImage>
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/5cf5613d-63bf-433e-ad9f-ec1f05230e38/image.png" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/8ac9f427-baa0-4369-8c30-6feafbac5770/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/10aa7eb7-1d03-4914-83fc-f95ef5790d00/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/1883670e-4d99-4981-8e6a-fd3937ccd993/image.PNG" />
                    <PageImg src="https://velog.velcdn.com/images/raoni/post/2add8ec7-0f72-4e2a-bf30-cbbd4207f7f2/image.PNG" />
                  </PageImage>
                </PageImgWrap>
              </SonminsooPageImg>
            ) : null}
          </SonminsooPage>
          <Line />
          <SonminsooPart>
            <MyPart>담당한 파트</MyPart>
            <MyPartDetail>
              피드페이지 CRUD
              <br /> 댓글·좋아요 기능
              <br />글 작성 시간 함수
            </MyPartDetail>
            <WhatDidIdo>💁 What did I do?</WhatDidIdo>
            <WhatDidIdoWrap>
              <WhatDidIdoTitle>
                <WhatDidIdoIcon>🏷️</WhatDidIdoIcon> slice함수를 사용하여 작성글
                내용길이 설정하여 펼치고 닫기
              </WhatDidIdoTitle>
              <WhatDidIdoContent>
                - 글 내용의 길이를 제한하고, 텍스트를 펼칠 수 있도록 만드는데
                slice 함수를 사용하였습니다.
              </WhatDidIdoContent>
              <WhatDidIdoCodeWrap>
                <WhatDidIdoCodeToggle
                  onClick={() => setIsFeedTextCodeOpen(!isFeedTextCodeOpen)}
                >
                  ✒︎ Code
                </WhatDidIdoCodeToggle>
                {isFeedTextCodeOpen && <WhatDidIdoCodeImage src={feedText} />}
              </WhatDidIdoCodeWrap>
            </WhatDidIdoWrap>
            <WhatDidIdoWrap>
              <WhatDidIdoTitle>
                <WhatDidIdoIcon>⏱️</WhatDidIdoIcon> 피드 작성 시간을 표시해주는
                uitl 공용함수 제작
              </WhatDidIdoTitle>
              <WhatDidIdoContent>
                - 주어진 날짜와 현재 시간 사이의 시간 차이를 계산하고, 그 차이에
                따라 "방금 전", "n분 전", "n시간 전" 등을 반환하여 상대적인 시간
                표시를 하였습니다.
              </WhatDidIdoContent>
              <WhatDidIdoCodeWrap>
                <WhatDidIdoCodeToggle
                  onClick={() => setIsTimeCodeOpen(!isTimeCodeOpen)}
                >
                  ✒︎ Code
                </WhatDidIdoCodeToggle>
                {isTimeCodeOpen && <WhatDidIdoCodeImage src={time} />}
              </WhatDidIdoCodeWrap>
            </WhatDidIdoWrap>
            <WhatDidIdoWrap>
              <WhatDidIdoTitle>
                <WhatDidIdoIcon>📝</WhatDidIdoIcon> 피드 작성하기 버튼 클릭 시
                이미지 등록
              </WhatDidIdoTitle>
              <WhatDidIdoContent>
                - input type =“file” , accept=“image/*”을 통해 device의 이미지
                파일을 선택할 수 있게 하였습니다.
                <br /> 선택한 파일의 값을 <strong>useNavigate훅</strong>을
                사용하여 상태 값을 넘겨주고, 페이지 이동을 시키고
                <strong>useLocation훅</strong>을 통해 값들을 받아와
                사용하였습니다.
                <br />
                <br />
                <br />
                피드 작성하기와 수정하기 화면을 state값에 따라 비활성화 처리
                하였습니다. $updatePage이 true일 경우에는 팬덤선택, 아티스트
                항목에 입력 하지 못합니다.
              </WhatDidIdoContent>
              <WhatDidIdoCodeWrap>
                <WhatDidIdoCodeToggle
                  onClick={() => setIsImageCodeOpen(!isImageCodeOpen)}
                >
                  ✒︎ Code
                </WhatDidIdoCodeToggle>
                {isImageCodeOpen && <WhatDidIdoCodeImage src={imageCode} />}
              </WhatDidIdoCodeWrap>
            </WhatDidIdoWrap>
            <WhatDidIdoWrap>
              <WhatDidIdoTitle>
                <WhatDidIdoIcon>#️⃣</WhatDidIdoIcon> hasstag를 입력하고 가공하여
                서버에 배열형식으로 전달
              </WhatDidIdoTitle>
              <WhatDidIdoContent>
                <WhatDidIdoCodeImage src={hashtag} />
                - #로 시작하며, 그 뒤에 영문 대소문자, 한글 글자가 오는 정규
                표현식 <br />
                - match 함수가 해시태그를 찾지 못하면, ?. 연산자를 사용하여 map
                함수를 호출하지 않고 [] 빈 배열을 반환 <br />
                - .slice(1)을 사용하여 해시태그 문자열에서 첫 번째 문자(해시
                기호)를 제거 추출된 해시태그는 배열로 저장되며, 이 배열은
                hashtagss 변수에 할당 <br />- 이 해쉬태그를
                multipart/form-data로 전송하기 위해서는 배열에 있는 각
                해시태그를 FormData 객체에 추가하는 작업을 하였습니다.
                <WhatDidIdoCodeImage src={formData} />
              </WhatDidIdoContent>
            </WhatDidIdoWrap>
          </SonminsooPart>
        </SonminsooWrap>
      </Layout>
    </>
  )
}

export default Sonminsoo

const SonminsooWrap = styled.div`
  margin: 150px auto;
  padding-bottom: 200px;
`
const SonminsooTitle = styled.div``
const SonminsooImg = styled.img`
  width: 100px;
`
const SonminsooMainTitle = styled.h2`
  font-size: 38px;
  margin-top: 50px;
  font-family: "Noto Sans KR", sans-serif;
`
const SonminsooVideo = styled.div`
  margin: 0 auto;
`
const SonminsooCaption = styled.span`
  display: inline-block;
  margin-top: 10px;
  opacity: 0.5;
  font-size: 15px;
  margin-left: 15px;
  font-weight: 600;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #191919;
  margin: 30px 0;
  opacity: 0.1;
`
const SonminsooServiceBox = styled.div`
  width: 100%;
  margin: 70px 0;
`
const SonminsooService = styled.div`
  width: 60%;
  line-height: 2em;
  border: 1px solid lightgrey;
  padding: 20px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  border-radius: 8px;
`
const SonminsooServiceImg = styled.img`
  width: 60%;
  margin-top: 70px;
`
const SonminsooGithub = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
`

const GinhubLink = styled.a`
  text-decoration: underline;
  font-weight: 400;
  opacity: 0.6;
  cursor: pointer;
`
const SonminsooPage = styled.div``
const SonminsooToggleBtn = styled.p`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 50px;
`
const SonminsooPageImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  opacity: ${props => (props.isPageImg ? 1 : 0)};
  transition: opacity 0.4s ease;
`

const Toggle = styled.img`
  width: 30px;
  margin-right: 10px;
`
const ToggleTitle = styled.p``
const PageImg = styled.img`
  width: 180px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
`
const SonminsooPart = styled.div``
const MyPart = styled.h2``
const MyPartDetail = styled.p`
  margin: 30px 0;
  margin-left: 30px;
  font-size: 18px;
  position: relative;
  line-height: 2em;
  word-spacing: 2px;
  font-weight: 500;
  letter-spacing: 0.5px;
  &::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 95px;
    background-color: #191919;
    left: -20px;
    top: 6px;
  }
`
const WhatDidIdo = styled.h2`
  margin-top: 50px;
  margin-bottom: 20px;
`
const WhatDidIdoWrap = styled.div`
  border: 1px dashed #dddddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  margin: 40px 10px;
  width: 100%;
`
const WhatDidIdoIcon = styled.p`
  margin-right: 4px;
  display: inline-block;
`
const WhatDidIdoTitle = styled.h3`
  letter-spacing: 0.5px;
  font-size: 21px;
`
const WhatDidIdoContent = styled.p`
  margin-top: 15px;
  font-size: 15px;
  line-height: 1.8em;
`
const WhatDidIdoCodeWrap = styled.div`
  margin-top: 20px;
  font-weight: 500;
  cursor: pointer;
`
const WhatDidIdoCodeToggle = styled.p`
  font-weight: 600;
`

const WhatDidIdoCodeImage = styled.img`
  margin-top: 40px;
  border-radius: 10px;
`
const PageImgWrap = styled.div``
const PageImgTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`
const PageImage = styled.div`
  margin: 30px;
`
