import React from 'react';

export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer White Background */}
      <circle cx="100" cy="100" r="100" fill="#ffffff" />
      
      {/* Inner flag background circle */}
      <clipPath id="innerCircleClip">
        <circle cx="100" cy="100" r="62" />
      </clipPath>
      
      <g clipPath="url(#innerCircleClip)">
        {/* Blue top */}
        <rect x="0" y="0" width="200" height="60" fill="#0000ff" />
        {/* Yellow top */}
        <rect x="0" y="60" width="200" height="8" fill="#ffff00" />
        {/* Red middle */}
        <rect x="0" y="68" width="200" height="64" fill="#ff0000" />
        {/* Yellow bottom */}
        <rect x="0" y="132" width="200" height="8" fill="#ffff00" />
        {/* Blue bottom */}
        <rect x="0" y="140" width="200" height="60" fill="#0000ff" />
        
        {/* Left F */}
        <path d="M 45,70 h 28 v 12 h -14 v 10 h 11 v 12 h -11 v 22 h -14 z" fill="#000000" />
        
        {/* Right F (mirrored) */}
        <path d="M 155,70 h -28 v 12 h 14 v 10 h -11 v 12 h 11 v 22 h 14 z" fill="#000000" />
        
        {/* Bottom E (facing down) */}
        <path d="M 75,133 h 50 v 30 h -14 v -18 h -5 v 18 h -12 v -18 h -5 v 18 h -14 z" fill="#000000" />
        
        {/* Center Soccer Ball */}
        <circle cx="100" cy="100" r="15" fill="#ffffff" />
        {/* simple pentagons for soccer ball */}
        <path d="M 100,90 L 108,96 L 105,106 L 95,106 L 92,96 Z" fill="#000000" />
        <path d="M 100,90 L 100,85 M 108,96 L 114,94 M 105,106 L 109,112 M 95,106 L 91,112 M 92,96 L 86,94" stroke="#000000" strokeWidth="1.5" />
      </g>
      
      {/* Text Path Definitions */}
      <defs>
        <path id="archTopText" d="M 22,100 a 78,78 0 1,1 156,0" />
        <path id="archBottomText" d="M 178,100 a 78,78 0 1,1 -156,0" />
      </defs>
      
      {/* Outer Text */}
      <text fill="#000000" fontSize="19" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
        <textPath href="#archTopText" startOffset="50%" textAnchor="middle">FOOTBALL FEDERATION</textPath>
      </text>
      <text fill="#000000" fontSize="20" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5">
        <textPath href="#archBottomText" startOffset="50%" textAnchor="middle">ESWATINI</textPath>
      </text>
    </svg>
  );
}
