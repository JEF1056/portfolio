import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
      setIsClosing(false);
    }
  };

  const closeMobileMenu = () => {
    setIsClosing(true);
    // Delay the actual close to allow exit animations to play
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f2f2] px-4 md:px-10 py-3">
      <div className="flex items-center gap-4 text-[#141414]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_330)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Jess Fan</h2>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/">Home</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/contact">Services</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/contact">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/about">About</Link>
          <img className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqDp18zQRKsSt05ojuZCGu610G02T2IdexD-abL0wNnbMKhDjOJRfJtcMHOPLRFbCZTPL1vJgKwJMCCH5D1fG-0xIuU5Z4CHfPJso7afUUrrkKS7YRAKLdk4NxkdK2cWoLb_wzjDXmKzFW6kiMam-ctAjdCTJHI0b_HAoI0lH-Ko7N1SGf71ARQSX-6dHw-M9MMwItw1lTQ6JN6VL79K_Jco_rIMMRYgI11BNVF8EFsRDsYcgqR7bfXeWxezhdC-81rDb1eVM_mKrP" alt="Profile" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex items-center justify-center w-8 h-8 z-[60] relative"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <div className="relative w-6 h-6">
          {/* Hamburger to X animation */}
          <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'rotate-0 translate-y-0'
          }`}></span>
          <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-200 ease-out ${
            isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}></span>
          <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-out ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : 'rotate-0 translate-y-0'
          }`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-out ${
        isMobileMenuOpen && !isClosing ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-out ${
            isMobileMenuOpen && !isClosing ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-full bg-white transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen && !isClosing ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header in mobile menu */}
          <div className="flex items-center justify-between border-b border-[#f2f2f2] px-4 py-3">
            <div className="flex items-center gap-4 text-[#141414]">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_330)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Jess Fan</h2>
            </div>
            
            {/* Close button */}
            <button 
              className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-2.5 left-0 w-6 h-0.5 bg-current transform rotate-45 transition-transform duration-200"></span>
                <span className="absolute top-2.5 left-0 w-6 h-0.5 bg-current transform -rotate-45 transition-transform duration-200"></span>
              </div>
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col px-4 py-8">
            <nav className="flex flex-col space-y-8">
              <Link 
                className={`text-[#141414] text-2xl font-medium leading-normal hover:text-gray-600 transition-all duration-250 ease-out transform ${
                  isMobileMenuOpen && !isClosing 
                    ? 'translate-x-0 opacity-100' 
                    : isClosing 
                    ? 'translate-x-8 opacity-0' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen && !isClosing ? '100ms' : isClosing ? '0ms' : '0ms'
                }}
                to="/" 
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <Link 
                className={`text-[#141414] text-2xl font-medium leading-normal hover:text-gray-600 transition-all duration-250 ease-out transform ${
                  isMobileMenuOpen && !isClosing 
                    ? 'translate-x-0 opacity-100' 
                    : isClosing 
                    ? 'translate-x-8 opacity-0' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen && !isClosing ? '150ms' : isClosing ? '50ms' : '0ms'
                }}
                to="/gallery/event" 
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                className={`text-[#141414] text-2xl font-medium leading-normal hover:text-gray-600 transition-all duration-250 ease-out transform ${
                  isMobileMenuOpen && !isClosing 
                    ? 'translate-x-0 opacity-100' 
                    : isClosing 
                    ? 'translate-x-8 opacity-0' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen && !isClosing ? '200ms' : isClosing ? '100ms' : '0ms'
                }}
                to="/contact" 
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
            
            {/* Bottom Actions - Profile Picture linking to About */}
            <div className={`flex flex-col items-center justify-center mt-12 pt-8 border-t border-[#f2f2f2] transition-all duration-250 ease-out transform ${
              isMobileMenuOpen && !isClosing 
                ? 'translate-x-0 opacity-100' 
                : isClosing 
                ? 'translate-x-8 opacity-0' 
                : 'translate-x-4 opacity-0'
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen && !isClosing ? '250ms' : isClosing ? '150ms' : '0ms'
            }}>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqDp18zQRKsSt05ojuZCGu610G02T2IdexD-abL0wNnbMKhDjOJRfJtcMHOPLRFbCZTPL1vJgKwJMCCH5D1fG-0xIuU5Z4CHfPJso7afUUrrkKS7YRAKLdk4NxkdK2cWoLb_wzjDXmKzFW6kiMam-ctAjdCTJHI0b_HAoI0lH-Ko7N1SGf71ARQSX-6dHw-M9MMwItw1lTQ6JN6VL79K_Jco_rIMMRYgI11BNVF8EFsRDsYcgqR7bfXeWxezhdC-81rDb1eVM_mKrP" 
                  alt="Profile - Go to About" 
                />
                <span className="text-[#141414] text-sm font-medium">About</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
