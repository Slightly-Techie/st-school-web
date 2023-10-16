import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import bell from '../assets/bell-icon.svg';
import person from '../assets/person-icon.svg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="fixed inset-x-0 top-0 h-16 flex w-full flex-wrap items-center z-50 bg-white relative flex w-full flex-wrap items-center justify-between py-2 text-black shadow-lg hover:text-neutral-700 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <Link className="ml-6 " to="/">
          <img src={logo} alt="" />
        </Link>
        
        {/* Mobile Menu Icon */}
        <div className={`block lg:hidden cursor-pointer ${mobileMenuOpen && "rotate-45"} transition duration-300`} onClick={toggleMobileMenu} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        {/* Mobile view */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-white ease-in-out  transition duration-200">
            {/* Mobile Search Input */}
            <div className="block px-4 py-2 text-black hover:text-neutral-700">
              <input
                name='search'
                type="search"
                className="w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out "
                placeholder="Search"
              />
            </div>
            <div className="flex gap-2 align-center px-4 py-2 text-black hover:text-neutral-700">
              <span className="">
                <img src={bell} alt="" />
              </span>
              <span className="absolute right-82 top-30 -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[16px] font-bold text-red-500">
                  2
              </span>
              <h4>Notifications</h4>
            </div>
            <div className="flex gap-2 px-4 py-2 text-black">
              <img
                src={person}
                className="rounded-full h-6 w-6"
                loading="lazy"
                alt="User Avatar"
              />
              <h4>rashid</h4>
            </div>
          </div>
        )}
        {/* Desktop view */}
        <div className="hidden lg:flex justify-between align-center items-center text-black transition duration-200 gap-[1.5em]">
          <input
            name='search'
            type="search"
            className="w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow- focus:outline-none motion-reduce:transition-none"
            placeholder="Search"
          />
            <div className='flex cursor-pointer transition duration-200 ease-in-out '>
              <img  className='h-6 w-6' src={bell} alt="" />
              <span className="relative right-6 top-1 -mt-4 ml-2.5 rounded-full px-[0.35em] py-[0.15em] text-[16px] font-bold leading-none text-red-500">
                2
              </span>
            </div>
          <div className='flex mr-12 gap-[1.5em] transition duration-200 ease-in-out'>
            <img
              src={person}
              className="rounded-full h-6 w-6 cursor-pointer"
              alt="User Avatar"
            />
            <h4 className='whitespace-nowrap cursor-pointer'>rashid</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
