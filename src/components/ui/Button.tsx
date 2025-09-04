import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  style,
  ...props 
}) => {
  const baseClasses = 'font-inter font-bold rounded-[20px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer relative overflow-hidden group active:scale-95';
  
  const variants = {
    primary: 'bg-button-2 text-button-1 hover:bg-gray-100 focus:ring-gray-300 hover:shadow-lg hover:scale-105',
    secondary: 'bg-button-1 text-button-3 hover:bg-gray-700 focus:ring-gray-500 hover:shadow-lg hover:scale-105 backdrop-blur-sm border border-gray-600',
    gradient: 'bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-[length:200%_100%] text-button-2 focus:ring-orange-300 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 animate-gradient-shift hover:scale-105',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-xs sm:px-6 sm:py-2 sm:text-sm',
    medium: 'px-6 py-3 text-sm sm:px-8 sm:py-3 sm:text-base',
    large: 'px-8 py-4 text-base sm:px-10 sm:py-4 sm:text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : 'w-auto'} 
    ${disabled ? 'cursor-not-allowed opacity-50 hover:scale-100 hover:shadow-none' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  const buttonStyle = variant === 'gradient' 
    ? {
        background: 'linear-gradient(45deg, #ff9100 0%, #ffc300 50%, #ff9100 100%)',
        backgroundSize: '200% 100%',
        animation: 'gradient-shift 3s ease infinite',
        ...style
      }
    : style;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={buttonStyle}
      {...props}
    >
      {/* Shimmer Effect Overlay for gradient buttons */}
      {variant === 'gradient' && !disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"></div>
      )}
      
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;