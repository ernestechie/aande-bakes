import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { formatAmountToNaira } from '@/utils/parseCurrency';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className='mx-auto relative w-full max-w-sm overflow-hidden cursor-pointer duration-500 card p-2'>
      <Link href={`/products/${product?._id}`}>
        <Image
          className='w-full h-72 object-cover rounded-lg bg-center'
          src={product?.imageUrl}
          alt='Card image'
          width={600}
          height={600}
        />
      </Link>
      <div className='px-6 py-4'>
        <p className='text-dark font-semibold mb-2'>{product?.name}</p>

        <p className='font-extrabold text-2xl mb-2 text-dark'>
          {formatAmountToNaira(product?.price)}
        </p>
      </div>
      <div className='px-2 mt-2 flex gap-8 items-center justify-between'>
        <button className='w-full px-8 py-4 bg-accent rounded-md font-semibold text-white'>
          Add to cart
        </button>
        <button className='p-2 border-[1px] border-dark rounded-full'>
          <BsHeart className='cursor-pointer text-red-500' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
