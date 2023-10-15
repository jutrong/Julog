import React, { useState } from "react"
import { Link } from "gatsby"
import Youtube from "react-youtube"
import Layout from "../components/layout"
import styled from "styled-components"
import favi from "../images/favi.svg"
import serviceImg from "../images/minsooservice.png"
import on from "../images/toggle.svg"
import off from "../images/toggleoff.svg"

const Sonminsoo = () => {
  const [isPageImg, setIsPageImg] = useState(false)

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
                <PageImg src="https://velog.velcdn.com/images/raoni/post/0278a691-13ed-493f-8bf0-11e38b7bb302/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/83544b0a-e822-48af-a144-a1566885364a/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/4a89bfbe-bd4b-426b-9d05-43b6d3297910/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/d37d8511-ad17-4566-8d79-86d53b454ba6/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/cbaed164-b033-4df0-a6ad-39f8794566ad/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/387be322-1daf-435b-9693-5ea0ae716f6e/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/19939e0f-05ce-4b5d-9b00-25cc05cefef8/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/842bbbe6-8d50-472a-8733-0910f49afbe6/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/edf019e4-8957-4d75-b197-28df07dbc1a5/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/9d2c30f6-988e-48a5-8a27-46472c0defe0/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/7485c6f2-c687-4639-bfd6-41b3a2e8ef33/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/ac5581c0-c276-4790-a4a2-0cd1f80bdc6d/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/7d3180e9-c9a7-485c-875c-5399942b343e/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/35f6c00b-0084-47a7-a357-d10d30737929/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/ba9fd151-26a8-4ae3-b88c-2cc758edc922/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/ad62aeb3-ba4e-44e0-b9eb-112d7c6ccc37/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/07b7f569-31e9-4bb8-9840-47cd23a5dbd5/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/499eb0dd-e3aa-40f4-a838-ff2920be1339/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/5cf5613d-63bf-433e-ad9f-ec1f05230e38/image.png" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/8ac9f427-baa0-4369-8c30-6feafbac5770/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/10aa7eb7-1d03-4914-83fc-f95ef5790d00/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/1883670e-4d99-4981-8e6a-fd3937ccd993/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/2add8ec7-0f72-4e2a-bf30-cbbd4207f7f2/image.PNG" />
                <PageImg src="https://velog.velcdn.com/images/raoni/post/98ae772d-6860-47bd-a610-6d70222d8625/image.PNG" />
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
