export const experiences = [
  {
    company: "Zelity",
    position: "Fullstack Developer",
    date: "Feb 2025 - Present",
    current: true,
    bullets: [
      "Zelity (internal product): building an AI-powered growth platform for Instagram-based businesses that ingests a merchant's account and product catalog to recommend post timing, customer replies, and AI-generated captions.",
      "Engineered an automated website generator that turns data scraped from a merchant's Instagram storefront into a fully branded e-commerce site with zero manual configuration.",
      "Diagnosed and fixed a critical defect in Medusa's (open-source headless commerce) product creation flow, restoring catalog visibility and unblocking the entire inventory management module.",
      "Own the end-to-end mobile release pipeline — building, signing, and publishing Android and iOS production builds to the Google Play Store and Apple App Store.",
      "Client — OptimalTech (Database Developer): designed stored procedures and table schemas, profiled and benchmarked queries to remove bottlenecks, and built an ETL pipeline with structured action logs.",
      "Client — Dissau (Fullstack Developer): continuing the academic credentials platform — React / React Native, C#/.NET, PostgreSQL.",
    ],
    stack: ["React Native", "Next.js", "React", "TypeScript", "Tailwind", "Zustand", "Node.js", "Docker"],
  },
  {
    company: "Diptravel",
    position: "Fullstack Developer",
    date: "Feb 2024 - Present",
    current: true,
    bullets: [
      "Built a hotel reservation web app in React.js/TypeScript, unifying multiple third-party provider APIs into a single booking platform.",
      "Integrated Google Maps into the hotels module to render property locations and context inside the booking flow.",
      "Developed NestJS/TypeScript backend services exposing GraphQL (via Apollo Client) for a wide range of business operations.",
      "Used the AWS SDK and Amazon S3 for cloud document management — banners, links, and agent assets.",
      "Set up CI/CD pipelines for frontend and backend, automating testing, build, and deployment.",
      "Delivered a Next.js admin panel to manage reservations, park tickets, client support, banners, links, and agents from one interface.",
      "Deployed and maintained the commercial site, admin panel, and backend API as independently scaled services on Render.",
    ],
    stack: ["React", "TypeScript", "NestJS", "GraphQL", "Apollo Client", "AWS S3", "Render"],
  },
  {
    company: "Dissau",
    position: "Fullstack Developer",
    date: "Aug 2023 - Jul 2024",
    bullets: [
      "Built a React.js (Material UI + Tailwind) web app letting Colombian universities securely store student data, with third parties able to verify academic achievements.",
      "Built a companion React Native app covering accounts, access permissions, and academic credits on the go.",
      "Developed and deployed C#/.NET backend services exposing full-CRUD REST APIs for both web and mobile clients.",
      "Administered the PostgreSQL database and led a team of developers to deliver features on schedule.",
    ],
    stack: ["React", "React Native", "C#/.NET", "PostgreSQL"],
  },
  {
    company: "Inner Consulting",
    position: "Front-end Developer",
    date: "Jul 2024 - Jul 2025",
    bullets: [
      "Built a Next.js/TypeScript web app for the Caja de Seguro Social de Panama, supporting the planning, control, and administration of the country's social security operations.",
      "Engineered highly configurable custom components from scratch with minimal external library reliance, reducing third-party dependencies and improving application security.",
    ],
    stack: ["Next.js", "TypeScript"],
  },
  {
    company: "AlleyCorp Sur",
    position: "Front-end Developer",
    date: "Jun 2024 - Feb 2025",
    bullets: [
      "Built a responsive React/TypeScript web app for content creators — custom branding, course hosting, community spaces, live chat, event management, and a revenue analytics dashboard.",
      "Integrated Stripe payments and shipped the platform to production to enable full content monetization.",
      "Built an iOS dating app in React Native for creating, browsing, accepting, and declining date proposals.",
      "Translated detailed Figma designs into pixel-perfect code, maintaining strict fidelity to spec.",
    ],
    stack: ["React", "TypeScript", "React Native", "Stripe"],
  },
  {
    company: "WiCup",
    position: "Front-end Developer",
    date: "May 2024 - Dec 2024",
    bullets: [
      "Built a full-featured Angular 14+ web app for online gaming tournaments — user registration, authentication, and end-to-end competition management.",
      "Implemented real-time match tracking with live score updates, tournament progression views, responsive layouts, and optimized change detection.",
    ],
    stack: ["Angular"],
  },
  {
    company: "Universidad ICESI",
    position: "Backend Developer",
    date: "Jan 2022 - Jun 2022",
    bullets: [
      "Built a student retention monitoring system with Spring Boot — multiple microservices with RESTful APIs analyzing academic performance, attendance, and early disengagement signals.",
      "Reached 85%+ code coverage with JUnit, Mockito, and Spring Boot Test, delivering reliable notification services for proactive academic intervention.",
      "Worked in an Agile Scrum environment with 2-week sprints, using Jira for task management and progress tracking.",
    ],
    stack: ["Spring Boot", "Java", "JUnit"],
  },
  {
    company: "Entrepreneurship",
    position: "Private Instructor",
    date: "Nov 2021 - Nov 2023",
    bullets: [
      "Taught Object-Oriented Programming fundamentals in JavaScript to Interactive Media Design students, later expanding the curriculum to include TypeScript.",
    ],
    stack: ["JavaScript", "TypeScript"],
  },
];

export const projects = [
  {
    name: "SQL Visualizer",
    description:
      "Parses SQL/T-SQL scripts — stored procedures, triggers, transactions — and renders them as interactive flow diagrams, surfacing parameters, control flow, and error handling at a glance.",
    image: "sql-visualizer",
    demo: "https://samsattas.github.io/sql-visualizer/",
    repo: "https://github.com/samsattas/sql-visualizer",
    tags: ["React", "TypeScript", "SQL Parsing"],
  },
  {
    name: "Charakas",
    description:
      "Party-game web app with three modes — Mimicas, Charadas, Encadenados — for playing charades-style games with friends directly in the browser, no install required.",
    image: "charakas",
    demo: "https://samsattas.github.io/charakas/",
    repo: "https://github.com/samsattas/charakas",
    tags: ["React", "Game UI"],
  },
  {
    name: "UML Class Designer",
    description:
      "Drag-and-drop UML class diagram editor — add classes, attributes, and methods, define associations, and export or generate code directly from the canvas.",
    image: "uml-class-designer",
    demo: "https://samsattas.github.io/uml-class-designer/",
    repo: "https://github.com/samsattas/uml-class-designer",
    tags: ["React", "Canvas", "Code Generation"],
  },
];

export const apps = [
  {
    name: "Diptravel — Agents Portal",
    context: "Diptravel",
    description:
      "Agent-facing booking portal connecting travel agents with 100+ global suppliers, hotels, parks, and attractions — part of the Diptravel platform I build end to end.",
    image: "diptravel-agents",
    link: "https://agents.diptravel.com/",
  },
  {
    name: "Laila — First Date App",
    context: "AlleyCorp Sur",
    description:
      "iOS dating app built in React Native where users share a planned date instead of swiping — others apply, and the host picks who joins. Live on the App Store.",
    image: "laila",
    link: "https://apps.apple.com/co/app/laila-first-date-app/id6670228423",
  },
  {
    name: "Teachly AI",
    description:
      "Creator operating system — funnels, courses, and storefronts to build, launch, and scale a creator business from a single platform.",
    image: "teachly",
    link: "https://www.teachly.ai/",
  },
  {
    name: "DigiSignCol",
    description:
      "Platform that turns verified academic achievements into professional identity and employability data for higher-education institutions in Colombia.",
    image: "digisigncol",
    link: "https://digisigncol.com/",
  },
  {
    name: "Nocta AI",
    description:
      "AI agent that turns written or spoken instructions into executed tasks, meeting notes, and reports, delivered through chat or WhatsApp.",
    image: "nocta",
    link: "https://www.nocta.ai/",
  },
  {
    name: "EMCALI",
    description:
      "Official digital platform for EMCALI — Cali's public energy, water, and telecom utility — serving account management and bill payment for the city.",
    image: "emcali",
    link: "https://www.emcali.com.co/",
  },
];

export const technicalSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React Native",
  "Node.js",
  "NestJS",
  "Spring Boot",
  "Java",
  "C#",
  ".NET",
  "REST APIs",
  "GraphQL",
  "SQL",
  "PostgreSQL",
  "Stored Procedures",
  "ETL",
  "Tailwind",
  "SASS",
  "CSS",
  "HTML",
  "Zustand",
  "Docker",
  "AWS S3",
  "AWS SDK",
  "CI/CD",
  "Render",
  "Medusa",
  "Google Maps",
  "Agile",
];

export const aiTools = [
  "Claude Code",
  "Claude Design",
  "Google Stitch",
  "Google AI Studio",
  "Antigravity",
];

export const softSkills = [
  "Creativity",
  "Analytical thinking",
  "Adaptability",
  "Resourcefulness",
  "Teamwork",
  "Critical thinking",
];

export const languages = ["Spanish: Native", "English: C1"];

export const interests = ["Origami", "Specialty coffee", "Recreational coding"];

export const education = [
  {
    title: "B.S. in Software Engineering",
    institution: "ICESI University",
    location: "Cali, Colombia",
    detail: "Dean's List — Semesters I, V, VI, VIII",
  },
  {
    title: "React - The Complete Guide (incl. Next.js, Redux)",
    institution: "Udemy — Maximilian Schwarzmüller",
    location: "Online",
    detail: "Feb 2026 · 71.5 hours",
  },
  {
    title: "Study Abroad",
    institution: "Stratford High School",
    location: "Goose Creek, SC, United States",
    detail: "Aug 2017 - Jun 2018",
  },
];
