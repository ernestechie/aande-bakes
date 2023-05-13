import { HeadWrapper, Navbar, Wrapper } from '@/index';
import React from 'react';

const Cart = () => {
  return (
    <div>
      <HeadWrapper />
      <Navbar />
      <Wrapper>
        <section className='mt-16'>
          <p className='text-4xl'>Cart</p>
        </section>
      </Wrapper>
    </div>
  );
};

export default Cart;
