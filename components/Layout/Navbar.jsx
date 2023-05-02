import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { SlHandbag } from 'react-icons/sl';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-white flex items-center justify-end w-full p-6 px-4 lg:px-16 fixed top-0 left-0 z-20'>
      <h1 className='w-[100px]'>A&E Bakes</h1>
      <div className='flex gap-8 w-full justify-end'>
        <div className='items-center gap-6 hidden md:flex w-1/2 mx-auto'>
          <div className='w-full'>
            <input
              type='text'
              placeholder='Search'
              className='bg-gray text-sm text-dark w-full p-4 px-8 outline-0 rounded-full border-[1px] border-[#ddd]'
            />
          </div>
        </div>
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
          <BsHeart className='cursor-pointer' />
          <SlHandbag className='cursor-pointer' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
