import { Language } from '@/types/language';
import { TECHNOLOGIES_LIST, Technology } from './technologies';

export type ProjectStatus = 'active' | 'in_progress' | 'archived';

export type Project = {
  id: string;
  title: string;
  description: Record<Language, string>;
  image: string;
  tags: string[];
  technologies: Technology[];
  visitUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
}

export const PROJECTS: Project[] = [
  {
    id: 'cinestartup',
    title: 'Cinestartup',
    description: {
      en: 'An innovative EdTech platform dedicated to audiovisual education, empowering students to learn content creation through interactive courses and AI-powered tools. Built with a modern tech stack to deliver seamless learning experiences and real-time content generation.',
      pt: 'Uma plataforma EdTech inovadora dedicada à educação audiovisual, capacitando estudantes a aprender criação de conteúdo através de cursos interativos e ferramentas com IA. Construída com uma stack tecnológica moderna para entregar experiências de aprendizado fluidas e geração de conteúdo em tempo real.',
    },
    image: '/projects/cinestartup.png',
    tags: ['Full-stack', 'EdTech', 'AI', 'Database'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[0],  // React.js
      TECHNOLOGIES_LIST.frontend[1],  // Next.js
      TECHNOLOGIES_LIST.frontend[3],  // TailwindCSS
      TECHNOLOGIES_LIST.frontend[10], // React Query
      TECHNOLOGIES_LIST.backend[0],   // Node.js
      TECHNOLOGIES_LIST.backend[2],   // NestJS
      TECHNOLOGIES_LIST.backend[4],   // PostgreSQL
      TECHNOLOGIES_LIST.backend[7],   // Prisma.js
      TECHNOLOGIES_LIST.backend[8],   // Redis
      TECHNOLOGIES_LIST.tools[1],     // Typescript
      TECHNOLOGIES_LIST.tools[6],     // OpenAI API
    ],
    visitUrl: 'https://cinestartup.com',
    status: 'active',
  },
  {
    id: 'unk-dev',
    title: 'Unk.dev',
    description: {
      en: 'A comprehensive software development agency platform offering end-to-end solutions. From ongoing support to sprint-driven execution, it provides dedicated development services tailored to client needs with modern technologies and best practices.',
      pt: 'Uma plataforma completa de agência de desenvolvimento de software oferecendo soluções end-to-end. Do suporte contínuo à execução orientada por sprints, fornece serviços de desenvolvimento dedicados adaptados às necessidades dos clientes com tecnologias modernas e melhores práticas.',
    },
    image: '/projects/unkdev.png',
    tags: ['Front-end', 'Landing page'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[1],  // Next.js
      TECHNOLOGIES_LIST.frontend[3],  // TailwindCSS
      TECHNOLOGIES_LIST.backend[0],   // Node.js
      TECHNOLOGIES_LIST.backend[4],   // PostgreSQL
      TECHNOLOGIES_LIST.tools[1],     // Typescript
      TECHNOLOGIES_LIST.tools[0],     // Docker
    ],
    status: 'active',
    visitUrl: 'https://unkdev.co'
  },
  {
    id: 'my-portfolio',
    title: 'My Portfolio',
    description: {
      en: 'This portfolio website showcases my journey as a developer, highlighting my skills and projects. Built with Next.js and styled using TailwindCSS, it offers a seamless and responsive user experience.',
      pt: 'Este site apresenta minha jornada como desenvolvedor, destacando minhas habilidades e projetos. Construído com Next.js e estilizado usando TailwindCSS, oferece uma experiência de usuário suave e responsiva.',
    },
    image: '/projects/portfolio.png',
    tags: ['Front-end'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[0],
      TECHNOLOGIES_LIST.frontend[1],
      TECHNOLOGIES_LIST.frontend[3],
    ],
    visitUrl: 'https://caiorosadev.com',
    githubUrl: 'https://github.com/caiorosa-dev/my-portfolio',
    status: 'active',
  },
  {
    id: 'indier',
    title: 'Indier',
    description: {
      en: 'A comprehensive SaaS platform designed to empower developers and indie hackers with a powerful suite of tools for rapid project development. Features AI-powered assistance, authentication, and real-time collaboration to transform ideas into production-ready applications.',
      pt: 'Uma plataforma SaaS abrangente projetada para capacitar desenvolvedores e indie hackers com um poderoso conjunto de ferramentas para desenvolvimento rápido de projetos. Apresenta assistência com IA, autenticação e colaboração em tempo real para transformar ideias em aplicações prontas para produção.',
    },
    image: '/projects/indier.png',
    tags: ['Full-stack', 'SaaS', 'AI', 'Database'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[0],  // React.js
      TECHNOLOGIES_LIST.frontend[1],  // Next.js
      TECHNOLOGIES_LIST.frontend[3],  // TailwindCSS
      TECHNOLOGIES_LIST.frontend[8],  // Framer Motion
      TECHNOLOGIES_LIST.backend[0],   // Node.js
      TECHNOLOGIES_LIST.backend[4],   // PostgreSQL
      TECHNOLOGIES_LIST.backend[7],   // Prisma.js
      TECHNOLOGIES_LIST.backend[8],   // Redis
      TECHNOLOGIES_LIST.tools[1],     // Typescript
      TECHNOLOGIES_LIST.tools[0],     // Docker
      TECHNOLOGIES_LIST.tools[6],     // OpenAI API
    ],
    status: 'archived',
  },
  {
    id: 'stay-aiware',
    title: 'Stay AIware',
    description: {
      en: 'Stay AIware is a news aggregator that allows you to stay up to date with the latest AI news and trends. Built with Next.js, TailwindCSS, Prisma, and PostgreSQL.',
      pt: 'Stay AIware é um agregador de notícias que permite você a ficar atualizado com as últimas notícias e tendências da IA. Construído com Next.js, TailwindCSS, Prisma e PostgreSQL.',
    },
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
    status: 'in_progress',
  },
  {
    id: 'stylo',
    title: 'Stylo',
    description: {
      en: 'Stylo is an innovative SaaS that integrates AI with WhatsApp to automate scheduling and sync calendars, providing an intuitive user experience.',
      pt: 'Stylo é um SaaS inovador que integra IA com WhatsApp para automatizar agendamentos e sincronizar calendários de barbearias, oferecendo uma experiência de usuário intuitiva.',
    },
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
    status: 'archived',
  },
  {
    id: 'echoo-solutions',
    title: 'Echoo Solutions',
    description: {
      en: 'A professional landing page for Echoo Solutions, showcasing their services and expertise. Built with Next.js and modern design principles to create an impactful online presence.',
      pt: 'Uma landing page profissional para a Echoo Solutions, destacando seus serviços e expertise. Construída com Next.js e princípios modernos de design para criar uma presença online impactante.',
    },
    image: '/projects/echoo.png',
    tags: ['Front-end', 'Landing Page'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[1],
      TECHNOLOGIES_LIST.frontend[3],
    ],
    status: 'archived',
  },
  {
    id: 'games-e-commerce',
    title: 'Games E-Commerce platform',
    description: {
      en: 'A full-featured e-commerce platform built with Next.js and Adonis.js, offering a seamless shopping experience with advanced features like real-time inventory management and secure payment processing.',
      pt: 'Uma plataforma de e-commerce completa construída com Next.js e Adonis.js, oferecendo uma experiência de compra perfeita com recursos avançados como gerenciamento de estoque em tempo real e processamento seguro de pagamentos.',
    },
    image: '/projects/e-commerce-platform.png',
    tags: ['Full-stack', 'Database', 'Design'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[0], // React.js
      TECHNOLOGIES_LIST.frontend[1], // Next.js
      TECHNOLOGIES_LIST.frontend[3], // TailwindCSS
      TECHNOLOGIES_LIST.backend[1],  // AdonisJS
      TECHNOLOGIES_LIST.backend[0],  // Node.js
      TECHNOLOGIES_LIST.backend[4],  // PostgreSQL
      TECHNOLOGIES_LIST.tools[1],    // Typescript
      TECHNOLOGIES_LIST.tools[4],    // Figma
    ],
    status: 'active',
  },
  {
    id: 'other-bowling-bar',
    title: 'Other Bowling Bar',
    description: {
      en: 'A modern landing page for a bowling bar, featuring an engaging design and smooth animations. Built with Next.js and TailwindCSS to showcase the venue\'s atmosphere and services.',
      pt: 'Uma landing page moderna para um bar de boliche, apresentando um design envolvente e animações suaves. Construída com Next.js e TailwindCSS para destacar a atmosfera e serviços do local.',
    },
    image: '/projects/otherbowlingbar.png',
    tags: ['Front-end', 'Landing Page', 'Design'],
    technologies: [
      TECHNOLOGIES_LIST.frontend[1],
      TECHNOLOGIES_LIST.frontend[3],
      TECHNOLOGIES_LIST.tools[4],    // Figma
    ],
    visitUrl: 'https://otherbowlingbar.com',
    status: 'active',
  },
]

