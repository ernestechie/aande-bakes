import React, { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { SlHandbag } from 'react-icons/sl';
import { RiCloseLine } from 'react-icons/ri';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='bg-white flex items-center justify-between w-full p-6 px-4 lg:px-16 fixed top-0 left-0 z-20'>
      <button
        type='button'
        title='Burger menu button'
        className='block sm:hidden relative'
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <div
          className={`bg-white flex flex-col absolute top-[150%] left-0 items-start gap-6 justify-center shadow-lg min-w-[240px] p-4 rounded-md duration-500 ${
            showMenu ? 'translate-x-0' : '-translate-x-[150%]'
          }`}
        >
          <Link
            href='/'
            className='font-semibold py-3 px-12 border-2 rounded-full text-dark border-[#ddd] text-sm'
          >
            Sign Up
          </Link>
          <Link
            href='/'
            className='font-semibold py-3 px-12 rounded-full text-light bg-primary text-sm'
          >
            Sign In
          </Link>
        </div>
        {showMenu ? (
          <RiCloseLine className='text-3xl text-dark-gray' />
        ) : (
          <IoMenu className='text-3xl text-dark-gray' />
        )}
      </button>
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
          <Link href='/user/wishlist'>
            <span className='relative'>
              <div className='-top-3 -right-3 absolute p-3 h-2 w-2 flex items-center justify-center bg-accent text-[10px] font-bold text-white rounded-full z-10'>
                2
              </div>
              <BsHeart className='cursor-pointer' />
            </span>
          </Link>

          <Link href='/user/cart'>
            <span className='relative'>
              <div className='-top-3 -right-3 absolute p-3 h-2 w-2 flex items-center justify-center bg-primary text-[10px] font-bold text-white rounded-full z-10'>
                17
              </div>
              <SlHandbag className='cursor-pointer' />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
