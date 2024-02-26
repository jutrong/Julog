import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostList from "../components/blog/PostList"
import store from "../modules/Store"
import { Provider } from "react-redux"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark
  const [selectedCategory, setSelectedCategory] = useState(null)

  const uniqueCategories = Array.from(
    new Set(edges.flatMap(({ node }) => node.frontmatter.categories))
  )

  const handleCategoryClick = category => {
    setSelectedCategory(category)
  }

  const filteredPosts = selectedCategory
    ? edges.filter(({ node }) =>
        node.frontmatter.categories.includes(selectedCategory)
      )
    : edges

  return (
    <Provider store={store}>
      <Layout>
        <MainTitle>Blog</MainTitle>
        <PostCount>{totalCount} Posts</PostCount>
        <Category>
          <CategoryItem onClick={() => setSelectedCategory(null)}>
            ALL
          </CategoryItem>
          {uniqueCategories.map((data, index) => (
            <CategoryItem key={index} onClick={() => handleCategoryClick(data)}>
              {data}
            </CategoryItem>
          ))}
        </Category>
        {filteredPosts.map(data => (
          <PostList key={data.node.id} postData={data} />
        ))}
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
export const MainTitle = styled.h1`
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

export const PostCount = styled.h4`
  /* margin-top: 100px; */
  font-weight: 700;
  font-size: 1.4rem;
  text-align: right;
`

export const Category = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 12px;
  margin: 80px auto;
  padding: 0 20px;
  margin-bottom: 120px;
`
export const CategoryItem = styled.p`
  font-size: 13px;
  border: 1px solid #ece7e1;
  border-radius: 10px;
  padding: 5px 18px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #191919;
    color: white;
  }
`
