import React from 'react';
import MarketsDropdown from './MarketsDropdown';
import { downChevron, findPaths } from '../utilities';
import hotDeals from '../assets/icon-hot.svg';
import cart from '../assets/icon-cart.svg';
import headphone from '../assets/icon-headphone.svg';

const SubNav = () => {
  const forebiddenPaths = ['/', '/supermarkets', 'localmarkts'];

  return (
    <div
      className={`${
        !findPaths(forebiddenPaths) ? 'hidden' : 'hidden sm:flex'
      } space-x-12   px-20 py-5  w-full `}
    >
      <div className='hidden sm:block w-[50%]'>
        <MarketsDropdown />
      </div>
      <ul className='flex space-x-10 w-full'>
        <li>
          <a
            href='/'
            className='capitalize font-semibold text-lg  text-black-sub active:text-tertiary-100'
          >
            {' '}
            home{' '}
          </a>
        </li>
        <li>
          <a
            href='/'
            className='capitalize font-semibold text-lg  text-black-sub active:text-tertiary-100'
          >
            {' '}
            about{' '}
          </a>
        </li>
        <li>
          <a
            href='/'
            className='capitalize font-semibold text-lg  text-black-sub active:text-tertiary-100 inline-flex items-center'
          >
            {' '}
            markets {downChevron}
          </a>
        </li>
        <li>
          <a
            href='/'
            className='capitalize font-semibold text-lg  text-black-sub active:text-tertiary-100'
          >
            {' '}
            blog
          </a>
        </li>
        <li>
          <a
            href='/'
            className='inline-flex capitalize font-semibold text-lg  text-black-sub active:text-tertiary-100'
          >
            <img src={hotDeals} alt=' icon hot' /> deals{' '}
          </a>
        </li>
      </ul>
      <div className='flex justify-between w-full'>
        <button
          type='button'
          className='relative inline-flex   text-sm font-medium text-center text-white  '
        >
          <img src={cart} alt='shopping cart' />
          <span className='sr-only'>Cart</span>

          <div className='absolute inline-flex items-center justify-center   w-5 h-5 text-xs font-bold text-white bg-tertiary-100 rounded-full -top-2 -right-2'>
            20
          </div>
        </button>

        <div className='inline-flex items-center gap-3'>
          <img src={headphone} alt='head phone' />
          <div className='flex flex-col items-center '>
            <span className='text-tertiary-100 lg:text-2xl font-semibold'>+234 905 894 7580</span>
            <small>24/7 Support Center</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
