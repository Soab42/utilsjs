'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { inputTheme } from './theme'

export interface IconProps extends HTMLAttributes<HTMLDivElement> {}

export const Icon = forwardRef<HTMLDivElement, IconProps>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn(inputTheme.icon, className)}>
      {children}
    </div>
  )
})

Icon.displayName = 'Icon'
