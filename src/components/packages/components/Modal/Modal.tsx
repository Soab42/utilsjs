'use client'
import { HTMLAttributes, forwardRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../helpers/cn'
import { Body } from './Body'
import { Content } from './Content'
import { Footer } from './Footer'
import { Icon } from './Icon'
import { modalTheme } from './theme'

// Import to disable scrolling outside of designated components
// Documentation: https://github.com/theKashey/react-remove-scroll#readme
import { RemoveScroll } from 'react-remove-scroll'

// Import to maintain focus within the specified wrapper, enhancing accessibility
// Documentation: https://github.com/theKashey/react-focus-lock#readme
import FocusLock from 'react-focus-lock'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

const ModalComponent = forwardRef<HTMLDivElement, ModalProps>(({ isOpen, onClose, children, ...props }, ref) => {
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose && onClose()
      }
    }

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.modal-content')) {
        onClose && onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress)
      document.addEventListener('mousedown', handleClickOutsideModal)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
      document.removeEventListener('mousedown', handleClickOutsideModal)
    }
  }, [isOpen, onClose])

  return isOpen
    ? createPortal(
        <RemoveScroll enabled={isOpen}>
          <FocusLock disabled={!isOpen} returnFocus>
            <div role="dialog" ref={ref} {...props} className={cn(modalTheme.modal, props.className)}>
              {children}
            </div>
          </FocusLock>
        </RemoveScroll>,
        document.body,
      )
    : null
})

ModalComponent.displayName = 'Modal'

export const Modal = Object.assign(ModalComponent, {
  Footer,
  Body,
  Icon,
  Content,
})
