'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClass?: string
  offset?: number
  onClick?: () => void
}

export function ScrollLink({
  href,
  children,
  className = '',
  activeClass = 'text-amber-600',
  offset = 100,
  onClick,
}: ScrollLinkProps) {
  const [isActive, setIsActive] = React.useState(false)

  // Handle click event
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Execute any additional onClick handler
    if (onClick) {
      onClick()
    }

    // Get the target element
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      // Calculate position with offset
      const position = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
      
      // Scroll to the target
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
      
      // Update URL without refreshing the page
      window.history.pushState(null, '', href)
    }
  }

  // Check if section is in view for active state
  React.useEffect(() => {
    const handleScroll = () => {
      if (href === '#') {
        setIsActive(window.scrollY < 100)
        return
      }

      const targetId = href.replace('#', '')
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect()
        const isInView = (
          rect.top <= offset + 50 && 
          rect.bottom >= offset
        )
        setIsActive(isInView)
      }
    }

    // Initial check
    handleScroll()
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [href, offset])

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        className,
        isActive && activeClass
      )}
    >
      {children}
    </a>
  )
}
