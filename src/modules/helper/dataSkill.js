import {SlLocationPin} from "react-icons/sl";
import {MdOutlineMailOutline, MdSpaceDashboard} from "react-icons/md";
import {PiTelegramLogoLight} from "react-icons/pi";
import {GrHomeRounded} from "react-icons/gr";
import React from "react";
import {LuFocus} from "react-icons/lu";
import {IoMdPhotos} from "react-icons/io";
import {FiUser} from "react-icons/fi";
import {BsPersonRaisedHand} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {CiShare2} from "react-icons/ci";

const dataSkill = [
  {
    id: 1,
    name: "HTML",
    type: "SkillSet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdnKVl86zD9Cof-ZLBwCm0DbvhnehIosXEUBtO6FUJg&s",
    detail: "HTML (HyperText Markup Language) is the foundational language for structuring web pages. It helps define elements like headings, paragraphs, links, and images.",
  },
  {
    id: 2,
    name: "CSS",
    type: "SkillSet",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    detail: "CSS (Cascading Style Sheets) is used to style HTML elements. It allows for control over layout, colors, fonts, and responsive design.",
  },
  {
    id: 3,
    name: "JavaScript",
    type: "SkillSet",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    detail: "JavaScript is a programming language for making web pages interactive. It enables functions like animations, form validation, and content updates.",
  },
  {
    id: 4,
    name: "Bootstrap",
    type: "SkillSet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzydXo9YYB2dFu_6O_b8SsY4u2ZTVOiG9OwT798zyGxQ&s",
    detail: "Bootstrap is a front-end framework for creating responsive and mobile-first websites. It offers a collection of CSS and JavaScript components.",
  },
  {
    id: 5,
    name: "React.js",
    type: "SkillSet",
    img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    detail: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage state effectively.",
  },
  {
    id: 6,
    name: "Redux",
    type: "SkillSet",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTelECZ5uA0rEvlWtTCGEnBwrc_QtF4ZjJRtH5WaOjg&s",
    detail: "Redux is a state management library often used with React. It centralizes application state to make debugging and data handling simpler.",
  },
  {
    id: 7,
    name: "VS Code",
    type: "Tools",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
    detail: "Visual Studio Code is a free code editor developed by Microsoft. It's highly extensible and supports many programming languages.",
  },
  {
    id: 8,
    name: "GitLab & GitHub",
    type: "Tools",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
    detail: "GitLab and GitHub are platforms for version control and collaboration. They help developers track changes and work together on code.",
  },
  {
    id: 9,
    name: "Trello",
    type: "Tools",
    img: "https://cdn-icons-png.flaticon.com/256/2111/2111656.png",
    detail: "Trello is a project management tool using boards, lists, and cards. It helps teams organize tasks and track project progress visually.",
  },
  {
    id: 10,
    name: "Firebase",
    type: "Tools",
    img: "https://avatars.githubusercontent.com/u/1335026?s=200&v=4",
    detail: "Firebase is a platform by Google for building web and mobile applications. It offers backend services like authentication, database, and hosting.",
  },
  {
    id: 11,
    name: "ClickUp",
    type: "Tools",
    img: "https://seeklogo.com/images/C/clickup-symbol-logo-BB24230BBB-seeklogo.com.png",
    detail: "ClickUp is a productivity tool for managing tasks, projects, and workflows. It provides features for time tracking, document management, and goal setting.",
  },
  {
    id: 12,
    name: "IntelliJ IDEA",
    type: "Tools",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHQE89O5n7JuJZLQE3MCBysxZx3Y-JMiSGQ&s",
    detail: "IntelliJ IDEA is an integrated development environment (IDE) by JetBrains. It's known for its advanced code assistance and developer-friendly tools.",
  },
];

const dataProject = [
  {
    id: 1,
    img: require("../../assets/image/1.png"),
    title : "First Portfolio's Team",
    desc: "Build a Responsive Portfolio website using html,css and boostrap.",
    date: "12/11/23",
    demo: "https://dev-portfolio-ten-mu.vercel.app/",
    github: "https://github.com/RithShelby/html-css-portfolio",
  },
  {
    id: 2,
    img: require("../../assets/image/2.png"),
    title : "HairCut Template ",
    desc: "Build a Template haircut website using html,css,boostrap and js.",
    date: "30/12/23",
    demo: "https://haircut-template.vercel.app/",
    github: "https://github.com/RithShelby/haircutTemplate",
  },
  {
    id: 3,
    img: require("../../assets/image/blog (1).png"),
    title : "Simple Blog Website",
    desc: "HTML & Boostrap make it easy . ",
    date: "01/01/24",
    demo: "https://blogmeblog.vercel.app/",
    github: "https://github.com/RithShelby/BlogWebsite",
  },
  {
    id: 4,
    img: require("../../assets/image/3.png"),
    title : "Amado Ecommerce Shop Template",
    desc: "Amado Clone with Side bar , using react js with boostrap.",
    date: "01/01/24",
    demo: "https://amado-template.vercel.app/home",
    github: "https://github.com/RithShelby/amadoTemplate",
  },
  {
    id: 5,
    img: require("../../assets/image/booking1.png"),
    title: "Admin Booking Movie",
    desc: "Admin Booking Movie Managements using ReactJs & Firebase",
    date: "12/05/24",
    // demo: "",
    github: "https://github.com/RithShelby/MovieBooking",
  },
  {
    id: 6,
    img: require("../../assets/image/5.png"),
    title: "Admin Ecommerce",
    desc: "Admin Ecommerce using React js with Redux managment state,integration axios api.",
    date: "12/05/24",
    github: "https://github.com/RithShelby/AdminEcommerce",
  },
  {
    id: 7,
    img: require("../../assets/image/MovieApp.png"),
    title : "Movie Booing App",
    desc: "Movie Booking is released.",
    date: "01/01/24",
    demo: "https://cinetime.vercel.app/",
  },
  {
    id: 8,
    img: require("../../assets/image/campus.png"),
    title : "CampusConnect",
    desc: "Community website for college students . ",
    date: "01/01/24",
    demo: "https://campusconnect-kh.vercel.app/",
  },
];
const dataCourse = [
  {
    id: 1,
    headtitle: "HTML & CSS",
    title: "In-Depth HTML & CSS: A Complete Guide with Net Ninja",
    imgCourse: "https://www.youtube.com/embed/hu-q2zYwEYs?si=Y2D8N9xUzrNwX6bD",
  },
  {
    id: 2,
    headtitle: "Bootstrap",
    title: "Mastering Bootstrap for Responsive Web Design",
    imgCourse: "https://www.youtube.com/embed/O_9u1P5YjVc?si=1u3UCspoydxEOnEt",
  },
  {
    id: 3,
    headtitle: "JavaScript",
    title: "Advanced JavaScript: Key Concepts & Best Practices",
    imgCourse: "https://www.youtube.com/embed/iWOYAxlnaww?si=z86zEaFkO8i4QS2I",
  },
  {
    id: 4,
    headtitle: "ReactJs",
    title: "React.js for the Modern Web Developer",
    imgCourse: "https://www.youtube.com/embed/j942wKiXFu8?si=Ma-KvVvtjIVdZlaQ",
  },
  {
    id: 5,
    headtitle: "Firebase",
    title: "Firebase Fundamentals for Web Applications",
    imgCourse: "https://www.youtube.com/embed/2hR-uWjBAgw?si=9Mc_1Do2GZ8sX15t",
  },
  {
    id: 6,
    headtitle: "EmailJs",
    title: "Integrating Email.js with React.js: A Hands-On Guide",
    imgCourse: "https://www.youtube.com/embed/Lz8yx-zn-O4?si=bhpLNhUmSmwkIo8i",
  },
];

const dataTeam = [
  {
    id: 1,
    image: require("../../assets/image/TeamSlide2.jpg"),
    title: "KiloIT Team Collaborating",
    desc: "That was my team practice on making basic website using html,css and js.",
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
    image: require("../../assets/image/TeamSlide2.jpg"),
    title: "KiloIT Team Meeting",
    desc: "A KiloIT team meeting in progress, where members discuss and share ideas. The image captures the collaborative spirit and active engagement of the team in a structured yet open environment.",
    detail: "more",
  },
  {
    id: 4,
    image: require("../../assets/image/TeamSlide2.jpg"),
    title: "KiloIT Team Meeting",
    desc: "A KiloIT team meeting in progress, where members discuss and share ideas. The image captures the collaborative spirit and active engagement of the team in a structured yet open environment.",
    detail: "more",
  },

  {
    id: 5,
    image: require("../../assets/image/TeamSlide2.jpg"),
    title: "KiloIT Team Meeting",
    desc: "A KiloIT team meeting in progress, where members discuss and share ideas. The image captures the collaborative spirit and active engagement of the team in a structured yet open environment.",
    detail: "more",
  },

  {
    id: 6,
    image: require("../../assets/image/TeamSlide2.jpg"),
    title: "KiloIT Team Meeting",
    desc: "A KiloIT team meeting in progress, where members discuss and share ideas. The image captures the collaborative spirit and active engagement of the team in a structured yet open environment.",
    detail: "more",
  },
];
const dataContact = [
  {
    id: 1,
    title: "Address",
    desc: "Phnom Penh City",
    icon: <SlLocationPin />,
  },
  {
    id: 2,
    title: "Email",
    desc: "chhunnatharith@gmail.com",
    icon: <MdOutlineMailOutline />,
  },
  {
    id: 3,
    title: "Telegram",
    desc: "017 225 628",
    icon: <PiTelegramLogoLight />,
    link: "https://t.me/ChhunNatharith", // Add actual Telegram link here
  },
  {
    id: 4,
    title: "Git Hub",
    desc: "https://github.com/RithShelby",
    icon: <FaGithub />,
    link: "https://github.com/RithShelby", // Add actual GitHub link here
  },
];
const mobileData = [
  {
    id : 1,
    title : "Home",
    path : "/",
    icon :  <GrHomeRounded  />
  },
  {
    id : 2,
    path : "/about_me",
    title : "About",
    icon :  <BsPersonRaisedHand />
  },
  {
    id : 3,
    path : "/project",
    title : "Project",
    icon :   <MdSpaceDashboard />
  },
  {
    id : 4,
    title : "Blog",
    path : "/blog",
    icon :  <CiShare2 />
  },
  {
    id : 5,
    path : "team-photo",
    title : "Team Photo",
    icon :   <IoMdPhotos  />
  },
  {
    id : 6,
    title : "Contact",
    path : "/contact-me",
    icon :    <FiUser />
  },
]
// Now the titles are updated and more descriptive for user interaction

export { dataSkill, dataProject, dataCourse, dataTeam , dataContact,mobileData };
