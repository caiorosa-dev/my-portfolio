import { Separator } from '../ui/separator';

export function Footer() {
  return (
    <footer className='bg-background'>
      <div className='mx-auto w-full max-w-7xl space-y-4 px-4 py-6'>
        <Separator />
        <div className='flex flex-col items-center gap-2'>
          <p className='text-center text-muted-foreground'>
            &copy; {new Date().getFullYear()} Caio Rosa Development. Made with ❤️ using Next.js.
          </p>
        </div>
      </div>
    </footer>
  )
}


