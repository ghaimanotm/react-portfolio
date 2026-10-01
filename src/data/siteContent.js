/**
 * siteContent.js — single source of truth for all personal content.
 *
 * ✏️  EDIT THIS FILE to personalise the site. Every page reads from here,
 * so you never have to hunt through components to change your details.
 * Replace each value marked "REPLACE" with your own information.
 */

/* ---------- Identity ---------- */
export const ownerProfile = {
  legalName: 'Your Full Legal Name', // REPLACE
  initials: 'YN', // REPLACE — shown inside the hexagon logo
  jobTitle: 'Software Developer',
  location: 'Waterloo, Ontario', // REPLACE if needed
  email: 'ghaimanotm@gmail.com',
  phone: '(555) 123-4567', // REPLACE
  githubUrl: 'https://github.com/your-username', // REPLACE
  linkedinUrl: 'https://www.linkedin.com/in/your-profile', // REPLACE
  headshotPath: '/images/headshot.svg', // REPLACE with /images/headshot.jpg
  resumePdfPath: '/resume.pdf', // REPLACE public/resume.pdf with your real resume
};

/* ---------- Home page ---------- */
export const homeContent = {
  welcomeHeading: 'Hi, welcome to my portfolio.',
  welcomeIntro:
    'I build clean, dependable web and software applications — and I enjoy turning messy problems into simple, usable tools.',
  missionStatement:
    'My mission is to write software that is accessible, maintainable and genuinely useful, and to keep learning with every project I ship.',
};

/* ---------- About page ---------- */
export const aboutParagraphs = [
  // REPLACE with 1–2 short paragraphs about yourself
  'I am a software development student with a focus on front-end engineering and full-stack web applications. I enjoy building interfaces that feel fast and intuitive, and backing them with well-structured, tested code.',
  'Outside of coursework I contribute to small open-source projects, experiment with new frameworks, and help classmates debug their code. I am currently looking for co-op and junior developer opportunities.',
];

export const coreSkills = ['JavaScript', 'React', 'Node.js', 'HTML & CSS', 'Python', 'SQL', 'Git & GitHub'];

/* ---------- Projects page (at least 3) ---------- */
export const projectList = [
  {
    id: 'task-tracker',
    title: 'Task Tracker App',
    imagePath: '/images/project-tasks.svg',
    techStack: ['React', 'Node.js', 'MongoDB'],
    role: 'Full-stack developer — designed the REST API and built the React front end.',
    outcome: 'Teammates used it to manage a semester-long group project; cut missed deadlines noticeably.',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    imagePath: '/images/project-weather.svg',
    techStack: ['JavaScript', 'REST API', 'CSS Grid'],
    role: 'Solo developer — integrated a public weather API and designed the responsive layout.',
    outcome: 'Shows 5-day forecasts for any city; earned a top grade in my web programming course.',
  },
  {
    id: 'bookstore-inventory',
    title: 'Bookstore Inventory System',
    imagePath: '/images/project-inventory.svg',
    techStack: ['Python', 'SQLite', 'Tkinter'],
    role: 'Team lead — planned the database schema and coordinated a team of three.',
    outcome: 'Delivered a desktop app that tracks stock and sales, replacing a manual spreadsheet.',
  },
];

/* ---------- Education page ---------- */
export const educationHistory = [
  // REPLACE with your real qualifications (newest first)
  {
    credential: 'Diploma, Software Engineering Technology',
    institution: 'Your College Name',
    startYear: '2024',
    endYear: '2027 (expected)',
    details: 'Coursework: Web Development, Data Structures, Databases, Software Testing.',
  },
  {
    credential: 'Certificate, Responsive Web Design',
    institution: 'freeCodeCamp',
    startYear: '2023',
    endYear: '2023',
    details: 'Completed 300 hours of HTML, CSS and accessibility curriculum.',
  },
  {
    credential: 'Ontario Secondary School Diploma (OSSD)',
    institution: 'Your High School Name',
    startYear: '2019',
    endYear: '2023',
    details: 'Honour roll; computer science and mathematics focus.',
  },
];

/* ---------- Services page ---------- */
export const serviceOfferings = [
  {
    id: 'web-dev',
    name: 'Web Development',
    imagePath: '/images/service-web.svg',
    summary: 'Responsive, accessible websites and single-page apps built with React.',
  },
  {
    id: 'general-programming',
    name: 'General Programming',
    imagePath: '/images/service-code.svg',
    summary: 'Scripts, automation and small tools in JavaScript or Python.',
  },
  {
    id: 'mobile-apps',
    name: 'Mobile-Friendly Apps',
    imagePath: '/images/service-mobile.svg',
    summary: 'Progressive web apps that feel native on phones and tablets.',
  },
  {
    id: 'databases',
    name: 'Database Design',
    imagePath: '/images/service-data.svg',
    summary: 'Clean relational schemas and REST APIs to power your app.',
  },
];
