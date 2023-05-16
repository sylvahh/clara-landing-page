import React from 'react';
import shawarma2 from '../assets/shawarma2.jpeg';

type dropdownProps = {
  showCart: boolean;
  setShowCart: any;
  scroll: boolean;
};
const CartDropdown = ({ showCart, setShowCart, scroll }: dropdownProps) => {
  return (
    <div
      onMouseLeave={() => setShowCart(false)}
      className={`${
     showCart ? ' opacity-100  transform -translate-y-0' : ' delay-300 opacity-0 translate-y-full'
      } fixed top-[70%] ${
        scroll ? 'right-[5%]' : 'right-[20%]'
      } flex flex-col space-y-5 transition-all duration-300 ease-in-out w-[25%] h-[300px]  bg-white shadow-md z-50 p-5`}
    >
      <div className='flex flex-col items-center space-y-3 overflow-y-auto cart-scroll  w-full h-full p-2 '>
        <div className='flex justify-between items-start w-full'>
          <img src={shawarma2} width={'25%'} alt='' />
          <div className='flex flex-col'>
            <span className='text-tertiary-100'>shawarma</span>
            <span className=''>
              {' '}
              1 x <span className='text-tertiary-100 font-semibold'>₦ 8,840</span>
            </span>
          </div>
          <button className='text-primary font-bold text-xl'>x</button>
        </div>
        <div className='flex justify-between items-start w-full'>
          <img src={shawarma2} width={'25%'} alt='' />
          <div className='flex flex-col'>
            <span className='text-tertiary-100 capitalize'>shawarma</span>
            <span className=''>
              {' '}
              1 x <span className='text-tertiary-100 font-semibold'>₦ 8,840</span>
            </span>
          </div>
          <button className='text-primary font-bold text-xl'>x</button>
        </div>
      </div>
      <div className='space-y-3'>
        <div className='flex justify-between'>
          <span className=' text-black-sub font-semibold text-lg'> Total</span>
          <span className=' text-tertiary-100 font-bold text-lg'>₦12,000</span>
        </div>
        <div className='flex justify-between'>
          <a href='/supermarkets/blenco/carts' className=' px-3 py-2 text-white font-semibold bg-tertiary-100 rounded-md hover:bg-primary transition-all duration-500'>View Cart </a>
          <a href='/supermarkets/blenco/checkout' className=' px-3 py-2 text-white font-semibold bg-tertiary-100 rounded-md hover:bg-primary transition-all duration-500'>Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
