import React from 'react';
import shawarma2 from '../assets/shawarma2.jpeg';
import { arrowLeft, ratings, trash } from '../utilities';

const item =  <tr className='text-left'>
<td className='flex   justify-evenly px-6 py-4'>
  <img src={shawarma2} width={'15%'} height={'auto'} alt='' className='rounded-lg object-contain' />
  <div className='flex flex-col space-y-1'>
    <span className=' font-semibold text-lg'>Big shawarma with chicken</span>
    {ratings}
  </div>
</td>

<td className='px-6 py-4'>
  <span>₦2132</span>
</td>
<td className='px-6 py-4'>
  <input type='number' value={1} step={1} min={1} max={10} />
</td>
<td className='px-6 py-4'>₦2132</td>
<td className='px-6 py-4'>
  {' '}
  <button className=' text-red-600'>{trash}</button>{' '}
</td>
</tr>

const Cart = () => {
  return (
    <div className='px-5'>
      <div className='text-left py-10 space-y-3'>
        <h3 className='font-bold text-2xl text-black-sub'>Cart</h3>
        <span className='font-semibold text-black-sub'>
          There are <span className='text-tertiary-100'> 2</span> products in your cart
        </span>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-5'>
        <div className='relative lg:w-[70%]  h-[300px] overflow-auto cart-scroll  shadow-md sm:rounded-lg'>
          <table className='w-full  text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='sticky top-0 text-sm text-gray-700 uppercase bg-alt-tertiary'>
              <tr>
                <th scope='col' className='px-6 py-3 font-semibold text-black-sub'>
                  Product name
                </th>
                <th scope='col' className='px-6 py-3 font-semibold text-black-sub'>
                  Unit price
                </th>
                <th scope='col' className='px-6 py-3 font-semibold text-black-sub'>
                  Quantity
                </th>
                <th scope='col' className='px-6 py-3 font-semibold text-black-sub'>
                  Subtotal
                </th>
                <th scope='col' className='px-6 py-3 font-semibold text-black-sub'>
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {item}
              {item}
              {item}
              {item}
              {item}
              {item}
              {item}
              {item}
              {item}

        
             
            </tbody>
          </table>
        </div>

        <div className='flex flex-col  lg:w-[30%] border rounded-md p-5  space-y-3 shadow-md '>
          <div className='flex justify-between border rounded-md border-black-sub p-3'>
            <span className=' font-semibold text-lg text-black-sub'>Subtotal</span>
            <span className='font-bold text-lg text-tertiary-100'>₦3,380</span>
          </div>
          <button className='bg-tertiary-100 text-white font-semibold hover:bg-primary transition-all duration-500 p-3 rounded-md '>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className='my-10'>
        <button className='flex bg-tertiary-100 text-white hover:bg-primary transition-all duration-500 p-3 rounded-md  text-lg font-bold  '>
          {arrowLeft} <span className='ml-3'> Continue shopping </span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
