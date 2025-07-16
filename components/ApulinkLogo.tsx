// PATH: app/components/ApulinkLogo.tsx
'use client'
import Link from 'next/link'

interface ApulinkLogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function ApulinkLogo({ size = 'md', className = '' }: ApulinkLogoProps) {
  const sizes = {
    sm: { text: 'text-xl', icon: 'w-6 h-6' },
    md: { text: 'text-2xl', icon: 'w-8 h-8' },
    lg: { text: 'text-3xl', icon: 'w-10 h-10' }
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      {/* Magnifying Glass with Puglia Map */}
      <div className={`relative ${sizes[size].icon}`}>
        <svg viewBox="0 0 40 40" className="w-full h-full">
          {/* Magnifying glass circle */}
          <circle 
            cx="16" 
            cy="16" 
            r="12" 
            fill="none" 
            stroke="#E2725B" 
            strokeWidth="3"
          />
          
          {/* Puglia region shape (simplified) inside magnifying glass */}
          <path 
            d="M 10 12 L 14 10 L 18 11 L 20 14 L 18 18 L 16 20 L 12 19 L 10 16 Z" 
            fill="#1e3a5f"
            opacity="0.8"
          />
          
          {/* Magnifying glass handle */}
          <line 
            x1="24" 
            y1="24" 
            x2="34" 
            y2="34" 
            stroke="#E2725B" 
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Text Logo */}
      <span className={`font-playfair font-bold text-navy ${sizes[size].text}`}>
        Apulink
      </span>
    </Link>
  )
}
