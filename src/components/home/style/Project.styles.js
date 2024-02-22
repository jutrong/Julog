import styled from "styled-components"
import device from "../../../styles/device"

export const Wrap = styled.div`
  background-color: #000;
  width: 100%;
  position: absolute;
  z-index: 100;
`
export const Header = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 40px;
  color: #fff;
  display: ${props => (props.isMenuOpen ? "none" : "flex")};
  justify-content: flex-end;
  margin: 100px 140px;
  font-size: 24px;
  font-weight: 30px;
  font-family: "Jost", sans-serif;
  text-decoration: line-through;
  cursor: pointer;
  z-index: 111;
`
export const ProjectWrap = styled.div`
  padding: 240px 200px;
  padding-bottom: 140px;
  transition: transform 0.3s ease-in-out;
  div {
    margin: 110px 0;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateX(30px);
    }
    &:hover p:nth-child(2) {
      color: red;
    }
  }
`
export const ProjectTitle = styled.p`
  color: white;
  font-size: 80px;
  margin-bottom: 4px;
  font-family: "Jost", sans-serif;
  font-weight: 700;
`

export const ProjectInfo = styled.p`
  color: white;
  margin-left: 10px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  transition: transform 0.5s ease-in-out;
`
