import React from 'react';
import { cart, imageBaseUrl, ratings } from '../../utilities';
import { useStore } from '../../store/StoreProvider';

type productProps = {
  id: string;
  name: string;
  image: any;
  newPrice: string;
  oldPrice: string;
};

const Products = (props: productProps) => {
  const { id, name, image, newPrice, oldPrice } = props;
  const { cartUtils } = useStore();
  return (
    <div className='rounded-md border p-3  hover:border-alt-tertiary hover:shadow-md transition-all duration-500'>
      <div className=' flex flex-col  '>
        <div className='card-zoom  rounded-lg w-full h-[100%] bg-slate-500 '>
          <img
            src={imageBaseUrl + image}
            alt=''
            className='object-cover w-full h-full card-zoom-image'
          />
        </div>
        <div className='flex flex-col py-5  justify-start'>
          <button className='text-left font-bold h-[100px] overflow-hidden sm:text-xl text-alt-sec hover:text-tertiary-100 transition-all duration-500'>
            {name}
          </button>
          {ratings}
        </div>
        <div className='flex flex-col space-y-3 lg:space-y-0 lg:space-x- lg:flex-row justify-between items-start'>
          <div className='flex justify-between lg:flex-col w-full '>
            <span className=' sm:text-xl font-bold text-tertiary-100'>{'₦' + newPrice}</span>
            {Number(oldPrice) > 0 && (
              <span>
                {' '}
                ₦ <s className='  text-bold text-base text-black-sub'> {oldPrice} </s>
              </span>
            )}
          </div>
          <button
            onClick={() => cartUtils(id, 'ADD')}
            className='w-full lg:w-auto  sm:inline-flex sm:justify-center sm:items-center sm:space-x-3 px-5 py-2 sm:p-3 rounded-md bg-tertiary-100 hover:bg-primary transition-all duration-500 text-white font-semibold  text-base'
          >
            {cart} <span> Add </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
