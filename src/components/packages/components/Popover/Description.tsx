'use client'
import { HTMLProps, forwardRef, useId, useLayoutEffect } from 'react'
import { cn } from '../../helpers/cn'
import { usePopoverContext } from './Context'

export const PopoverDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  function PopoverDescription(props, ref) {
    const { setDescriptionId } = usePopoverContext()
    const id = useId()
    useLayoutEffect(() => {
      setDescriptionId(id)
      return () => setDescriptionId(undefined)
    }, [id, setDescriptionId])

    return <p {...props} ref={ref} id={id} className={cn('text-body-4 font-normal text-metal-600', props.className)} />
  },
)
