import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/about">About</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/contact">Services</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/contact">Contact</Link>
        </div>
        <div className="flex gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f2f2f2] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div className="text-[#141414]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
          </button>
        </div>
        <img className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqDp18zQRKsSt05ojuZCGu610G02T2IdexD-abL0wNnbMKhDjOJRfJtcMHOPLRFbCZTPL1vJgKwJMCCH5D1fG-0xIuU5Z4CHfPJso7afUUrrkKS7YRAKLdk4NxkdK2cWoLb_wzjDXmKzFW6kiMam-ctAjdCTJHI0b_HAoI0lH-Ko7N1SGf71ARQSX-6dHw-M9MMwItw1lTQ6JN6VL79K_Jco_rIMMRYgI11BNVF8EFsRDsYcgqR7bfXeWxezhdC-81rDb1eVM_mKrP" alt="Profile" />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex items-center justify-center w-8 h-8"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#f2f2f2] md:hidden z-50">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/gallery/event" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <div className="flex gap-2 pt-2">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f2f2f2] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
              <img className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqDp18zQRKsSt05ojuZCGu610G02T2IdexD-abL0wNnbMKhDjOJRfJtcMHOPLRFbCZTPL1vJgKwJMCCH5D1fG-0xIuU5Z4CHfPJso7afUUrrkKS7YRAKLdk4NxkdK2cWoLb_wzjDXmKzFW6kiMam-ctAjdCTJHI0b_HAoI0lH-Ko7N1SGf71ARQSX-6dHw-M9MMwItw1lTQ6JN6VL79K_Jco_rIMMRYgI11BNVF8EFsRDsYcgqR7bfXeWxezhdC-81rDb1eVM_mKrP" alt="Profile" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
