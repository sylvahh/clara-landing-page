import React, { useEffect, useState } from 'react';
import logo from '../assets/logo~green.png';
const TopNav = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerHeight = header.offsetHeight;
        if (window.scrollY > headerHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className='  fixed top-0 left-0 right-0   pb-10 backdrop-blur-[0.8px]  z-40'>
      <div className={`${scrolled? 'bg-white shadow-lg py-2': 'bg-primary py-3 sm:py-5 shadow '} px-5 sm:px-10 transition-all  `}>

      <div className='flex justify-between    items-center'>
        <a href='' className='w-full  sm:w-auto'>
          <img src={logo} alt='logo' className={`${scrolled? 'w-[40%]': 'w-[60%] '}`} />
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
