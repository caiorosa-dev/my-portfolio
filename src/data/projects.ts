import { TECHNOLOGIES_LIST, Technology } from './technologies';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technologies: Technology[];
  visitUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    description: 'This portfolio website showcases my journey as a developer, highlighting my skills and projects. Built with Next.js and styled using TailwindCSS, it offers a seamless and responsive user experience.',
    image: '/projects/portfolio.png',
    tags: ['Front-end'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[0],
      TECHNOLOGIES_LIST.frontend[1],
      TECHNOLOGIES_LIST.frontend[3],
    ],
    visitUrl: 'https://caiorosadev.com',
    githubUrl: 'https://github.com/caiorosa-dev/my-portfolio',
  },
  {
    id: 'stay-aiware',
    title: 'Stay AIware',
    description: 'Stay AIware is a news aggregator that allows you to stay up to date with the latest AI news and trends. Built with Next.js, TailwindCSS, Prisma, and PostgreSQL.',
    image: '/projects/stayaiware.png',
    tags: ['Full-stack', 'Database', 'AI'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[1],
      TECHNOLOGIES_LIST.frontend[3],
      TECHNOLOGIES_LIST.backend[7],
      TECHNOLOGIES_LIST.backend[0],
      TECHNOLOGIES_LIST.backend[4],
    ],
    visitUrl: 'https://stayaiware.com',
  },
  {
    id: 'stylo',
    title: 'Stylo',
    description: 'Stylo is an innovative SaaS that integrates AI with WhatsApp to automate scheduling and sync calendars, providing an intuitive user experience.',
    image: '/projects/stylo.png',
    tags: ['Full-stack', 'Database', 'AI', 'WhatsApp'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[1],
      TECHNOLOGIES_LIST.frontend[3],
      TECHNOLOGIES_LIST.backend[7],
      TECHNOLOGIES_LIST.backend[0],
      TECHNOLOGIES_LIST.backend[2],
      TECHNOLOGIES_LIST.backend[4],
    ],
    visitUrl: 'https://styloapp.com.br',
  }
]

