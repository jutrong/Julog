import React, { useEffect } from "react"
import { Link } from "gatsby"
import * as S from "./style"

const PostLists = ({ postData }) => {
  const { node } = postData
  const { slug } = node.fields
  const { title, thumbnail, summary, date } = node.frontmatter
  return (
    <>
      <S.PostList>
        <Link to={slug}>
          <S.PostWrap>
            <S.ThumbnailWrap>
              <S.Thumbnail src={thumbnail} alt={`Thumbnail of ${title}`} />
            </S.ThumbnailWrap>
            <S.ContentWrap>
              <S.Title>{title}</S.Title>
              <S.description>{summary}</S.description>
              <S.Time>{date}</S.Time>
            </S.ContentWrap>
          </S.PostWrap>
        </Link>
      </S.PostList>
    </>
  )
}
export default PostLists
