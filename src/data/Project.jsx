import phone from "../images/phone.png"
import skills from "../images/skill.png"
import menu from "../images/menu.png"

const projectsData = [
  {
    id: 1,
    title: "당장 손민수",
    description: [
      `나의 최애의 아이템을 간편하게 찾을 수 있도록.
      나의 최애 아이템을 구매할 수 있도록.
      최애 아이템을 빠르고 쉽게.
      혼자하는 덕질이 아닌 함께.
      PWA기반의 이미지 중심 소셜 네트워크 서비스를 개발하였습니다.`,
    ],
    githubLink: "https://github.com/jutrong/sonminsoo-project",
    liveLink: "https://kdt-sw-5-2-team11.elicecoding.com",
    duration: {
      start: "23.08.15",
      end: "09.01",
    },
    people: {
      frontend: 6,
      backend: 1,
    },
    image: phone,
    explanation: `PWA기반의 SNS서비스를 개발하는 팀프로젝트입니다. 
    현재 리펙토링 진행중입니다.`,
    implementedFeatures: [
      `피드 페이지 CRUD
      댓글 작성 삭제
      피드 좋아요
      multipart/form-data를 사용하여 이미지 업로드
      아이템 검색`,
    ],
    skills: [
      `React TypeScript  Styled-Components  PWA  Axios  JWT
       Nest-Js Socket.io Prsima Redis AWS S3 postgres,`,
    ],
  },
  {
    id: 2,
    title: "Personal blog",
    description: [
      `개발자는 개인 페이지 하나씩은 가져야지! 하면서 만든 gatsby기반 정적사이트
      이력서 포트폴리오 블로그를 한 곳에 `,
    ],
    githubLink: "https://github.com/jutrong/Julog",
    liveLink: "https://jutrong.netlify.app",
    duration: {
      start: "23.09.11",
      end: "진행중",
    },
    people: {
      frontend: 1,
      backend: 0,
    },
    image: menu,
    explanation: `블로그와 이력서를 하나의 웹페이지로 관리하기 위해 만든 개인 웹사이트입니다.`,
    implementedFeatures: [
      `Figma를 통한 디자인, 기획
      Gatsby.js를 이용한 마크다운 블로그 포스팅 구현
      Gsap을 활용한 애니메이션 효과`,
    ],
    skills: [`React Gatsby Styled-Components Gsap Netlify`],
  },
]

export default projectsData
