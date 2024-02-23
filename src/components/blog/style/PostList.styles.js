import styled from "styled-components"
import device from "../../../styles/device"

export const PostList = styled.div`
  margin: 60px 0;
`
export const PostWrap = styled.div`
  display: flex;
  color: #ece7e1;
  align-items: center;
  margin: 80px 0;
  cursor: pointer;

  &:hover > div:first-child {
    transform: translateY(-10px);
    transition: all 0.5s ease;
    box-shadow: 0 0 20px #ece7e111;
  }
  &:hover > p {
    transform: translateX(2px);
    color: white;
    transition: all 0.5s ease;
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
`

export const ThumbnailWrap = styled.div`
  height: 200px;
  margin-right: 40px;
  flex-shrink: 0;
  max-width: 200px;
`
export const Thumbnail = styled.img`
  min-width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  @media ${device.tablet} {
    margin-top: 50px;
    align-items: center;
  }
`
export const Title = styled.p`
  font-size: 34px;
  font-weight: 800;
  line-height: 1.4em;
`
export const description = styled.p`
  font-size: 18px;
  line-height: 1.4em;
  /* text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; */
`
export const Time = styled.p`
  font-size: 14px;
  font-weight: lighter;
  margin-left: 14px;
  color: #191919;
`
