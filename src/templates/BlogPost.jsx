import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import prev from "../images/ic-arrow-left.svg"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer>
        <Link to="/blog">
          <PrevBtn src={prev} />
        </Link>
        <PostText>{post.frontmatter.title}</PostText>
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
      }
    }
  }
`
const PostContainer = styled.div`
  padding-top: 120px;
  padding-bottom: 100px;
`
const PostText = styled.h3`
  font-size: 40px;
`
const PostBox = styled.div`
  margin-top: 40px;
  line-height: 2.5em;
`
const PrevBtn = styled.img`
  width: 50px;
  height: 50px;
  color: #191919;
  margin-bottom: 60px;
  cursor: pointer;
`
