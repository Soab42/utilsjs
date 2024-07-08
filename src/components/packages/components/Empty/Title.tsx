'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../helpers/cn'
import { emptyTheme } from './theme'

export const Title = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(({ children, ...props }, ref) => {
  const { title } = emptyTheme
  return (
    <h1 {...props} ref={ref} className={cn(title.base, props.className)}>
      {children}
    </h1>
  )
})

Title.displayName = 'Empty.Title'
