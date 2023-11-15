import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
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
  /* margin-top: 100px; */
  font-weight: 700;
  font-size: 1.4rem;
  text-align: right;
`

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 3rem;
  padding-bottom: 10rem;
  margin-top: 100px;
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
    border-radius: 5px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
      rgba(15, 15, 15, 0.1) 0px 2px 4px;
    transition: 1s ease;
  }
  &:hover img {
    filter: blur(3px);
    transition: 1s ease;
    border-radius: 50px;
  }
`

const Text = styled.div`
  padding: 30px 0;
  margin-left: 10px;
`

const Title = styled.h3`
  color: ${({ theme }) => theme.$black};
  font-weight: bold;
  font-size: 20px;
  line-height: 1.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CreateAt = styled.span`
  color: ${({ theme }) => theme.$darkGray};
  font-weight: 500;
  font-size: 14px;
  opacity: 0.53;
`
