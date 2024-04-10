"use client"
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import React, { useRef } from 'react'

const IntersectionObserverWrap = ({children}: {children: React.ReactNode}) => {
    const showElements = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            console.log("called", entry.isIntersecting)
          if(entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            // entry.target.classList.add("opacity-100");

          }
        })
      }
      const ref = useRef<HTMLHeadingElement>(null)
      useIntersectionObserver([ref], showElements);
  return (
    <div ref={ref} className=' opacity-0 transition-all duration-1000'>
      {children}
    </div>
  )
}

export default IntersectionObserverWrap
