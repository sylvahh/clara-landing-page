import React from 'react';
import logo from '../assets/logo~green.png';
const TopNav = () => {
  return (
    <header className='  fixed top-0 left-0 right-0   pb-10 backdrop-blur-[1.5px]  z-40'>
      <div className='bg-primary px-5 sm:px-10  shadow-lg py-3'>

      <div className='flex justify-between    items-center'>
        <a href='' className='w-full  sm:w-auto'>
          <img src={logo} alt='logo' className=' w-[50%] sm:w-auto' />
        </a>
        <div className='flex space-x-20 sm:text-xl w-full sm:w-auto'>
          <button className='hidden sm:block text-tertiary bg-white py-2 px-5 hover:bg-gray-200 hover:text-secondary rounded-lg'>
            {' '}
            Add Supermarket
          </button>
          <button className='text-tertiary bg-transparent  hover:text-secondary font-semibold'>
            {' '}
            My Account
          </button>
        </div>
      </div>
      </div>
    </header>
  );
};

export default React.memo(TopNav);
