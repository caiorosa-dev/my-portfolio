import { Container } from '@/components/layout/container';
import { GradientText } from '@/components/misc/gradient-text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GradientHoverCard } from '@/components/ui/gradient-hover-card';
import { Title } from '@/components/ui/title';
import { PROJECTS } from '@/data/projects';
import { cn } from '@/lib/utils';
import { Language } from '@/types/language';
import { ArrowRight, Github, Globe, SquareArrowOutUpRight } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export async function ProjectsSection() {
  const locale = await getLocale();
  const t = await getTranslations('ProjectsSection');

  return (
    <section className='my-48 px-4'>
      <Container className='space-y-8'>
        <Title size='sm'>
          <GradientText>
            {t('title')}
          </GradientText>
        </Title>
        <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1'>
          {PROJECTS.map((project) => (
            <GradientHoverCard key={project.id} size='lg' className='rounded-xl p-4 space-y-6 bg-secondary/5'>
              <Image src={project.image} alt={project.title} className='w-full h-full object-cover aspect-video rounded-xl' width={1920} height={1080} />
              <section className='space-y-2'>
                <header className='flex justify-between items-center max-sm:flex-wrap'>
                  <div className='flex items-center gap-2 max-sm:gap-1'>
                    <h2 className='text-lg max-sm:text-base font-bold'>{project.title}</h2>
                    {project.visitUrl && (
                      <a href={project.visitUrl} target='_blank'>
                        <Button variant='ghost' size='icon'>
                          <SquareArrowOutUpRight className='w-4 h-4' />
                        </Button>
                      </a>
                    )}
                  </div>
                  <div className='flex gap-2 max-sm:gap-1'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='secondary'>{tag}</Badge>
                    ))}
                  </div>
                </header>
                <p className='text-muted-foreground max-sm:text-sm'>{project.description[locale as Language]}</p>
              </section>
              <footer className='flex justify-between items-center max-sm:flex-col max-sm:gap-2 max-sm:items-start'>
                <ul className='flex gap-2'>
                  {project.technologies.map((technology) => (
                    <li key={technology.label} className='p-2 rounded-full flex items-center justify-center' style={{ backgroundColor: `${technology.color}26` }}>
                      <Image src={technology.icon} alt={technology.label} className={cn(technology.invertIconColor && 'dark:invert size-4')} width={16} height={16} />
                    </li>
                  ))}
                </ul>
                <nav className='flex gap-2 items-center max-sm:w-full'>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target='_blank'>
                      <Button variant='secondary' size='icon'>
                        <Github className='w-4 h-4' />
                      </Button>
                    </a>
                  )}
                  {project.visitUrl && (
                    <a href={project.visitUrl} target='_blank'>
                      <Button variant='secondary' size='icon'>
                        <Globe className='w-4 h-4' />
                      </Button>
                    </a>
                  )}
                  <Link href={`/projects/${project.id}`} target='_blank' className='max-sm:w-full'>
                    <Button className='max-sm:w-full'>
                      {t('viewMore')} <ArrowRight className='w-4 h-4' />
                    </Button>
                  </Link>
                </nav>
              </footer>
            </GradientHoverCard>
          ))}
        </div>
      </Container>
    </section>
  )
}
