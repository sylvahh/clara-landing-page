import React from 'react';
import Store from '../../components/cards/Store';

const Supermarket = () => {
  return (
    <div className=' px-5 mt-10  w-full h-full'>
      <div className='flex flex-col py-8 justify-center w-full h-full  space-y-5 items-center'>
        <h1 className='font-extrabold  sm:text-[48px] sm:leading-[56px] text-alt-sec p-1  '>
          Blenco Market
        </h1>
        <span className='block font-bold text-2xl capitalize text-tertiary-100'>ajah-cheveron</span>
      </div>
      <hr />
      <div className=' grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10 mb-20 lg:mb-10 '>
        <Store />
        <Store />
        <Store/>
        <Store/>
        
        
      </div>
    </div>
  );
};

export default Supermarket;
