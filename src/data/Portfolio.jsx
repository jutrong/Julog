import sonminsoo from "../images/sonminsoo.png"
import favicon from "../images/favi.svg"
import blog from "../images/menu1.png"
import favicon2 from "../images/favi2.svg"

const portfoliodata = [
  {
    id: 1,
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
    path: "https://www.notion.so/d2cdcc26706c483d9c5c025e862eadc7?pvs=4",
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
    path: "https://www.notion.so/Julog-773341a7e4714a4797693102a2542344?pvs=4",
  },
]

export default portfoliodata
