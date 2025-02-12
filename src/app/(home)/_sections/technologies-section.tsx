import { Container } from '@/components/layout/container';
import { GradientText } from '@/components/misc/gradient-text';
import { GradientHoverCard } from '@/components/ui/gradient-hover-card';
import { Title } from '@/components/ui/title';
import { TECHNOLOGIES_DATA } from '@/data/technologies';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function TechnologiesSection() {
  return (
    <section className='my-48 px-4'>
      <Container className='space-y-8'>
        <Title size='sm'>
          <GradientText>
            Technologies I use to build my projects
          </GradientText>
        </Title>
        <div className='space-y-8'>
          {TECHNOLOGIES_DATA.map((group) => (
            <section key={group.label}>
              <p className='text-primary'>{group.label}</p>
              <ul className='grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 mt-4'>
                {group.items.map((item) => (
                  <GradientHoverCard key={item.label} className='p-3 flex items-center gap-2'>
                    <figure className={cn('p-2 rounded-md')} style={{ backgroundColor: `${item.color}26` }}>
                      <Image src={item.icon} alt={item.label} width={20} height={20} className={cn('size-5', { 'dark:invert': item.invertIconColor })} />
                    </figure>
                    <p className='text-sm font-medium'>{item.label}</p>
                  </GradientHoverCard>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>

    </section>
  )
}
