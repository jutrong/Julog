import styled from "styled-components"
import device from "../../../styles/device"

export const PortfolioWrap = styled.div`
  max-width: 80%;
  margin: 150px auto;
  padding-bottom: 40px;
  @media ${device.mobileL} {
    height: auto;
  }
`
export const Title = styled.h2`
  font-size: 35px;
`
export const Line = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 40px 0;
  box-shadow: 0 15px 30px black;
`
export const PortfolioNum = styled.p`
  text-align: right;
  font-size: 25px;
  margin-right: 20px;
`
export const PortfolioBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  margin: 50px auto;

  @media ${device.tablet} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
  }
  @media ${device.mobileL} {
    flex-direction: column;
    margin: 40px 0;
  }
`
export const Projects = styled.div`
  width: 45%;
  border-radius: 8px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  &:hover {
    background-color: #d3d3d32b;
  }
  transition: 0.4s;
  @media ${device.tablet} {
    width: 80%;
    height: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
  }
`
export const Project = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
`

export const ProjectsImg = styled.img`
  width: 100%;
  height: 200px;
  transition: 0.5s;
  object-fit: cover;
  &:hover {
    scale: 1.1;
  }
`
export const ProjectContent = styled.div`
  padding: 18px;
`
export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
`
export const ProjectName = styled.p`
  margin-left: 8px;
  font-weight: 600;
  font-size: 15px;
`
export const ProjectTitleImg = styled.img`
  scale: 0.9;
  overflow: hidden;
  width: 20px;
  height: 20px;
`
export const ProjectPeriod = styled.p`
  font-size: 12px;
  margin-top: 10px;
`
export const UseSkills = styled.div``
export const Skill = styled.span`
  font-size: 12px;
  display: inline-block;
  margin-top: 12px;
  margin-right: 10px;
  padding: 2px 7px;
  border-radius: 5px;
  background-color: #f7f1e3;
  font-weight: 600;
`
export const AboutLinks = styled.div`
  display: flex;
  flex-direction: column;
`
export const Links = styled.a`
  width: 100%;
  font-size: 12px;
  padding-top: 15px;
  text-decoration: underline;
`
export const Categorys = styled.div``
export const Category = styled.div`
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
