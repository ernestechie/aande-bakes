import { Wrapper } from '@/index';
import Image from 'next/image';
import React from 'react';
import img from '../../../assets/hero-image-3.png';
import { formatAmountToNaira } from '@/utils/parseCurrency';
import products from '@/public/products';

const Products = () => {
  return (
    <section className='bg-gray'>
      <Wrapper>
        <h3 className='font-extrabold text-3xl md:text-4xl'>Our Products</h3>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
          {products.map((product, index) => (
            <div
              key={product?._id}
              className='relative max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl duration-500 card'
            >
              <Image
                className='w-full h-64 object-cover'
                src={product?.imageUrl}
                alt='Card image'
                width={100}
                height={100}
              />
              <div className='px-6 py-4'>
                <p className='text-dark font-semibold mb-2'>{product?.name}</p>
                <p className='font-extrabold text-2xl mb-2 text-accent'>
                  {formatAmountToNaira(product?.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Products;
