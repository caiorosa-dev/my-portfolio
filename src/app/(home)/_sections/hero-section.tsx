import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { GradientText } from '@/components/misc/gradient-text';
import { Download } from 'lucide-react';

export function HeroSection() {
  return (
    <section className='relative min-h-screen flex h-full items-center'>
      <div className='max-w-7xl mx-auto flex justify-center items-center h-full flex-col gap-6 sm:px-6 lg:px-8'>
        <div className='flex gap-2 items-center p-2 bg-background/10 backdrop-blur-sm rounded-full border border-border/70 px-8'>
          <Image src='https://avatars.githubusercontent.com/caiorosa-dev' alt='Caio Rosa' width={28} height={28} className='rounded-full' />
          <span className='font-medium text-lg text-primary'>Caio Rosa</span>
        </div>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center'>
          <GradientText>Full Stack Developer</GradientText>
          <br />
          <GradientText>Crafting Efficient Solutions</GradientText>
        </h1>
        <p className='max-w-2xl mx-auto text-lg sm:text-xl text-slate-400/90 text-center'>With over 4 years of experience, I specialize in building innovative solutions using modern technologies like ReactJS, NextJS, and NodeJS.</p>
        <div className='flex gap-4 relative mt-6'>
          <span className='absolute z-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100px] h-[50px] bg-primary/70 blur-[90px]' />
          <Link href='/' className='z-10'>
            <Button>
              Get My Resume
              <Download className='w-4 h-4' />
            </Button>
          </Link>
          <Button variant='outline' className='z-10'>
            <Link href='/'>View my projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
