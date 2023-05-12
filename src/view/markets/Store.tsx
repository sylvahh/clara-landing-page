import React from 'react';
// import CustomDropdown from '../../components/CustomDropdown';
import { itemsToShow, sortIcon, sortItem } from '../../utilities';
import CustomDropdown from '../../components/CustomDropdown';
import Products from '../../components/cards/Products';
import shawarma from '../../assets/shawarma.jpeg'
import shawarma2 from '../../assets/shawarma2.jpeg'
import girlWithshaw from '../../assets/girl-with-shawarma.jpeg'

const Store = () => {
  return (
    <div className='px-5 '>
      <div className='flex flex-col p-20  justify-center rounded-2xl bg-alt-tertiary  w-full h-full  space-y-5'>
        <h1 className='font-extrabold text-left  sm:text-[48px] sm:leading-[56px] text-alt-sec p-1  '>
          01Shawarma
        </h1>
        {/* <span className='block font-bold text-2xl capitalize text-tertiary-100'>ajah-cheveron</span> */}
      </div>

      <div className='mt-10 px-20'>
        <div className='flex justify-between items-center'>
          <span className='font-semibold text-lg block w-full'>
            We found <span className='text-tertiary-100 font-semibold'>8</span> items for you!
          </span>

          <div className='flex space-x-5 w-[30%]'>
            <div className='flex items-center border shadow  rounded-md  w-full'>
              <CustomDropdown options={itemsToShow} sideText='show:'  />
            </div>
            <div className='flex items-center border shadow  rounded-md w-full'>
              {/* {sortIcon} */}
            <CustomDropdown options={sortItem} sideText='Sorted by:' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
          <Products image={shawarma} item='Chicken Shawarma with 1 hotdog' />
          <Products image={shawarma2} item='Big shawarma with chicken, beef and 1hotdog' />
          <Products  image={girlWithshaw} item='Big Beef shawarma with 1 hotdog'/>
          <Products  image={shawarma} item='Chicken Shawarma with 1 hotdog' />

        </div>
      </div>
    </div>
  );
};

export default Store;
