// PATH: app/components/SurvEYESMascot.tsx
'use client'

interface SurvEYESMascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animated?: boolean
  showName?: boolean
}

export default function SurvEYESMascot({ 
  size = 'md', 
  className = '',
  animated = false,
  showName = false
}: SurvEYESMascotProps) {
  
  const sizeClasses = {
    sm: 'w-16 h-20',    // Small for footer/sidebar
    md: 'w-24 h-30',    // Medium for cards/sections  
    lg: 'w-32 h-40',    // Large for hero sections
    xl: 'w-48 h-60'     // Extra large for landing pages
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`${sizeClasses[size]} relative ${animated ? 'animate-bounce' : ''}`}>
        {/* Option 1: Use the actual image if uploaded to public folder */}
        {/* <img 
          src="/mascot/surveyes-robot.png" 
          alt="SurvEYES Mascot Robot"
          className="w-full h-full object-contain"
        /> */}
        
        {/* Option 2: SVG representation of the mascot */}
        <svg viewBox="0 0 100 120" className="w-full h-full">
          {/* Robot Head */}
          <ellipse cx="50" cy="35" rx="22" ry="18" fill="#f0f0f0" stroke="#333" strokeWidth="1"/>
          
          {/* Antenna */}
          <line x1="50" y1="17" x2="50" y2="12" stroke="#333" strokeWidth="2"/>
          <circle cx="50" cy="10" r="2" fill="#333"/>
          
          {/* Big Eyes (Binoculars) */}
          <g>
            {/* Left Eye */}
            <circle cx="42" cy="32" r="8" fill="#1e3a5f" stroke="#d2691e" strokeWidth="2"/>
            <circle cx="42" cy="32" r="6" fill="#000"/>
            <circle cx="44" cy="30" r="2" fill="#4fc3f7"/>
            
            {/* Right Eye */}
            <circle cx="58" cy="32" r="8" fill="#1e3a5f" stroke="#d2691e" strokeWidth="2"/>
            <circle cx="58" cy="32" r="6" fill="#000"/>
            <circle cx="60" cy="30" r="2" fill="#4fc3f7"/>
            
            {/* Eye Bridge */}
            <rect x="47" y="30" width="6" height="4" fill="#333" rx="2"/>
          </g>
          
          {/* Mouth */}
          <ellipse cx="50" cy="42" rx="3" ry="1" fill="#333"/>
          
          {/* Body */}
          <ellipse cx="50" cy="75" rx="18" ry="25" fill="#e8e8e8" stroke="#333" strokeWidth="1"/>
          
          {/* SurvEYES Text on Chest */}
          <text x="50" y="75" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#1e3a5f">
            SurvEYES
          </text>
          
          {/* Arms */}
          <g>
            {/* Left Arm */}
            <ellipse cx="25" cy="65" rx="6" ry="12" fill="#d2691e"/>
            <circle cx="25" cy="77" r="4" fill="#333"/>
            
            {/* Right Arm */}
            <ellipse cx="75" cy="65" rx="6" ry="12" fill="#d2691e"/>
            <circle cx="75" cy="77" r="4" fill="#333"/>
          </g>
          
          {/* Legs */}
          <g>
            {/* Left Leg */}
            <ellipse cx="42" cy="105" rx="5" ry="8" fill="#1e3a5f"/>
            <ellipse cx="42" cy="115" rx="6" ry="3" fill="#333"/>
            
            {/* Right Leg */}
            <ellipse cx="58" cy="105" rx="5" ry="8" fill="#1e3a5f"/>
            <ellipse cx="58" cy="115" rx="6" ry="3" fill="#333"/>
          </g>
        </svg>
      </div>
      
      {showName && (
        <div className="mt-2 text-center">
          <div className="font-bold text-stone-800 text-sm">SurvEYES</div>
          <div className="text-xs text-stone-600">Your Survey Assistant</div>
        </div>
      )}
    </div>
  )
}
