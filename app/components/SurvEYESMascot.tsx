// PATH: app/components/SurvEYESMascot.tsx
'use client'
import React from 'react'

interface SurvEYESMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  expression?: 'happy' | 'neutral' | 'confident' | 'curious'
  showMagnifyingGlass?: boolean
  className?: string
}

export default function SurvEYESMascot({ 
  size = 'md', 
  expression = 'neutral',
  showMagnifyingGlass = false,
  className = ''
}: SurvEYESMascotProps) {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  }

  const eyeExpressions = {
    happy: 'M12 8c-1.5 0-2.5 1.5-2.5 2.5s1 2.5 2.5 2.5 2.5-1.5 2.5-2.5S13.5 8 12 8z',
    neutral: 'M12 9.5c-1 0-1.5 1-1.5 1.5s.5 1.5 1.5 1.5 1.5-1 1.5-1.5-.5-1.5-1.5-1.5z',
    confident: 'M12 9c-1.2 0-2 1.2-2 2s.8 2 2 2 2-1.2 2-2-.8-2-2-2z',
    curious: 'M12 8.5c-1.3 0-2.2 1.3-2.2 2.2s.9 2.2 2.2 2.2 2.2-1.3 2.2-2.2-.9-2.2-2.2-2.2z'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Robot Body */}
        <rect x="25" y="35" width="50" height="45" rx="8" fill="#1e3a5f" stroke="#E2725B" strokeWidth="2"/>
        
        {/* Binocular Head */}
        <rect x="20" y="20" width="60" height="25" rx="12" fill="#6495ED" stroke="#1e3a5f" strokeWidth="2"/>
        
        {/* Left Eye Lens */}
        <circle cx="35" cy="32" r="10" fill="#ffffff" stroke="#1e3a5f" strokeWidth="2"/>
        <circle cx="35" cy="32" r="6" fill="#E2725B"/>
        <circle cx="35" cy="32" r="3" fill="#1e3a5f"/>
        
        {/* Right Eye Lens */}
        <circle cx="65" cy="32" r="10" fill="#ffffff" stroke="#1e3a5f" strokeWidth="2"/>
        <circle cx="65" cy="32" r="6" fill="#E2725B"/>
        <circle cx="65" cy="32" r="3" fill="#1e3a5f"/>
        
        {/* Bridge between eyes */}
        <rect x="45" y="30" width="10" height="4" fill="#1e3a5f"/>
        
        {/* Antenna */}
        <line x1="50" y1="20" x2="50" y2="10" stroke="#E2725B" strokeWidth="2"/>
        <circle cx="50" cy="8" r="3" fill="#E2725B"/>
        
        {/* Arms */}
        <rect x="15" y="45" width="10" height="20" rx="5" fill="#6495ED" stroke="#1e3a5f" strokeWidth="2"/>
        <rect x="75" y="45" width="10" height="20" rx="5" fill="#6495ED" stroke="#1e3a5f" strokeWidth="2"/>
        
        {/* Feet */}
        <rect x="30" y="75" width="15" height="10" rx="5" fill="#E2725B"/>
        <rect x="55" y="75" width="15" height="10" rx="5" fill="#E2725B"/>
        
        {/* Chest Display */}
        <rect x="35" y="45" width="30" height="20" rx="4" fill="#ffffff" stroke="#6495ED" strokeWidth="1"/>
        <text x="50" y="58" textAnchor="middle" fontSize="8" fill="#1e3a5f" fontFamily="monospace">SCAN</text>
        
        {/* Magnifying Glass (optional) */}
        {showMagnifyingGlass && (
          <g transform="translate(70, 50)">
            <circle cx="10" cy="10" r="8" fill="none" stroke="#E2725B" strokeWidth="3"/>
            <line x1="16" y1="16" x2="22" y2="22" stroke="#E2725B" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="10" cy="10" r="6" fill="#ffffff" fillOpacity="0.3"/>
          </g>
        )}
      </svg>
      
      {/* Expression indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
        <div className={`w-2 h-2 rounded-full ${
          expression === 'happy' ? 'bg-green-500' :
          expression === 'confident' ? 'bg-blue-500' :
          expression === 'curious' ? 'bg-yellow-500' :
          'bg-gray-500'
        }`} />
      </div>
    </div>
  )
}
