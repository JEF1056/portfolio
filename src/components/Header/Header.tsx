import React from 'react';
import { MagnifyingGlassIcon, ShoppingCartIcon } from './Icons';

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
              />
            </g>
            <defs>
              <clipPath id="clip0_6_330">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
          Capture
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a className="text-[#141414] text-sm font-medium leading-normal" href="#">
            Home
          </a>
          <a className="text-[#141414] text-sm font-medium leading-normal" href="#">
            About
          </a>
          <a className="text-[#141414] text-sm font-medium leading-normal" href="#">
            Services
          </a>
          <a className="text-[#141414] text-sm font-medium leading-normal" href="#">
            Contact
          </a>
        </nav>
        <div className="flex gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f2f2f2] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <MagnifyingGlassIcon />
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f2f2f2] text-[#141414] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <ShoppingCartIcon />
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqDp18zQRKsSt05ojuZCGu610G02T2IdexD-abL0wNnbMKhDjOJRfJtcMHOPLRFbCZTPL1vJgKwJMCCH5D1fG-0xIuU5Z4CHfPJso7afUUrrkKS7YRAKLdk4NxkdK2cWoLb_wzjDXmKzFW6kiMam-ctAjdCTJHI0b_HAoI0lH-Ko7N1SGf71ARQSX-6dHw-M9MMwItw1lTQ6JN6VL79K_Jco_rIMMRYgI11BNVF8EFsRDsYcgqR7bfXeWxezhdC-81rDb1eVM_mKrP")`,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
