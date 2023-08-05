import {
  mobile,
  zrow,
  pro,
  rcil,
  backend,
  front,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  crypto,
  jobit,
  threejs,
  bio,
} from "../assets";




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: front,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Prolincur Technologies",
    icon: pro,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining 3D web applications using Three.js and React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Zrow Solution",
    icon: zrow,
    iconBg: "#E6DEDD",
    date: "March 2023 - May 2023",
    points: [
      "Worked on live Project that is Growth91 which is basically a financial category based website.",
      "Deal data gets from a client in the excel sheet form then we created User Interface (UI) based on data provided by the client. Also Develop cross-browser compatible components, features and UI for web based apps.",
      "Write, audit and improves test coverage Profile and improve front-end performance and security, debug and fix UI and functional related issues",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Newton School",
    icon: backend,
    iconBg: "#383E56",
    date: "Apr 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Network Engineer",
    company_name: "RailTel Corporation Of India",
    icon: rcil,
    iconBg: "#383E56",
    date: "Apr 2021 - Apr 2022",
    points: [
      "Execution & maintenance of OFC work / Maintenance of Battery Bank/Switch ring upgradation/installation of network elements, routers, Switches/ Configuration of Switches, routers, STM etc.",
      "Troubleshooting of MPLS network, station Wi-fi, network devices and other operational issues.",
      "Work on IP based Video Surveillance System project of Nagpur Division Central Railway and South-East Central Railway.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CryptoMedia",
    description:
      "A React-based Crypto Currencies tracker, with ranking and coin information. Designed using Material UI. Libraries used: Context API, react-router, Chart.js The some key features of CryptoMedia is :- 1) Web-Based 2) Graphs and Charts for easy understanding 3) Real-time data",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Chart JS",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://crypto-tracker-12.vercel.app/",
  },
  {
    name: "Digital Street App",
    description:
      "The website is based on getting a movies and TV-series with their name, rating and release date. Search option provide you separate list of movies and TV-series and also pagination provide better experience to user.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap, Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://gentle-duckanoo-2dcff8.netlify.app/",
  },
  {
    name: "BioVegan-E-commerce website",
    description:
      "The primary goal of an e-commerce site is to sell goods and services online. This project deals with developing an E-commerce website for selling organic vegetables and fruits.It provides the user with a catalog of different category available for purchase in the store.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bio,
    source_code_link: "https://spectacular-eclair-436bdc.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
