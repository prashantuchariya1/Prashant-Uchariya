import rotaractImg from '../assets/rotaract.jpg'
import hackathon from '../assets/hackathon.webp'
import mapcon from '../assets/mapcon.jpg' 
import golang from '../assets/golang.jpg'
import microUrl from '../assets/microurl.png'
import dice from '../assets/dice.png'
import xclone from '../assets/xclone.png'
import betconx from '../assets/betconx.png'
import yoga from '../assets/yoga.png'
import animebuzz from '../assets/animebuzz.png'
import paper1 from '../assets/paper1.png'
import paper2 from '../assets/paper2.png'

export const AchievementsData = [
  {
    id: 1,
    title: "Head of Operations, Rotaract Club",
    imageUrl: rotaractImg,
    description:
      "Led operations for a non-profit organization, impacting thousands of underprivileged individuals.",
      descriptionLong:"Led and managed operations for a student-run non-profit organization, overseeing planning, execution, and coordination of large-scale social initiatives that positively impacted thousands of underprivileged individuals while strengthening leadership and organizational skills.",
    buttonList: [
      {
        id: 1,
        name: "Page",
        url: "https://www.linkedin.com/company/rotaract-club-abv-iiitm/",
      },
      
    ],
  },
  {
    id: 2,
    title: "Finalist in National Level Hackathon ",
    imageUrl: hackathon,
    description:
      "Hacksagon 2020 (IEEE Bombay Section) out of 10k registrations.",
    descriptionLong:"Selected as a finalist among 10,000+ registrations at Hacksagon 2020, a national-level hackathon organized by IEEE Bombay Section, demonstrating strong problem-solving skills, technical expertise, and the ability to innovate under competitive conditions.",
    buttonList: [
      // {
      //   id: 1,
      //   name: "Case Study",
      //   url: "https://example.com/ml-project",
      // },
      // {
      //   id: 2,
      //   name: "GitHub",
      //   url: "https://github.com/username/ml-project",
      // },
    ],
  },
  {
    id: 3,
    title: "Paper presented at MAPCON 2023",
    imageUrl: mapcon,
    description:
      "Presented a research paper at an international conference MAPCON 2023",
      descriptionLong:"Presented an IEEE conference paper at MAPCON 2023 on the design and simulation of a 3D CPW-fed sub-6 GHz MIMO antenna for 5G applications, developed and analyzed using ANSYS HFSS with a focus on performance optimization and isolation characteristics.",
    buttonList: [
      {
        id: 1,
        name: "Research Paper",
        url: "https://ieeexplore.ieee.org/document/10463976",
      },
      {
        id: 2,
        name: "Certificate",
        url: "https://drive.google.com/file/d/1aT1Yw45xmDDa4VbSM87jUW6ibkvhdtQG/view",
      },
    ],
  },
];


export const ProjectsData = [
  {
    id: 1,
    title: "Yoga-Flow",
    imageUrl: yoga,
    description:
      "Developed a fully responsive yoga learning platform using React.js, Node.js, MongoDB and JWT",
      descriptionLong:"Developed a responsive yoga learning platform using React.js with a scalable Node.js/Express backend and MongoDB. Implemented secure JWT-based authentication and a modular architecture to ensure maintainability, performance, and cross-device usability.",
    buttonList: [
      {
        id: 1,
        name: "Live App",
        url: "https://yoga-flow.vercel.app/",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/prashantuchariya1/YogaFlow",
      },
    ],
  },
  {
    id: 2,
    title: "Go Discord Bot ",
    imageUrl: golang,
    description:
      "Go Discord Bot with Gemini AI Integration using discordgo and Google’s generative-ai-go SDK",
      descriptionLong:"Developed a Go-based Discord bot using discordgo and Google’s generative-ai-go SDK, enabling intelligent real-time interactions powered by Gemini AI. Implemented multi-modal input processing (text, images, audio, video, PDFs) with content safety filtering, demonstrating strong skills in real-time systems, environment configuration, and seamless API integration.",
    buttonList: [
      {
        id: 1,
        name: "Github",
        url: "https://github.com/prashantuchariya1/Discord-Gemini-Bot",
      },
      // {
      //   id: 2,
      //   name: "GitHub",
      //   url: "https://github.com/username/portfolio",
      // },
    ],
  },
  {
    id: 3,
    title: "MicroURL",
    imageUrl: microUrl,
    description:
      "Developed a URL shortening web application using React.js, Node.js/Express, and MySQL",
      descriptionLong:"Built a full-stack URL shortening application using React.js, Node.js/Express, and MySQL, featuring RESTful APIs for URL creation and management. Implemented base-62 encoded 7-character short URLs with database-enforced uniqueness, collision handling, and a responsive frontend using Fetch API.",
    buttonList: [
      {
        id: 1,
        name: "Github",
        url: "https://github.com/prashantuchariya1/UrlShortner",
      },
      // {
      //   id: 2,
      //   name: "GitHub",
      //   url: "https://github.com/username/ml-project",
      // },
    ],
  },
  {
    id: 4,
    title: "Dice Game",
    imageUrl: dice,
    description:
      "Developed a trustworthy Dice game Platform implementing provably-fair mechanics using SHA-256",
      descriptionLong:"Developed a responsive web-based dice game using HTML5, CSS3, and JavaScript with interactive UI and robust game-state management. Built a Node.js/Express backend implementing provably-fair mechanics using cryptographic hashing (SHA-256 server seeds with client seed and nonce), exposed RESTful APIs for gameplay and balance management, and enabled secure frontend integration via CORS, demonstrating strong frontend–backend integration and API design skills.",
    buttonList: [
      {
        id: 1,
        name: "Github",
        url: "https://github.com/prashantuchariya1/Dice-Game",
      },
      // {
      //   id: 2,
      //   name: "GitHub",
      //   url: "https://github.com/username/fullstack-app",
      // },
    ],
  },
  {
    id: 5,
    title: "BETCONX",
    imageUrl: betconx,
    description:
      "Crypto exchange platform featuring a fully responsive front end",
      descriptionLong:"Crypto exchange platform featuring a fully responsive front end",
    buttonList: [
      {
        id: 1,
        name: "Live App",
        url: "https://betconx-ui.vercel.app/",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/prashantuchariya1/BETCONX-UI",
      },
    ],
  },
  
  {
    id: 6,
    title: "Anime-Buzz",
    imageUrl: animebuzz,
    description:
      "A platform for anime enthusiasts to discover and discuss their favorite anime shows and movies.",
      descriptionLong:"A Next.js platform for anime enthusiasts to discover and discuss their favorite anime shows and movies.",
    buttonList: [
      {
        id: 1,
        name: "Live App",
        url: "https://anime-buzz.vercel.app/",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/prashantuchariya1/Anime-Buzz",
      },
    ],
  },
  {
    id: 7,
    title: "X-Clone-UI",
    imageUrl: xclone,
    description:
      "Developed a fully responsive frontend X(twitter) clone using tailwind CSS",
      descriptionLong:"Developed a fully responsive X(twitter) clone",
    buttonList: [
      {
        id: 1,
        name: "Live App",
        url: "https://x-clone-ui.vercel.app/",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/prashantuchariya1/X-Clone-UI",
      },
    ],
  },
  

];


export const NotebookData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    imageUrl: "https://picsum.photos/400/300?random=1",
    description:
      "A responsive personal portfolio built using React and Tailwind CSS.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Live Demo",
        url: "https://example.com/portfolio",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/portfolio",
      },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Project",
    imageUrl: "https://picsum.photos/400/300?random=2",
    description:
      "A machine learning project for predicting outcomes using real-world data.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Case Study",
        url: "https://example.com/ml-project",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/ml-project",
      },
    ],
  },
  {
    id: 3,
    title: "Full Stack Web App",
    imageUrl: "https://picsum.photos/400/300?random=3",
    description:
      "A full stack web application built with React, Node.js, and MongoDB.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Live App",
        url: "https://example.com/fullstack",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/fullstack-app",
      },
    ],
  },
];


export const ArticlesData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    imageUrl: "https://picsum.photos/400/300?random=1",
    description:
      "A responsive personal portfolio built using React and Tailwind CSS.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Live Demo",
        url: "https://example.com/portfolio",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/portfolio",
      },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Project",
    imageUrl: "https://picsum.photos/400/300?random=2",
    description:
      "A machine learning project for predicting outcomes using real-world data.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Case Study",
        url: "https://example.com/ml-project",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/ml-project",
      },
    ],
  },
  {
    id: 3,
    title: "Full Stack Web App",
    imageUrl: "https://picsum.photos/400/300?random=3",
    description:
      "A full stack web application built with React, Node.js, and MongoDB.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Live App",
        url: "https://example.com/fullstack",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/fullstack-app",
      },
    ],
  },
];


export const YoutubeData = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    imageUrl: "https://picsum.photos/400/300?random=1",
    description:
      "A responsive personal portfolio built using React and Tailwind CSS.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Live Demo",
        url: "https://example.com/portfolio",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/portfolio",
      },
    ],
  },
  {
    id: 2,
    title: "Machine Learning Project",
    imageUrl: "https://picsum.photos/400/300?random=2",
    description:
      "A machine learning project for predicting outcomes using real-world data.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Case Study",
        url: "https://example.com/ml-project",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/ml-project",
      },
    ],
  },
  {
    id: 3,
    title: "Full Stack Web App",
    imageUrl: "https://picsum.photos/400/300?random=3",
    description:
      "A full stack web application built with React, Node.js, and MongoDB.",
      descriptionLong:"long description.",
    buttonList: [
      {
        id: 1,
        name: "Live App",
        url: "https://example.com/fullstack",
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/username/fullstack-app",
      },
    ],
  },
];

export const ResearchData = [
  {
    id: 1,
    title: "Machine learning assisted frequency reconfigurable concentric split ring resonator inspired antenna for sub-6 GHz 5G and IEEE 802.11ba/Be applications",
    imageUrl: paper1,
    description:
      "Wideband concentric split ring resonator frequency reconfigurable antenna using the machine learning approach for 5G (sub-6 GHz) and IEEE 802.11ba/Be applications.",
      descriptionLong:"Designed a wideband frequency-reconfigurable concentric split ring resonator antenna for sub-6 GHz 5G and IEEE 802.11ba/Be applications, achieving up to 99% tuning range and 96% radiation efficiency using PIN diodes. Applied machine learning–based optimization (RF, SVM, ANN, etc.), with Random Forest achieving ~99% accuracy, and validated performance through HFSS simulations and experimental measurements.",
    buttonList: [
      {
        id: 1,
        name: "Research Paper",
        url: "https://doi.org/10.1016/j.aeue.2025.155889",
      },
      // {
      //   id: 2,
      //   name: "GitHub",
      //   url: "https://doi.org/10.1016/j.aeue.2025.155889",
      // },
    ],
  },
  {
    id: 2,
    title: "Design and Analysis of High Isolation 3D CPW-fed MIMO Antenna for Ultra Wide Band applications",
    imageUrl: paper2,
    description:
      "Non-planer or 3D Co-planer waveg-uide (CPW) fed, four-port multi input multi output (MIMO) antenna for 2-20GHz ultra-wideband (UWB) applications",
      descriptionLong:"Designed and analyzed a four-port non-planar 3D CPW-fed MIMO antenna for 2–20 GHz ultra-wideband applications by arranging rectangular elements in a cubic configuration. Achieved high port isolation without decoupling structures and validated strong diversity performance (ECC, DG, MEG, TARC), making the design suitable for WLAN, sub-6 GHz, 5G mid-band, radar, and satellite applications.",
    buttonList: [
      {
        id: 1,
        name: "Certificate",
        url: "https://drive.google.com/file/d/1aT1Yw45xmDDa4VbSM87jUW6ibkvhdtQG/view",
      },
      {
        id: 2,
        name: "Research Paper",
        url: "https://doi.org/10.1109/MAPCON58678.2023.10463976",
      },
    ],
  },

];




