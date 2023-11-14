import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import gsap from "gsap"
import device from "../styles/device"

const PostLists = ({ totalCount, edges }) => {
  useEffect(() => {
    const thumbnails = document.querySelectorAll('div[data-role="thumbnail"]')

    thumbnails.forEach(thumbnail => {
      const img = thumbnail.querySelector("img")

      // 마우스 움직임 이벤트를 처리하는 함수
      const handleMouseMove = e => {
        const rect = thumbnail.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        // 마우스의 위치에 따라 회전 각도를 계산
        const rotateY = ((mouseX - centerX) / centerX) * 15
        const rotateX = (-(mouseY - centerY) / centerY) * 15

        gsap.to(img, {
          duration: 0.5,
          rotationY: rotateY,
          rotationX: rotateX,
          transformPerspective: 1000,
          transformOrigin: "center center",
          ease: "power2.out",
        })
      }

      // 마우스가 요소 밖으로 나갈 때 원래 위치로 되돌리기
      const handleMouseLeave = () => {
        gsap.to(img, {
          duration: 0.5,
          rotationY: 0,
          rotationX: 0,
          transformPerspective: 1000,
          transformOrigin: "center center",
          ease: "power2.out",
        })
      }

      thumbnail.addEventListener("mousemove", handleMouseMove)
      thumbnail.addEventListener("mouseleave", handleMouseLeave)
    })
  }, [])

  return (
    <>
      <MainTitle>Blog</MainTitle>
      <PostCount>{totalCount} Posts</PostCount>
      <PostList>
        {edges.map(({ node }) => {
          const {
            id,
            frontmatter: { title, date, thumbnail, summary },
            fields: { slug },
          } = node
          //TODO: StaticImage 사용해보기
          return (
            <Post key={id} className="post">
              <Loading className="loading" />
              <Link to={`${slug}`}>
                <Thumbnail data-role="thumbnail">
                  <img src={thumbnail} alt="post thumbnail" />
                </Thumbnail>
                <Text>
                  <CreateAt>{date.split("T")[0]}</CreateAt>
                  <Title>{title}</Title>
                </Text>
              </Link>
            </Post>
          )
        })}
      </PostList>
    </>
  )
}
export default PostLists

const MainTitle = styled.h1`
  width: 100%;
  padding-bottom: 3rem;
  margin-top: 200px;
  font-weight: 700;
  font-size: 4em;
  overflow: hidden;

  a {
    position: relative;
    display: block;
  }
`

const PostCount = styled.h4`
  margin-top: -4rem;
  font-weight: 700;
  font-size: 1.4rem;
  text-align: right;
`

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 3rem;
  padding-bottom: 10rem;
  margin-top: 10rem;
  color: ${({ theme }) => theme.$black};

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 250px;
  }
`

const Post = styled.li`
  position: relative;
  overflow: hidden;
  object-fit: cover;
  text-align: center;
`

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.$black};
  transform: translateY(-120%);
  z-index: 99;
`

const Thumbnail = styled.div`
  cursor: pointer;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    transition: transform 0.2s;
  }
  &:hover img {
    transform: scale(1.05);
  }
`

const Text = styled.div`
  padding: 30px 0;
  margin-left: 10px;
`

const Title = styled.h3`
  color: ${({ theme }) => theme.$black};
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.6;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CreateAt = styled.span`
  color: ${({ theme }) => theme.$darkGray};
  font-weight: 500;
  font-size: 1.1rem;
  opacity: 0.53;
`
