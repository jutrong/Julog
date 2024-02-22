import React from "react"
import { Link } from "gatsby"
import * as S from "./style"
import useMenu from "../../hooks/useMenu"

const Project = () => {
  const { setMenuState, isMenuOpen } = useMenu()

  return (
    <S.Wrap>
      <Link to="/">
        <S.Header isMenuOpen={isMenuOpen}>Jutrong.</S.Header>
      </Link>
      <S.ProjectWrap>
        <div>
          <S.ProjectTitle>BAB-FRIEND</S.ProjectTitle>
          <S.ProjectInfo>
            전국의 혼밥족들의 밥 친구를 찾는 커뮤니티
          </S.ProjectInfo>
        </div>
        <Link
          to="https://forest-cello-54d.notion.site/Julog-773341a7e4714a4797693102a2542344?pvs=4"
          target="_blank"
        >
          <div>
            <S.ProjectTitle>JULOG</S.ProjectTitle>
            <S.ProjectInfo>블로그와 작업물을 담는 공간</S.ProjectInfo>
          </div>
        </Link>
        <Link
          to="https://forest-cello-54d.notion.site/d2cdcc26706c483d9c5c025e862eadc7?pvs=4"
          target="_blank"
        >
          <div>
            <S.ProjectTitle>THIEF-SONMINSOO</S.ProjectTitle>
            <S.ProjectInfo>
              최애의 아이돌 아이템을 쉽고 빠르게 찾고 구매할 수 있도록 소셜
              네트워크 서비스를 개발하였습니다
            </S.ProjectInfo>
          </div>
        </Link>
      </S.ProjectWrap>
    </S.Wrap>
  )
}

export default Project
