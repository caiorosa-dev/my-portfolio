import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { GradientText } from '@/components/misc/gradient-text';
import { SquareArrowOutUpRightIcon } from 'lucide-react';
import { Title } from '@/components/ui/title';
import { Container } from '@/components/layout/container';

export function HeroSection() {
  return (
    <section className='relative flex h-full items-center max-sm:px-6 my-60'>
      <Container className='flex flex-col items-center justify-center gap-6'>
        <div className='flex items-center gap-2 rounded-full border border-border/70 bg-background/10 max-sm:p-1 max-sm:px-4 p-2 px-8 backdrop-blur-sm animate-fade-up animate-delay-100'>
          <Image src='https://avatars.githubusercontent.com/caiorosa-dev' alt='Caio Rosa' width={28} height={28} className='rounded-full' />
          <span className='text-lg font-medium text-primary max-sm:text-base'>Caio Rosa</span>
        </div>
        <Title className='animate-fade-up animate-delay-300'>
          <GradientText>Full Stack Developer</GradientText>
          <br />
          <GradientText>Crafting Efficient Solutions</GradientText>
        </Title>
        <p className='mx-auto max-w-2xl text-center text-lg text-muted-foreground sm:text-xl animate-fade-up animate-delay-500'>
          With over 4 years of experience, I specialize in building innovative solutions using modern technologies such as ReactJS, NextJS, and NodeJS.
        </p>
        <div className='relative mt-6 flex gap-4 animate-fade-up animate-delay-700 max-sm:flex-col max-sm:gap-2'>
          <span className='absolute left-1/2 top-1/2 z-0 h-[50px] w-[100px] -translate-x-1/2 -translate-y-1/2 bg-primary/70 blur-[90px]' />
          <Link href='/' className='z-10'>
            <Button size='lg'>
              Get My Resume
              <SquareArrowOutUpRightIcon className='size-4' />
            </Button>
          </Link>
          <Button variant='outline' size='lg' className='z-10'>
            <Link href='/'>View my projects</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
