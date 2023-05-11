import React from 'react';
// import CustomDropdown from '../../components/CustomDropdown';
import { itemsToShow } from '../../utilities';
import CustomDropdown from '../../components/CustomDropdown';

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

          <div className='flex space-x-5 w-[25%]'>
            {/* <div className='w-full'> */}
              {/* <CustomDropdown options={itemsToShow} /> */}
            {/* </div> */}
            {/* <div className='w-full'> */}
            <CustomDropdown options={itemsToShow} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
