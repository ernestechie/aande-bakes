import { HeadWrapper, Navbar, Wrapper } from '@/index';
import React from 'react';

const Wishlist = () => {
  return (
    <div>
      <HeadWrapper />
      <Navbar />
      <Wrapper>
        <section className='mt-16'>
          <p className='text-4xl'>Wishlist</p>
        </section>
      </Wrapper>
    </div>
  );
};

export default Wishlist;
