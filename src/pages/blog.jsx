import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostList from "../components/blog/PostList"
import store from "../modules/Store"
import { Provider } from "react-redux"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark
  return (
    <Provider store={store}>
      <Layout>
        <PostList totalCount={totalCount} edges={edges} />
      </Layout>
    </Provider>
  )
}

export default Blog
export const Head = () => <Seo title="Julog" />

export const query = graphql`
  query getPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            categories
            summary
            thumbnail
          }
        }
      }
      totalCount
    }
  }
`
