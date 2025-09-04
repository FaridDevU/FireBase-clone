import React from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6" role="banner">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <img 
              src="/images/img_link_svg.png" 
              alt="Firebase Studio" 
              className="w-[180px] h-[36px] sm:w-[200px] sm:h-[40px] lg:w-[240px] lg:h-[48px] object-contain hover:opacity-80 transition-opacity duration-200"
            />
          </div>
          
          {/* Navigation and CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            {/* Navigation Links */}
            <nav className="flex flex-row gap-6 sm:gap-8 justify-center items-center" role="navigation">
              <a 
                href="https://firebase.google.com/docs/studio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] sm:text-[14px] font-inter font-medium leading-[17px] text-global-2 hover:text-global-4 transition-colors duration-200 hover:underline"
              >
                Docs
              </a>
              <a 
                href="https://firebase.google.com/support/troubleshooter/studio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] sm:text-[14px] font-inter font-medium leading-[17px] text-global-2 hover:text-global-4 transition-colors duration-200 hover:underline"
              >
                Support
              </a>
            </nav>
            
            {/* CTA Button */}
            <Button 
              variant="gradient" 
              size="medium"
              onClick={() => window.open('https://studio.firebase.google.com/', '_blank')}
              className="whitespace-nowrap"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;