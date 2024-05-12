const dataSkill = [
  {
    id: 1,
    name: "HTML",
    type: "SkillSet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdnKVl86zD9Cof-ZLBwCm0DbvhnehIosXEUBtO6FUJg&s",
  },
  {
    id: 2,
    name: "CSS",
    type: "SkillSet",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
  },
  {
    id: 3,
    name: "JS",
    type: "SkillSet",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    name: "BOOSTRAP",
    type: "SkillSet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzydXo9YYB2dFu_6O_b8SsY4u2ZTVOiG9OwT798zyGxQ&s",
  },
  {
    id: 5,
    name: "REACT JS",
    type: "SkillSet",
    img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  },
  {
    id: 6,
    name: "REDUX",
    type: "SkillSet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTelECZ5uA0rEvlWtTCGEnBwrc_QtF4ZjJRtH5WaOjg&s://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png",
  },
  {
    id: 7,
    name: "VS code",
    type: "Tools",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
  },
  {
    id: 8,
    name: "GitLab & GitHub",
    type: "Tools",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
  },
  {
    id: 9,
    name: "Trello",
    type: "Tools",
    img: "https://cdn-icons-png.flaticon.com/256/2111/2111656.png",
  },
];
const dataProject = [
  {
    id: 1,
    img: require("../../assets/image/htmlcssPort.png"),
    desc: "Build a Responsive Portfolio website using html,css and boostrap.",
    date: "12/11/23",
    demo: "https://dev-portfolio-ten-mu.vercel.app/",
    github: "https://github.com/RithShelby/html-css-portfolio",
  },
  {
    id: 2,
    img: require("../../assets/image/haircut.png"),
    desc: "Build a Template haircut website using html,css,boostrap and js.",
    date: "30/12/23",
    demo: "https://haircut-template.vercel.app/",
    github: "https://github.com/RithShelby/haircutTemplate",
  },
  {
    id: 3,
    img: require("../../assets/image/Screenshot 2024-05-05 145234.png"),
    desc: "Amado Clone with Side bar , using react js with boostrap.",
    date: "01/01/24",
    demo: "https://amado-template.vercel.app/home",
    github: "https://github.com/RithShelby/amadoTemplate",
  },
  {
    id: 4,
    img: require("../../assets/image/admin.png"),
    desc: "Admin Ecommerce using React js with Redux managment state,integration axios api.",
    date: "12/05/24",
    demo: "https://dev-portfolio-ten-mu.vercel.app/",
    github: "https://github.com/RithShelby/html-css-portfolio",
  },
  {
    id: 5,
    img: require("../../assets/image/admin.png"),
    desc: "Admin Ecommerce using React js with Redux managment state,integration axios api.",
    date: "12/05/24",
    demo: "https://dev-portfolio-ten-mu.vercel.app/",
    github: "https://github.com/RithShelby/html-css-portfolio",
  },
  {
    id: 6,
    img: require("../../assets/image/admin.png"),
    desc: "Admin Ecommerce using React js with Redux managment state,integration axios api.",
    date: "12/05/24",
    demo: "https://dev-portfolio-ten-mu.vercel.app/",
    github: "https://github.com/RithShelby/html-css-portfolio",
  },
];
const dataCourse = [
  {
    id: 1,
    headtitle: "HTML&CSS",
    title: "Mastering HTML & CSS with Net Ninja",
    imgCourse: "https://www.youtube.com/embed/hu-q2zYwEYs?si=Y2D8N9xUzrNwX6bD",
  },
  {
    id: 2,
    headtitle: "back-end",
    title: "Advanced Back-End Development Techniques",
    imgCourse:
      "https://www.youtube.com/embed/zb3Qk8SG5Ms?si=TZLOq8abXLH_IFwQ&amp",
  },
  {
    id: 3,
    headtitle: "Js Modern Concept",
    title: "Exploring Modern JavaScript Concepts",
    imgCourse:
      "https://www.youtube.com/embed/iWOYAxlnaww?si=z86zEaFkO8i4QS2I&amp",
  },
  {
    id: 4,
    headtitle: "React Js modern",
    title: "Mastering React.js Modern Development",
    imgCourse:
      "https://www.youtube.com/embed/j942wKiXFu8?si=Ma-KvVvtjIVdZlaQ&amp",
  },
];
const dataTeam = [
  {
    id: 1,
    image: require("../../assets/image/TeamSide1.jpg"),
    title: "hello from cambodia",
    desc: "hello guys",
    detail: "more",
  },
  {
    id: 1,
    image: require("../../assets/image/TeamSlide2.jpg"),
    title: "hello from cambodia",
    desc: "hello guys",
    detail: "more",
  },
  {
    id: 1,
    image: require("../../assets/image/teamKiloIT.jpg"),
    title: "hello from cambodia",
    desc: "hello guys",
    detail: "more",
  },
];
// Now the titles are updated and more descriptive for user interaction

export { dataSkill, dataProject, dataCourse, dataTeam };
