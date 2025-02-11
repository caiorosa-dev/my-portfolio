import { cn } from '@/lib/utils';

export function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn('mx-auto h-full max-w-7xl sm:px-6 lg:px-8', className)}>{children}</div>;
}

