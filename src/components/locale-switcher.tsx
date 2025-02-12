'use client';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const languages = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Português',
    value: 'pt',
  },
];

export function LocaleSwitcher({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const locale = useLocale();

  const handleUpdateLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    document.cookie = `locale=${newLocale}; path=/`;
    router.refresh();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost'>
          <Globe className='size-6' />
          {languages.find((language) => language.value === locale)?.name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col gap-2 w-48'>
        {languages.map((language) => (
          <Button key={language.value} variant="secondary" className='w-full' onClick={() => handleUpdateLocale(language.value)} disabled={language.value === locale}>
            {language.name}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}


