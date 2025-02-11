
'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { PropsWithChildren, useRef } from 'react'

type GradientHoverCardProps = PropsWithChildren<{
  className?: string
}>

const gradientVariants = cva('transition-all', {
  variants: {
    size: {
      sm: 'size-24',
      md: 'size-32',
      lg: 'size-44',
      none: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export function GradientHoverCard({
  children,
  className,
  size,
}: GradientHoverCardProps & VariantProps<typeof gradientVariants>) {
  const articleRef = useRef<HTMLDivElement>(null)
  const transformDivRef = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (articleRef.current && transformDivRef.current) {
      const rect = articleRef.current.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      transformDivRef.current.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px)`
    }
  }

  return (
    <article ref={articleRef} onMouseMove={(e) => handleMouseMove(e)} className='group'>
      <div
        ref={transformDivRef}
        className={`pointer-events-none absolute rounded-full bg-primary/30 opacity-0 blur-[80px] transition-opacity duration-300 group-hover:opacity-100 ${gradientVariants(
          { size },
        )}`}
      ></div>
      <div className={
        cn('backdrop-blur-xl transition-all rounded-lg border border-border group-hover:border-secondary-foreground/20 group-hover:bg-secondary/10', className)
      }>
        {children}
      </div>
    </article>
  )
}
