import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { HeadWrapper, Navbar, Wrapper } from '@/index';
import products from '@/public/products';
import Image from 'next/image';
import { formatAmountToNaira } from '@/utils/parseCurrency';

const ProductDetails = (props) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  return (
    <div>
      <HeadWrapper />
      <Navbar />
      <Wrapper>
        <section className='mt-16 w-full max-w-[960px] mx-auto '>
          <div
            className='flex items-center gap-2 my-8 cursor-pointer'
            onClick={() => window.history.back()}
          >
            <MdOutlineKeyboardArrowLeft />
            <span className='font-semibold'>Go Back</span>
          </div>
          {props.currentProduct && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-16 md:pb-4'>
              <Image
                src={props.currentProduct?.imageUrl}
                alt={props.currentProduct?.name}
                className='rounded-lg h-[400px] object-cover'
                width={500}
                height={500}
              />
              <div>
                <p className='font-semibold text-3xl mb-2'>
                  {props.currentProduct?.name}
                </p>
                <p className='text-dark my-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem aspernatur, non quae esse sint ipsa fuga possimus iste
                  totam suscipit?
                </p>
                <p className='font-black text-3xl my-2 text-dark'>
                  {formatAmountToNaira(parseInt(props.currentProduct?.price))}
                </p>

                <div className='flex mt-8 gap-4 fixed left-0 w-full bottom-0 py-3 px-4 bg-white md:relative md:p-0 md:bg-transparent'>
                  <div className='flex items-center bg-slate-100 rounded-sm'>
                    <button
                      className='p-4 text-xl'
                      onClick={() =>
                        setQuantityToAdd((prev) => (prev > 1 ? prev - 1 : 0))
                      }
                    >
                      -
                    </button>
                    <span className='p-4'>{quantityToAdd}</span>
                    <button
                      className='p-4 text-xl'
                      onClick={() => setQuantityToAdd((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className='w-full md:w-auto px-16 py-4 bg-accent rounded-sm font-semibold text-white'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async ({ params }) => {
  const currentProduct = products.find(
    (product) => product._id === params.productId
  );

  return {
    props: {
      currentProduct,
    },
  };
};
