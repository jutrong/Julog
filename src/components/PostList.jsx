import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import gsap from "gsap"
import device from "../styles/device"

const PostLists = ({ totalCount, edges }) => {
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

          return (
            <Post key={id} className="post">
              <Loading className="loading" />
              <Link to={`${slug}`}>
                <Thumbnail>
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
`

const Post = styled.li`
  position: relative;
  overflow: hidden;
  object-fit: cover;
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
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`

const Text = styled.div`
  padding: 30px 0;
  margin-left: 10px;
`

const Title = styled.h3`
  /* display: -webkit-box; */
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
