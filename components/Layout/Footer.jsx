import { Wrapper } from '@/index';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Wrapper>
      <footer className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <Link href='/'>
          <h1 className='text-2xl font-extrabold'>A&E Bakes</h1>
        </Link>
      </footer>
      <div className='w-full bg-slate-100 h-[2px] my-4'></div>
      &copy; A&E Bakes. All Rights Reserved.
    </Wrapper>
  );
};

export default Footer;
