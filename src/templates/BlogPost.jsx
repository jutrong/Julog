import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer>
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
  padding-top: 150px;
`
const PostText = styled.h3`
  font-size: 40px;
`
const PostBox = styled.div`
  margin-top: 40px;
  line-height: 2.5em;
`
