export type Technology = {
  label: string;
  icon: string;
  color: string;
  invertIconColor?: boolean;
}

type TechnologyGroup = {
  label: string;
  items: Technology[];
}

export const TECHNOLOGIES_LIST: Record<string, Technology[]> = {
  backend: [
    {
      label: 'Node.js',
      icon: '/logos/node-js-icon.svg',
      color: '#78bd66',
    },
    {
      label: 'AdonisJS',
      icon: '/logos/adonis-js-icon.svg',
      color: '#a7a7a7',
      invertIconColor: true,
    },
    {
      label: 'NestJS',
      icon: '/logos/nest-js-icon.svg',
      color: '#e0234e',
    },
    {
      label: 'Express',
      icon: '/logos/express-js-icon.svg',
      color: '#a7a7a7',
      invertIconColor: true,
    },
    {
      label: 'PostgreSQL',
      icon: '/logos/postgresql-icon.svg',
      color: '#336791',
    },
    {
      label: 'MySQL',
      icon: '/logos/mysql-icon.svg',
      color: '#00758f',
    },
    {
      label: 'MongoDB',
      icon: '/logos/mongodb-icon.svg',
      color: '#47A248',
    },
    {
      label: 'Prisma.js',
      icon: '/logos/prisma-icon.svg',
      color: '#a7a7a7',
    }
  ],
  frontend: [
    {
      label: 'React.js',
      icon: '/logos/react-js-icon.svg',
      color: '#61dafb',
    },
    {
      label: 'Next.js',
      icon: '/logos/nextjs-icon.svg',
      color: '#a7a7a7',
      invertIconColor: true,
    },
    {
      label: 'Vue.js',
      icon: '/logos/vue-js-icon.svg',
      color: '#41b883',
    },
    {
      label: 'TailwindCSS',
      icon: '/logos/tailwind-css-icon.svg',
      color: '#30abe0',
    },
    {
      label: 'Styled Components',
      icon: '/logos/styled-components-icon.svg',
      color: '#db7093',
    },
    {
      label: 'HTML',
      icon: '/logos/html-icon.svg',
      color: '#e34f26',
    },
    {
      label: 'CSS',
      icon: '/logos/css-icon.svg',
      color: '#1572b6',
    },
    {
      label: 'Javascript',
      icon: '/logos/javascript-icon.svg',
      color: '#f0db4f',
    }
  ],
  tools: [
    {
      label: 'Docker',
      icon: '/logos/docker-icon.svg',
      color: '#2496ed',
    },
    {
      label: 'Typescript',
      icon: '/logos/typescript-icon.svg',
      color: '#3178c6',
    },
    {
      label: 'Git',
      icon: '/logos/git-icon.svg',
      color: '#f05032',
    },
    {
      label: 'Yarn',
      icon: '/logos/yarn-icon.svg',
      color: '#2c8ebb',
    },
    {
      label: 'Figma',
      icon: '/logos/figma-icon.svg',
      color: '#f24e1e',
    },
    {
      label: 'Vercel',
      icon: '/logos/vercel-icon.svg',
      color: '#a7a7a7',
      invertIconColor: true,
    },
  ],
}

export const TECHNOLOGIES_DATA: TechnologyGroup[] = [
  {
    label: 'Back-end',
    items: [
      ...TECHNOLOGIES_LIST.backend,
    ],
  },
  {
    label: 'Front-end',
    items: [
      ...TECHNOLOGIES_LIST.frontend,
    ],
  },
  {
    label: 'Tools, Platforms & Languages',
    items: [
      ...TECHNOLOGIES_LIST.tools,
    ],
  },
]