// PATH: app/components/ApulinkLogo.tsx
'use client'
import Link from 'next/link'

interface ApulinkLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function ApulinkLogo({ 
  className = '', 
  size = 'md', 
  showText = true 
}: ApulinkLogoProps) {
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  }
  
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        {/* Option 1: If you have an image file */}
        {/* <img 
          src="/logo/apulink-logo.svg" 
          alt="Apulink Logo"
          className="w-full h-full object-contain"
        /> */}
        
        {/* Option 2: If you have an SVG to paste directly */}
        {/* <svg viewBox="0 0 100 100" className="w-full h-full">
          [Your SVG content here]
        </svg> */}
        
        {/* Official Apulink Logo - Magnifying glass with Puglia */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Magnifying glass handle */}
          <line x1="70" y1="70" x2="90" y2="90" stroke="#1e3a5f" strokeWidth="6" strokeLinecap="round" />
          
          {/* Magnifying glass circle frame */}
          <circle cx="40" cy="40" r="32" fill="#ffffff" stroke="#1e3a5f" strokeWidth="5" />
          
          {/* Puglia region silhouette inside magnifying glass */}
          <g transform="translate(20, 20)">
            <path d="M8 15 C12 12, 18 14, 22 18 C26 22, 28 28, 30 32 C32 36, 35 40, 32 44 C28 48, 24 45, 20 42 C18 46, 14 49, 10 46 C6 42, 4 38, 2 32 C0 28, 2 22, 4 18 C6 14, 8 15, 8 15 Z M15 35 C16 35, 17 36, 17 37 C17 38, 16 39, 15 39 C14 39, 13 38, 13 37 C13 36, 14 35, 15 35 Z" 
                  fill="#d2691e" />
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-playfair ${textSizeClasses[size]} font-bold text-stone-800`}>
            Apulink
          </span>
          {size === 'lg' && (
            <span className="text-xs font-medium text-stone-600 tracking-wider uppercase">
              Property Survey Platform
            </span>
          )}
        </div>
      )}
    </Link>
  )
}
