import React, { Fragment, useEffect, useState } from 'react';
import logo from '../assets/logo~green.png';
import { useLocation } from 'react-router-dom';
import hotDeals from '../assets/icon-hot.svg';
import cart from '../assets/icon-cart.svg';
import headphone from '../assets/icon-headphone.svg';
import SubNav from './SubNav';
import { findPaths } from '../utilities';
import SideDrawer from './SideDrawer';
import MobileViewNav from './MobileViewNav';
import SubNavBtn from './SubNavBtn';
const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hasSubNav, setHasSubNav] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)


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
      <header className='  fixed top-0 left-0 right-0   pb-10 backdrop-blur-[0.1px]  z-40'>
        <div className={`${checks()} px-5  transition-all  `}>
          <div className='flex justify-between    items-center'>
            <a href='' className='w-full  sm:w-auto'>
              <img src={logo} alt='logo' className={`${scrolled ? 'w-[40%]' : 'w-[50%] '}`} />
            </a>
            <div className={`${!scrolled? 'hidden' : 'block'} transition-all duration-500`}> 

            <ul className='flex space-x-10 w-full '>
        <li>
          <a
            onMouseEnter={()=> setShowDrawer(false)}
            
            href='/'
            className='capitalize font-bold text-lg  text-alt-sec active:text-tertiary-100'
          >
            {' '}
            home{' '}
          </a>
        </li>
        <li>
          <a
            onMouseEnter={()=> setShowDrawer(false)}
            href='/'
            className='capitalize font-bold text-lg  text-alt-sec active:text-tertiary-100'
          >
            {' '}
            about{' '}
          </a>
        </li>
        <SubNavBtn showDrawer={showDropdown}  setShowDrawer={setShowDropdown}/>
        <li>
          <a
            onMouseEnter={()=> setShowDrawer(false)}
            
            href='/'
            className='capitalize font-bold text-lg  text-alt-sec active:text-tertiary-100'
          >
            {' '}
            blog
          </a>
        </li>
        <li>
          <a
            onMouseEnter={()=> setShowDrawer(false)}
            
            href='/'
            className='inline-flex capitalize font-bold text-lg  text-alt-sec active:text-tertiary-100'
          >
            <img src={hotDeals} alt=' icon hot' /> deals{' '}
          </a>
        </li>
      </ul>
</div>
            <div className='flex space-x-20 sm:text-lg w-full sm:w-auto'>
              <button className='hidden sm:block font-semibold text-tertiary bg-white py-2 px-5 hover:bg-gray-200 hover:text-secondary rounded-lg'>
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
        <div className={`${scrolled? 'hidden' : 'block'} transition-all duration-500`}> 

        <SubNav/>
        </div>
      </header>
        <SideDrawer showDrawer={showDrawer} closeDrawer={setShowDrawer} />

      {/* mobile view */}
      <MobileViewNav hasSubNav={hasSubNav} setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
    </Fragment>
  );
};

export default React.memo(TopNav);
