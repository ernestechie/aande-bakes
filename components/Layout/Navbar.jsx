import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { SlHandbag } from 'react-icons/sl';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-white flex items-center justify-between w-full p-6 px-4 lg:px-16 fixed top-0 left-0 z-20'>
      <Link href='/'>
        <h1 className='text-xl font-bold'>A&E Bakes</h1>
      </Link>
      <div className='flex gap-8'>
        <div className='items-center gap-6 hidden sm:flex justify-end'>
          <Link
            href='/'
            className='py-3 px-8 border-2 rounded-full text-dark border-[#ddd]'
          >
            Sign Up
          </Link>
          <Link href='/'>Login</Link>
        </div>
        <div className='flex items-center gap-4 text-xl'>
          <span className='relative'>
            <div className='-top-3 -right-3 absolute p-3 h-2 w-2 flex items-center justify-center bg-accent text-[10px] font-bold text-white rounded-full'>
              2
            </div>
            <BsHeart className='cursor-pointer' />
          </span>
          <span className='relative'>
            <div className='-top-3 -right-3 absolute p-3 h-2 w-2 flex items-center justify-center bg-primary text-[10px] font-bold text-white rounded-full'>
              17
            </div>
            <SlHandbag className='cursor-pointer' />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
