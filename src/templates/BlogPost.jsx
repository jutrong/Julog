import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import prev from "../images/prev.svg"
import logo from "../images/logo.svg"

const formatDate = dateString => {
  const options = { month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer>
        <Link to="/blog">
          <PrevBtn src={prev} />
        </Link>
        <PostText>{post.frontmatter.title}</PostText>
        <PostHeader>
          <PostLogo alt="Description" src={logo}></PostLogo>
          <PostData>
            by Jutrong on {formatDate(post.frontmatter.date)}, 2023
          </PostData>
        </PostHeader>
        <PostBox dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostContainer>
    </Layout>
  )
}
export default BlogPost

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
const PostContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 100px;
`
const PostText = styled.h3`
  font-size: 60px;
`
const PostHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 30px 0;
  padding-bottom: 50px;
  border-bottom: 1px dotted #71809628;
`
const PostLogo = styled.img`
  width: 30px;
  height: 30px;
`
const PostData = styled.p`
  color: #718096;
  font-style: italic;
`
const PostBox = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  line-height: 2.5em;
  max-width: 750px;
`
const PrevBtn = styled.img`
  width: 45px;
  height: 45px;
  color: #191919;
  margin-bottom: 60px;
  cursor: pointer;
`
