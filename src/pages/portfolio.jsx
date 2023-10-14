import React from "react"
import styled from "styled-components"
import device from "../styles/device"
import Layout from "../components/layout"
import portfolioData from "../data/Portfolio"

const Portfolio = () => {
  return (
    <Layout>
      <PortfolioWrap>
        <Title>💻 ProJect.</Title>
        <Line />
        <PortfolioNum>2 Post</PortfolioNum>
        <PortfolioBox>
          {portfolioData.map(project => (
            <Projects>
              <Project key={project.id}>
                <ProjectsImg src={project.image} />
                <ProjectContent>
                  <ProjectTitle>
                    <ProjectTitleImg src={project.favicon} />
                    <ProjectName>{project.title}</ProjectName>
                  </ProjectTitle>
                  <ProjectPeriod>{project.period}</ProjectPeriod>
                  <UseSkills>
                    {project.skills.map((skill, index) => (
                      <Skill key={index}>{skill}</Skill>
                    ))}
                  </UseSkills>
                  <AboutLinks>
                    <Links href={project.links.github} target="_blank">
                      Github.com
                    </Links>
                    {project.links.link && (
                      <Links href={project.links.github} target="_blank">
                        Link
                      </Links>
                    )}
                    {project.links.blog && (
                      <Links href={project.links.blog} target="_blank">
                        Blog
                      </Links>
                    )}
                  </AboutLinks>
                  <Categorys>
                    {project.categories.map((category, index) => (
                      <Category key={index}>{category}</Category>
                    ))}
                  </Categorys>
                </ProjectContent>
              </Project>
            </Projects>
          ))}
        </PortfolioBox>
      </PortfolioWrap>
    </Layout>
  )
}

export default Portfolio

const PortfolioWrap = styled.div`
  max-width: 80%;
  margin: 150px auto;
`
const Title = styled.h2`
  font-size: 35px;
`
const Line = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 40px 0;
  box-shadow: 0 15px 30px black;
`
const PortfolioNum = styled.p`
  text-align: right;
  font-size: 25px;
  margin-right: 20px;
`
const PortfolioBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 40px 30px;
`
const Projects = styled.div`
  width: 50%;
  height: 400px;
  border-radius: 8px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  &:hover {
    background-color: #d3d3d32b;
  }
  transition: 0.4s;
`
const Project = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
`

const ProjectsImg = styled.img`
  width: 100%;
  height: 200px;
  transition: 0.5s;
  object-fit: cover;
  &:hover {
    scale: 1.1;
  }
`
const ProjectContent = styled.div`
  padding: 18px;
`
const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
`
const ProjectName = styled.p`
  margin-left: 8px;
  font-weight: 600;
  font-size: 15px;
`
const ProjectTitleImg = styled.img`
  scale: 0.9;
`
const ProjectPeriod = styled.p`
  font-size: 12px;
  margin-top: 10px;
`
const UseSkills = styled.div``
const Skill = styled.span`
  font-size: 12px;
  display: inline-block;
  margin-top: 12px;
  margin-right: 10px;
  padding: 2px 7px;
  border-radius: 5px;
  background-color: #f7f1e3;
  font-weight: 600;
`
const AboutLinks = styled.div`
  display: flex;
  flex-direction: column;
`
const Links = styled.a`
  width: 100%;
  font-size: 12px;
  padding-top: 15px;
  text-decoration: underline;
`
const Categorys = styled.div``
const Category = styled.div`
  font-size: 12px;
  display: inline-block;
  margin-top: 18px;
  margin-right: 10px;
  padding: 5px 7px;
  border-radius: 5px;
  background-color: #ff6b6b46;
  font-weight: 500;
  color: #222222;
`
