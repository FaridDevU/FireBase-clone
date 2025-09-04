import React, { useState, useEffect } from 'react';

interface IconVariant {
  symbol: string;
  color: string;
  bgColor: string;
  shadowColor: string;
}

const iconVariants: IconVariant[] = [
  {
    symbol: '*',
    color: '#ff69b4',
    bgColor: 'linear-gradient(135deg, #fdadee 0%, #ff69b4 100%)',
    shadowColor: 'rgba(255, 105, 180, 1)'
  },
  {
    symbol: '{}',
    color: '#00bfff',
    bgColor: 'linear-gradient(135deg, #4fa0ff 0%, #00bfff 100%)',
    shadowColor: 'rgba(0, 191, 255, 1)'
  },
  {
    symbol: '<>',
    color: '#00ff7f',
    bgColor: 'linear-gradient(135deg, #00ff88 0%, #00ff7f 100%)',
    shadowColor: 'rgba(0, 255, 127, 1)'
  },
  {
    symbol: '[]',
    color: '#ff4500',
    bgColor: 'linear-gradient(135deg, #ff6b35 0%, #ff4500 100%)',
    shadowColor: 'rgba(255, 69, 0, 1)'
  },
  {
    symbol: '()',
    color: '#ffd700',
    bgColor: 'linear-gradient(135deg, #ffc300 0%, #ffd700 100%)',
    shadowColor: 'rgba(255, 215, 0, 1)'
  }
];

const AnimatedIcon: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % iconVariants.length);
        setIsAnimating(false);
      }, 150);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const currentIcon = iconVariants[currentIndex];

  return (
    <div 
      className={`
        flex flex-col justify-center items-center 
        rounded-[16px] 
        p-4 sm:p-5 
        mt-2 sm:mt-6 mx-2 sm:mx-4
        transform transition-all duration-500 
        hover:scale-110 hover:rotate-3 hover:shadow-2xl
        ${isAnimating ? 'animate-bounce scale-110' : 'animate-pulse'}
      `}
      style={{
        background: currentIcon.bgColor,
        boxShadow: `
          0 0 20px ${currentIcon.shadowColor},
          0 0 40px ${currentIcon.shadowColor}40,
          inset 0 0 20px rgba(255, 255, 255, 0.1)
        `,
        border: `2px solid ${currentIcon.color}60`,
        animation: isAnimating ? 'iconFlip 0.3s ease-in-out' : 'iconFloat 3s ease-in-out infinite'
      }}
    >
      <div 
        className="relative flex items-center justify-center min-w-[80px] min-h-[80px]"
        style={{
          filter: `drop-shadow(0 0 10px ${currentIcon.shadowColor})`
        }}
      >
        <span 
          className={`
            text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] 
            font-mono font-black
            transition-all duration-300 
            inline-block whitespace-nowrap
            ${isAnimating ? 'scale-125 rotate-12' : 'scale-100'}
          `}
          style={{ 
            color: '#ffffff',
            textShadow: `
              0 0 10px ${currentIcon.color},
              0 0 20px ${currentIcon.color},
              0 0 30px ${currentIcon.color},
              0 0 40px ${currentIcon.shadowColor},
              2px 2px 4px rgba(0, 0, 0, 0.8)
            `,
            fontFamily: 'JetBrains Mono, Consolas, Monaco, monospace',
            fontWeight: '900',
            WebkitTextStroke: `1px ${currentIcon.color}`,
            filter: `brightness(1.5) contrast(1.2)`,
            letterSpacing: '0.05em',
            lineHeight: '1'
          }}
        >
          {currentIcon.symbol}
        </span>
      </div>
    </div>
  );
};

export default AnimatedIcon;
