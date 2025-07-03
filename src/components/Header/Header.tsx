import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f2f2] px-10 py-3">
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
        <Link to="/" className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] no-underline hover:text-gray-600">Jess Fan</Link>
      </div>
      <div className="flex flex-1 justify-end">
        <div className="flex items-center gap-8">
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/">Home</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/gallery/event">Event</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/gallery/portrait">Portrait</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/gallery/street">Street</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/gallery/nature">Nature</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/gallery/concert">Concert</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/about">About</Link>
          <Link className="text-[#141414] text-sm font-medium leading-normal hover:text-gray-600" to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
