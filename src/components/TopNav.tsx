import React, { Fragment, useEffect, useState } from 'react';
import logo from '../assets/logo~green.png';
import { useLocation } from 'react-router-dom';
import MarketsDropdown from './MarketsDropdown';
import SubNav from './SubNav';
import { findPaths } from '../utilities';
import SideDrawer from './SideDrawer';
const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hasSubNav, setHasSubNav] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false)

  const forebiddenPaths = ['/', '/supermarkets', 'localmarkts'];

  const checks = (): string => {
    if (scrolled) return 'bg-white shadow-lg py-2';
    else if (hasSubNav) return 'shadow-lg  sm:bg-primary sm:shadow-none py-3';
    else return 'bg-primary py-3 sm:py-5 shadow';
  };
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        if (window.scrollY > headerHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    setHasSubNav(findPaths(forebiddenPaths));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment >
      <header className='  fixed top-0 left-0 right-0   pb-10 backdrop-blur-[0.8px]  z-40'>
        <div className={`${checks()} px-5  transition-all  `}>
          <div className='flex justify-between    items-center'>
            <a href='' className='w-full  sm:w-auto'>
              <img src={logo} alt='logo' className={`${scrolled ? 'w-[40%]' : 'w-[60%] '}`} />
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
        <SubNav />
      </header>
        <SideDrawer showDrawer={showDrawer} closeDrawer={setShowDrawer} />

      {/* mobile view */}
      <div className={`${!hasSubNav && 'hidden'} w-[100%]   fixed bottom-0 bg-primary`}>
        <div className='flex justify-between px-5 py-5 sm:px-10 w-[100%]  transition-all  sm:text-xl  sm:w-auto lg:hidden'>
          <button  onClick={()=> setShowDrawer(!showDrawer)}  className=' text-black flex items-center  space-x-1  bg-transparent  hover:text-tertiary  transition-all'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
            {/* <span>Account</span> */}
          </button>
          <button className=' text-black flex items-center  space-x-1  bg-transparent  hover:text-tertiary  transition-all'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
            {/* <span>Account</span> */}
          </button>
          <button className=' text-black flex items-center  space-x-1  bg-transparent  hover:text-tertiary  transition-all'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
            {/* <span>Account</span> */}
          </button>

          <button className=' relative text-black flex items-center  space-x-1  bg-transparent  hover:text-tertiary  transition-all '>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>
            <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-white  rounded-full -top-3 -right-3'>
              20
            </div>
          </button>
          <button className='relative text-black flex items-center  space-x-1  bg-transparent  hover:text-tertiary  transition-all'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
            <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-white  rounded-full -top-3 -right-3'>
              20
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(TopNav);
