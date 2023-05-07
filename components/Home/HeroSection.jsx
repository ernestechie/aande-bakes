import { Wrapper } from '@/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import heroImage from '../../assets/hero-image-3.png';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <header className='bg-light w-full'>
      <Wrapper>
        <section className='mt-8 sm:mt-16 w-full gap-4 min-h-[512px] md:min-h-[460px] items-center'>
          <div className='relative min-h-[512px] md:min-h-[460px] h-full rounded-lg shadow-xl overflow-hidden p-8 bg-accent'>
            <div className='relative z-10 pt-8'>
              <p className='text-xl sm:text-2xl font-semibold text-red-100'>
                3 flavours to choose from
              </p>
              <h2 className='font-extrabold text-5xl text-white sm:text-6xl my-6 lg:text-7xl w-full md:w-[60%] xl:w-[75%]'>
                Best Deals on A&E Bakes
              </h2>
              <Link
                href='/products'
                className='py-4 px-8 border-2 font-semibold rounded-full text-white flex items-center gap-4 bg-blur max-w-[240px]'
              >
                Start Shopping
                <MdKeyboardArrowRight className='text-2xl' />
              </Link>
            </div>
            <Image
              src={heroImage}
              alt='A & E bakes chinchin resealable bad'
              className='absolute w-[70%] left-[60%] -bottom-[30%] -translate-x-[25%] sm:w-[60%] sm:-bottom-[60%] md:-bottom-[80%] md:w-[50%] lg:w-[35%] lg:left-[70%]'
            />
          </div>
        </section>
      </Wrapper>
    </header>
  );
};

export default HeroSection;
