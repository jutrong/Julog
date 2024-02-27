import sonminsoo from "../images/sonminsoo.png"
import favicon from "../images/favi.svg"
import blog from "../images/menu1.png"
import favicon2 from "../images/favi2.svg"
import ricefavi from "../images/rice.jpg"
import babfriend from "../images/bab.jpg"

const portfoliodata = [
  {
    id: 1,
    title: "BAB-FRIEND",
    period: "2023·12 → 리팩토링 진행중",
    skills: [
      "React",
      "Typescript",
      "Styled-components",
      "Recoil",
      "Tanstack-query",
      "AWS S3",
    ],
    links: {
      github: "https://github.com/jutrong/BAB_FRIEND",
      link: "https://bab-friend.com/",
    },
    categories: ["팀 프로젝트"],
    image: babfriend,
    favicon: ricefavi,
    path: "https://forest-cello-54d.notion.site/e3c58ba2e9e14baaae5fcabda157ada2",
  },
  {
    id: 3,
    title: "당장-손민수",
    period: "2023·08·15 → 2023·09·02",
    skills: ["React", "Typescript", "Styled-components", "PWA"],
    links: {
      github: "https://github.com/jutrong/sonminsoo-project",
      blog: "https://jutrong.netlify.app/blog/sonminsoo1/",
    },
    categories: ["팀프로젝트"],
    image: sonminsoo,
    favicon: favicon,
    path: "https://forest-cello-54d.notion.site/d2cdcc26706c483d9c5c025e862eadc7?pvs=4",
  },
  {
    id: 2,
    title: "Personal-Blog",
    period: "2023·09·11 → 2023·10·09",
    skills: ["Gatsby", "Styled-components", "Gasp", "Netlify"],
    links: {
      github: "https://github.com/jutrong/Julog",
      link: "https://jutrong.netlify.app/",
    },
    categories: ["개인 프로젝트"],
    image: blog,
    favicon: favicon2,
    path: "https://forest-cello-54d.notion.site/Julog-773341a7e4714a4797693102a2542344?pvs=4",
  },
]

export default portfoliodata
