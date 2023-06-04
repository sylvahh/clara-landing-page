import React from 'react';
import { CART_EMPTY, imageBaseUrl, numberWithCommas } from '../utilities';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/StoreProvider';

type dropdownProps = {
  showCart: boolean;
  setShowCart: any;
  scroll: boolean;
};
const CartDropdown = ({ showCart, setShowCart, scroll }: dropdownProps) => {
  const Navigate = useNavigate();
const {cartItems:CTXitems, cartTotal, cartUtils}= useStore()
  const cartItems = CTXitems.length ? CTXitems.map(({product_id, c_price, p_name, img, quantity, }, idx) => {
   return <div key={idx} className='flex justify-between gap-5 items-start w-full'>
    <img src={imageBaseUrl+img} width={'25%'} alt='' />
    <div className='flex flex-col text-left'>
       <span className='text-black-sub font-semibold'>{ p_name}</span>
      <span className='text-black-sub font-medium'>
        {' '}
        {quantity} x <span className='text-tertiary-100 font-semibold'>₦ {numberWithCommas(c_price)}</span>
      </span>
    </div>
    <button onClick={()=>removeFromCart(product_id,"REMOVE")} className='text-primary font-bold text-xl'>x</button>
  </div>
  }): CART_EMPTY 


  const removeFromCart = (id: string, cartCase: string) => {
   cartUtils(id,cartCase)
 }
  return (
    <div
      onMouseLeave={() => setShowCart(false)}
      className={`${
        showCart
          ? ' opacity-100  transform -translate-y-0'
          : ' delay-300 opacity-0 translate-y-full'
      } fixed top-[70%] ${
        scroll ? 'right-[5%]' : 'right-[20%]'
      } hidden lg:flex flex-col space-y-5 transition-all duration-300 ease-in-out w-[25%] h-[300px]  bg-white shadow-md z-50 p-5`}
    >
      <div className='flex flex-col items-center space-y-3 overflow-y-auto cart-scroll  w-full h-full p-2 '>
      {cartItems}

      </div>
      <div className='space-y-3'>
        <div className='flex justify-between'>
          <span className=' text-black-sub font-semibold text-lg'> Total</span>
          <span className=' text-tertiary-100 font-bold text-lg'>₦{numberWithCommas(cartTotal)}</span>
        </div>
        <div className='flex justify-between'>
          <button
            onClick={() => Navigate(window.location.pathname + '/cart')}
            className=' px-3 py-2 text-white font-semibold bg-tertiary-100 rounded-md hover:bg-primary transition-all duration-500'
          >
            View Cart{' '}
          </button>
          <button
            onClick={() => Navigate('/login')}
            className=' px-3 py-2 text-white font-semibold bg-tertiary-100 rounded-md hover:bg-primary transition-all duration-500'
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
