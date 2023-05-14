import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';
import { MarketOptions, downChevron, findPaths } from '../utilities';
import hotDeals from '../assets/icon-hot.svg';
import cart from '../assets/icon-cart.svg';
import headphone from '../assets/icon-headphone.svg';
import SubNavBtn from './SubNavBtn';
import CartBtn from './CartBtn';
type subNavProps = {
  scrolled: boolean
  showCart: boolean;
  setShowCart: any;
}

const SubNav = (props:subNavProps) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const forebiddenPaths = ['/', '/supermarkets', 'localmarkts'];
  const {showCart,setShowCart, scrolled} = props

  return (
    <div
      className={`${
        !findPaths(forebiddenPaths) ? 'hidden' : 'hidden sm:flex'
      } space-x-12  px-10 xl:px-20 py-5  w-full`}
    >
      <div className='hidden sm:block w-[50%]'>
        <CustomDropdown options={MarketOptions} />
      </div>
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
        <SubNavBtn showDrawer={showDrawer}  setShowDrawer={setShowDrawer}/>
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
      <div className='flex space-x-5 relative  lg:justify-between lg:pl-10 w-full'>
        
     <CartBtn showCart={showCart} setShowCart={setShowCart} scroll={scrolled} />

        <div className='flex  items-start gap-3'>
          <img src={headphone} alt='head phone' />
          <div className='flex flex-col items-start '>
            <span className='text-tertiary-100 lg:text-2xl font-bold'>+234 905 894 7580</span>
            <small>24/7 Support Center</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
