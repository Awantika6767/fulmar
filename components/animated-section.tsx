"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale'
  delay?: number
  threshold?: number
}

const animationClasses = {
  'fade-up': 'animate-fade-up',
  'fade-in': 'animate-fade-in',
  'slide-left': 'animate-slide-in-left',
  'slide-right': 'animate-slide-in-right',
  'scale': 'animate-scale-in',
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold })

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animationClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  )
}

interface AnimatedTextProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  staggerDelay?: number
}

export function AnimatedText({
  children,
  className,
  as: Component = 'p',
  staggerDelay = 50,
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  const words = children.split(' ')

  return (
    <Component ref={ref as React.RefObject<HTMLElement>} className={cn('flex flex-wrap gap-x-2', className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            'inline-block opacity-0 translate-y-4 transition-all duration-500',
            isVisible && 'opacity-100 translate-y-0'
          )}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {word}
        </span>
      ))}
    </Component>
  )
}
