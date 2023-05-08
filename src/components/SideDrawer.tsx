import React, { useEffect, useState } from 'react';
import logo from '../assets/logo~green.png';
import { downChevron, findPaths, usericon } from '../utilities';
import hotDeals from '../assets/icon-hot.svg';
import cart from '../assets/icon-cart.svg';
import headphone from '../assets/icon-headphone.svg';
import facebook from '../assets/icon-facebook-white.svg';
import twitter from '../assets/icon-twitter-white.svg';
import instagram from '../assets/icon-instagram-white.svg';




type drawerProps = {
  showDrawer: boolean;
  closeDrawer: any;
};

const SideDrawer = (props: drawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { showDrawer, closeDrawer } = props;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={`${
        showDrawer ? ' duration-300 translate-x-0 ' : ' transition-all delay-100  -translate-x-full'
      } fixed  bg-white  z-40 inset-0 transform ease-in-out`}
    >
      <div className=''>
        <div className='flex justify-between p-5'>
          <a href='/' className='w-full  sm:w-auto'>
            <img src={logo} alt='logo' className='w-[30%]' />
          </a>
          <button
            onClick={() => closeDrawer(false)}
            className='text-black font-semibold bg-tertiary-100 h-6 w-6 inline-flex justify-center items-center rounded-md bg-opacity-75'
          >
            X
          </button>
        </div>
        <hr />
        <div className='p-5'>
          <div className='flex flex-col space-y-5'>
            <ul className='flex flex-col space-y-8 w-full'>
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
                  className='capitalize font-semibold text-lg  text-black-sub active:text-tertiary-100 inline-flex items-center justify-between w-full'
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
          </div>
          <hr className='my-5' />
          <div className=' flex flex-col space-y-3 mt-5'>
            <div className=''>
              <a href='/' className='flex space-x-5 font-normal text-lg '>
                <img src={cart} alt='cart' />
                <span className='text-tertiary-100'>Add supermarket</span>
              </a>
            </div>
            <div className=''>
              <a href='/' className='flex space-x-5 font-normal text-lg '>
                {' '}
                {usericon} <span className='text-tertiary-100'>Log In/Sign up</span>
              </a>
            </div>
            <div className=''>
              <a href='/' className='flex space-x-5 font-normal text-lg '>
                <img src={headphone} alt='headohone' className='w-6' />
                <span className='text-tertiary-100'>+234 905 894 7580</span>
              </a>
            </div>
          </div>

          <div className='my-10'>
            <h1 className='font-bold'>Follow us</h1>
            <div className='flex space-x-5 mt-1'>
              <a href='/' className='p-1 rounded-full bg-tertiary-100'> <img className='w-5' src={twitter} alt="twitter" /></a>
              <a href='/' className='p-1 rounded-full bg-tertiary-100'> <img className='w-5' src={facebook} alt="facebook" /></a>
              <a href='/' className='p-1 rounded-full bg-tertiary-100'> <img className='w-5' src={instagram} alt="instagram" /></a>
            </div>
          </div>
          <small className='block text-center '>Copyright 2023 © Clara. All rights reserved. </small>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
