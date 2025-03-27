'use client'
import { cn } from '@/app/(frontend)/lib/utils'
import { useMotionValue, useMotionTemplate, motion } from 'motion/react'
import React, { ReactNode, useState } from 'react'

export const RevealCard = ({
  backgroundImage,
  className,
  children,
}: {
  backgroundImage: string
  className?: string
  children?: ReactNode
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = isHovered ? { maskImage, WebkitMaskImage: maskImage } : { opacity: 0 }

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('relative w-full h-full rounded-3xl overflow-hidden', className)}
    >
      {/* Background Reveal Layer */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 pointer-events-none blur-md"
        style={{
          ...style,
          backgroundImage: `url(${backgroundImage})`,
          opacity: isHovered ? 0.3 : 0,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
