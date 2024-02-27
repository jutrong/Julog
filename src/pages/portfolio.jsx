import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import portfolioData from "../data/Portfolio"
import Seo from "../components/seo"
import * as S from "../components/portfolio/style"

const Portfolio = () => {
  return (
    <Layout>
      <S.PortfolioWrap>
        <S.Title>💻 ProJect.</S.Title>
        <S.Line />
        <S.PortfolioNum>2 Post</S.PortfolioNum>
        <S.PortfolioBox>
          {portfolioData.map(project => (
            <S.Projects>
              <Link to={project.path} target="_blank">
                <S.Project key={project.id}>
                  <S.ProjectsImg src={project.image} />
                  <S.ProjectContent>
                    <S.ProjectTitle>
                      <S.ProjectTitleImg src={project.favicon} />
                      <S.ProjectName>{project.title}</S.ProjectName>
                    </S.ProjectTitle>
                    <S.ProjectPeriod>{project.period}</S.ProjectPeriod>
                    <S.UseSkills>
                      {project.skills.map((skill, index) => (
                        <S.Skill key={index}>{skill}</S.Skill>
                      ))}
                    </S.UseSkills>
                    <S.AboutLinks>
                      <S.Links href={project.links.github} target="_blank">
                        Github.com
                      </S.Links>
                      {project.links.link && (
                        <S.Links href={project.links.github} target="_blank">
                          Link
                        </S.Links>
                      )}
                      {project.links.blog && (
                        <S.Links href={project.links.blog} target="_blank">
                          Blog
                        </S.Links>
                      )}
                    </S.AboutLinks>
                    <S.Categorys>
                      {project.categories.map((category, index) => (
                        <S.Category key={index}>{category}</S.Category>
                      ))}
                    </S.Categorys>
                  </S.ProjectContent>
                </S.Project>
              </Link>
            </S.Projects>
          ))}
        </S.PortfolioBox>
      </S.PortfolioWrap>
    </Layout>
  )
}

export default Portfolio
export const Head = () => <Seo title="Portfolio" />
