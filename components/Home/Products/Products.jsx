import { ProductCard, Wrapper } from '@/index';
import React from 'react';
import products from '@/public/products';

const Products = () => {
  return (
    <section className='bg-light'>
      <Wrapper>
        <h3 className='font-extrabold text-3xl md:text-4xl'>Our Products</h3>
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-16'>
          {products.map((product, index) => (
            <ProductCard key={`${index}_${product._id}`} product={product} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Products;
