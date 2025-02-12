import { Github, Linkedin, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ThemeSwitcher } from '../theme-provider';
import { LocaleSwitcher } from '../locale-switcher';
import { getTranslations } from 'next-intl/server';

export async function Header() {
  const t = await getTranslations('Header');

  return (
    <header className='fixed left-0 top-0 z-50 w-full p-4'>
      <section className='mx-auto flex w-full max-w-7xl items-center justify-between rounded-xl border border-border/70 bg-background/20 px-8 max-sm:px-4 py-3 backdrop-blur-md'>
        <div className='flex items-center gap-6'>
          <div className='pointer-events-none flex items-center gap-1'>
            <Image src='/logo-icon.png' alt='CR' width={36} height={36} />
            <p className='text-xl font-bold text-primary'>dev</p>
          </div>
          <nav className='flex gap-3 max-sm:hidden'>
            <Link href='/' className='font-semibold text-primary transition-all hover:text-primary/80'>{t('home')}</Link>
            <Link href='/projects' className='font-semibold text-primary transition-all hover:text-primary/80'>{t('projects')}</Link>
          </nav>
        </div>
        <nav className='flex items-center gap-2 max-sm:hidden'>
          <a href='https://github.com/caiorosa-dev' target='_blank' rel='noopener noreferrer'>
            <Button variant='ghost' size='icon'>
              <Github className='size-6' />
            </Button>
          </a>
          <a href='https://linkedin.com/in/caiorosa-dev' target='_blank' rel='noopener noreferrer'>
            <Button variant='ghost' size='icon'>
              <Linkedin className='size-6' />
            </Button>
          </a>
          <Separator orientation='vertical' className='h-6' />
          <ThemeSwitcher />
          <LocaleSwitcher />
        </nav>
        <Button variant='outline' size='icon' className='sm:hidden'>
          <Menu className='size-6' />
        </Button>
      </section>
    </header>
  )
}