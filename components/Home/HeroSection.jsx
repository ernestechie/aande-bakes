import { Wrapper } from '@/index';
import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import heroImage from '../../assets/hero-image.png';

const HeroSection = () => {
  return (
    <header className='bg-gray w-full'>
      <Wrapper>
        <section className='mt-16 w-full grid grid-cols-1 xl:grid-cols-3 gap-4 min-h-[512px] md:min-h-[400px] items-center'>
          <div className='relative min-h-[512px] md:min-h-[400px] bg-accent lg:col-span-2 h-full rounded-lg shadow-xl overflow-hidden p-8'>
            <div className='relative z-10 pt-8'>
              <p className='text-xl sm:text-2xl font-semibold text-red-100'>
                4 flavours to choose from
              </p>
              <h2 className='font-extrabold text-5xl text-white sm:text-6xl my-6 lg:text-7xl w-full md:w-[60%] xl:w-[75%]'>
                Best deals on A&E Bakes
              </h2>
              <button className='py-4 px-8 border-2 font-semibold rounded-full text-white flex items-center gap-4 bg-blur'>
                Start Shopping
                <MdKeyboardArrowRight className='text-2xl' />
              </button>
            </div>
            <Image
              src={heroImage}
              alt='Minimie chin chin'
              className='absolute w-[80%] left-[50%] -bottom-[40%] -translate-x-[25%] sm:w-[60%] md:-bottom-[60%] lg:w-[50%] sm:left-[75%] '
            />
          </div>
          <div className='lg:col-span-1 w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-4 mx-auto'>
            <div className='bg-primary p-4 h-[300px] md:h-[200px] w-full rounded-lg shadow-xl'></div>
            <div className='bg-pink-600 p-4 h-[300px] md:h-[200px] w-full rounded-lg shadow-xl'></div>
            <div className='bg-green-500 p-4 h-[300px] md:h-[200px] w-full rounded-lg shadow-xl'></div>
            <div className='bg-purple-500 p-4 h-[300px] md:h-[200px] w-full rounded-lg shadow-xl'></div>
          </div>
        </section>
      </Wrapper>
    </header>
  );
};

export default HeroSection;
