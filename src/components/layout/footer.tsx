import { Separator } from '../ui/separator';
import { getTranslations } from 'next-intl/server';

export async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className='bg-background'>
      <div className='mx-auto w-full max-w-7xl space-y-4 max-sm:px-4 py-6'>
        <Separator />
        <div className='flex flex-col items-center gap-2'>
          <p className='text-center text-muted-foreground'>
            &copy; {new Date().getFullYear()} Caio Rosa Development. {t('paragraph')}
          </p>
        </div>
      </div>
    </footer>
  )
}


