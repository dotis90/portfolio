const heroInfo = {
  firstName: "Daniel",
  lastName: "Otis",
  devDesc: " Programmer | Web Developer | Game Developer | Teacher ",
  icons: [
    {
      id: 0,
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/daniel-otis-542043113/",
      style: "socialicons",
    },
    {
      id: 1,
      image: "fa-google",
      url: "mailto:dotis90@gmail.com",
      style: "socialicons",
    },
    {
      id: 2,
      image: "fa-github",
      url: "https://github.com/dotis90",
      style: "socialicons",
    },
    {
      id: 3,
      image: "fa-twitter",
      url: "https://www.twitter.com/Dotis90/",
      style: "socialicons",
    },
    {
      id: 4,
      image: "fa-facebook",
      url: "https://www.facebook.com/dan.otis.10420",
      style: "socialicons",
    },
  ],
};

const skills = [
  {
    title: "Full Stack Development",
    image: "skillImage.svg",
    descriptions: [
      "✔️ Build modern and attractive user interfaces for mobile and web applications",
      "✔️ Design fast and powerful back-end applications, web servers, and databases",
      "✔️ Consistently up to date with the newest and best tools for development",
      "✔️ Experience with cloud platforms-- Microsoft Azure Fundamentals Certified",
    ],
    softwareSkills: [
      {
        skillName: "HTML5",
        fontAwesomeClassname: "simple-icons:html5",
        style: {
          color: "#E34F26",
        },
      },
      {
        skillName: "CSS3",
        fontAwesomeClassname: "fa-css3",
        style: {
          color: "#1572B6",
        },
      },
      {
        skillName: "Sass",
        fontAwesomeClassname: "simple-icons:sass",
        style: {
          color: "#CC6699",
        },
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "simple-icons:javascript",
        style: {
          backgroundColor: "#000000",
          color: "#F7DF1E",
        },
      },
      {
        skillName: "ReactJS",
        fontAwesomeClassname: "simple-icons:react",
        style: {
          color: "#61DAFB",
        },
      },
      {
        skillName: "NodeJS",
        fontAwesomeClassname: "simple-icons:node-dot-js",
        style: {
          color: "#339933",
        },
      },
      {
        skillName: "NPM",
        fontAwesomeClassname: "simple-icons:npm",
        style: {
          color: "#CB3837",
        },
      },
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "simple-icons:mongodb",
        style: {
          color: "#47A248",
        },
      },
      {
        skillName: "Gatsby",
        fontAwesomeClassname: "simple-icons:gatsby",
        style: {
          color: "#663399",
        },
      },
    ],
  },
];

const projects = [
  {
    title: "AI Image Generator",
    info:
      "Features a React front-end and a Node.js/Express back-end, and integration with Open AI and Cloudinary APIs. Create a prompt, generate an image, share it with other users, and download your favorites.",
    url: "https://chimerical-rolypoly-3d8659.netlify.app/",
    repo: "https://github.com/dotis90/ai-image-generator",
    img: "ai-image-generator.png",
  },
  {
    title: "Pirate Panic",
    info:
      "A 2D Platformer made entirely in python. Avoid hazards, jump on enemies, collect coins, and make it through all six levels.",
    url: "https://dotis.itch.io/pirate-panic",
    repo: "https://github.com/dotis90/pirate-panic",
    img: "pirate-panic.png",
  },
  {
    title: "Personal Blog",
    info:
      "Made with Gatsby.js and styled with Sass. Create new articles with ease using Markdown. Features incredibly fast client-side dynamic page rendering.",
    url: "https://nifty-panini-992868.netlify.app/",
    repo: "https://github.com/dotis90/blog",
    img: "blog.png",
  }
];

const contact = {
  heading: "Get In Touch.",
  message: [
    "Need a website? Have a question? Want to work together?",
    " Let’s connect. ",
    "I am actively seeking new opportunities and partnerships.",
  ],
  icons: [
    {
      id: 0,
      image: "fa-github",
      url: "https://github.com/dotis90",
      style: "socialicons",
    },
    {
      id: 1,
      image: "fa-facebook",
      url: "https://www.facebook.com/dan.otis.10420",
      style: "socialicons",
    },
    {
      id: 2,
      image: "fa-google",
      url: "mailto:dotis90@gmail.com",
      style: "socialicons",
    },
    {
      id: 3,
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/daniel-otis-542043113/",
      style: "socialicons",
    },
    {
      id: 4,
      image: "fa-twitter",
      url: "https://www.twitter.com/Dotis90/",
      style: "socialicons",
    },
  ],
};

const projectRepo = "https://github.com/dotis90/portfolio";

export { heroInfo, skills, projects, contact, projectRepo };
