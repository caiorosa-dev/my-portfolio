import { Github, Globe, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className='fixed top-0 left-0 z-50 p-4 w-full'>
      <section className='bg-background/20 backdrop-blur-sm rounded-xl w-full max-w-7xl mx-auto border border-border/70 py-3 px-8 flex justify-between items-center'>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-1 pointer-events-none'>
            <Image src='/logo-icon.png' alt='CR' width={36} height={36} />
            <p className='text-primary font-bold text-xl'>dev</p>
          </div>
          <nav className='flex gap-3'>
            <Link href='/' className='font-semibold hover:text-primary/80 text-primary transition-all'>Home</Link>
            <Link href='/projects' className='font-semibold hover:text-primary/80 text-primary transition-all'>Projects</Link>
          </nav>
        </div>
        <nav className='flex gap-2'>
          <a href='https://github.com/caiorosa-dev' target='_blank' rel='noopener noreferrer'>
            <Button variant='ghost' size='icon'>
              <Github className='w-6 h-6' />
            </Button>
          </a>
          <a href='https://linkedin.com/in/caiorosa-dev' target='_blank' rel='noopener noreferrer'>
            <Button variant='ghost' size='icon'>
              <Linkedin className='w-6 h-6' />
            </Button>
          </a>
          <Button variant='ghost'>
            <Globe className='w-6 h-6' />
            English
          </Button>
        </nav>
      </section>
    </header>
  )
}