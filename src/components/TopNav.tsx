import React, { Fragment, useEffect, useState } from 'react';
import logo from '../assets/logo~green.png';
import { useLocation } from 'react-router-dom';
import MarketsDropdown from './MarketsDropdown';
import SubNav from './SubNav';
import { findPaths } from '../utilities';
import SideDrawer from './SideDrawer';
import MobileViewNav from './MobileViewNav';
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
      <header className='  fixed top-0 left-0 right-0   pb-10 backdrop-blur-[0.1px]  z-40'>
        <div className={`${checks()} px-5  transition-all  `}>
          <div className='flex justify-between    items-center'>
            <a href='' className='w-full  sm:w-auto'>
              <img src={logo} alt='logo' className={`${scrolled ? 'w-[40%]' : 'w-[50%] '}`} />
            </a>
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
        <SubNav />
      </header>
        <SideDrawer showDrawer={showDrawer} closeDrawer={setShowDrawer} />

      {/* mobile view */}
      <MobileViewNav hasSubNav={hasSubNav} setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
    </Fragment>
  );
};

export default React.memo(TopNav);
