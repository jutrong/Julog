import React, { useEffect } from "react"
import { Link } from "gatsby"
import * as S from "./style"

const PostLists = ({ postData }) => {
  return (
    <>
      <S.PostList>
        <Link to={postData.node.fields.slug}>
          <S.PostWrap>
            <S.ThumbnailWrap>
              <S.Thumbnail src={postData.node.frontmatter.thumbnail} />
            </S.ThumbnailWrap>
            <S.ContentWrap>
              <S.Title>{postData.node.frontmatter.title}</S.Title>
              <S.description>{postData.node.frontmatter.summary}</S.description>
              <S.Time>{postData.node.frontmatter.date}</S.Time>
            </S.ContentWrap>
          </S.PostWrap>
        </Link>
      </S.PostList>
    </>
  )
}
export default PostLists
