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
    image: require("../../assets/image/teamkilo1.JPG"),
    title: "KiloIT Team Collaborating",
    desc: "Members of the KiloIT team hard at work, collaborating on software projects in a modern office environment. Their dedication and teamwork are evident as they focus on their laptops.",
    detail: "more",
  },
  {
    id: 2,
    image: require("../../assets/image/TeamSlide2.jpg"),
    title: "KiloIT Office Motto",
    desc: "The KiloIT office proudly displays its motto: 'Work Less, Worry Less, Succeed More, Enjoy More.' This inspiring message reflects the company's philosophy and commitment to a balanced work-life approach.",
    detail: "more",
  },
  {
    id: 3,
    image: require("../../assets/image/teamkilo3.jpg"),
    title: "KiloIT Team Meeting",
    desc: "A KiloIT team meeting in progress, where members discuss and share ideas. The image captures the collaborative spirit and active engagement of the team in a structured yet open environment.",
    detail: "more",
  },
];
const dataPost = [
  {
    id: 1,
    title:
      "KiloIT, an innovative IT company, celebrated the end of its first season with a group photo of its team. Composed of college students selected for their software skills, the team spent the season learning and collaborating on projects. This photo captures their camaraderie and the valuable experiences they gained, highlighting KiloIT's commitment to empowering the next generation of tech talent.",
    img: require("../../assets/image/TeamSide1.jpg"),
  },
  {
    id: 2,
    title:
      "KiloIT, an innovative IT company, celebrated the end of its first season with a group photo of its team. Composed of college students selected for their software skills, the team spent the season learning and collaborating on projects. This photo captures their camaraderie and the valuable experiences they gained, highlighting KiloIT's commitment to empowering the next generation of tech talent.",
    img: require("../../assets/image/TeamSide1.jpg"),
  },
  {
    id: 3,
    title:
      "KiloIT, an innovative IT company, celebrated the end of its first season with a group photo of its team. Composed of college students selected for their software skills, the team spent the season learning and collaborating on projects. This photo captures their camaraderie and the valuable experiences they gained, highlighting KiloIT's commitment to empowering the next generation of tech talent.",
    img: require("../../assets/image/TeamSide1.jpg"),
  },
];

// Now the titles are updated and more descriptive for user interaction

export { dataSkill, dataProject, dataCourse, dataTeam, dataPost };
