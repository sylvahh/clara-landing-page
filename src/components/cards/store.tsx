import React from 'react';
import blenco from '../../assets/blenco~logo.png';
import { arrowRight, ratings } from '../../utilities';

const Store = () => {
  return (
    <div className='relative rounded-lg h-full shadow-sm shadow-black hover:shadow-black hover:shadow-md hover:-translate-y-0.5 transition-all'>
      <div className='flex flex-col lg:flex-row space-x- p-5 w-full '>
        <div className='flex flex-col items-center lg:items-start space-y-3'>
          <img src={blenco} alt='blenco logo' className=' w-[70%]' />
          <span className='hidden lg:block bg-[#ccc] w-fit p-2 rounded-md text-tertiary-100'>0 products</span>
        </div>
        <div>
          <div className='mb-5 lg:mb-10'>
            <h1 className='capitalize font-bold text-2xl'>blenco store </h1>

            {ratings}
          <small className='block  lg:hidden bg-[#fff] w-fit  rounded-md text-tertiary-100'>0 products</small>
          </div>
          <div className='flex flex-col space-y-5 lg:space-y-10'>
            
            <button className='capitalize inline-flex  bg-tertiary-100 hover:bg-primary transition-all duration-500 text-white lg:w-fit font-semibold p-2  rounded-md'>
              visit store {arrowRight}
            </button>
            <button className='capitalize text-sm lg:text-base bg-alt-tertiary text-tertiary font-semibold py-2 px-[3px] rounded-md'>
              order on whatsapp
            </button>
          </div>
        </div>
      </div>
        <div className='absolute top-0 right-0 inline-flex items-center bg-primary px-3 py-1 rounded-tr-md rounded-bl-2xl shadow-sm text-white font-semibold text-sm '>Store</div>
    </div>
  );
};

export default Store;
