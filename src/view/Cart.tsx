import React from 'react';
import shawarma2 from '../assets/shawarma2.jpeg';
import { arrowLeft, imageBaseUrl, trash } from '../utilities';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/StoreProvider';
import {useState, useEffect} from 'react'



const Cart = () => {
  const Navigate = useNavigate()
  const { cartUtils } = useStore()
  const getCartData = sessionStorage.getItem('cartData')
  const cartData:any[] = getCartData? JSON.parse(getCartData): []

  const handleQuantity = (productID : string , quantCase: string) => {    
    cartUtils(productID,'UPDATE',quantCase)
  }

  const handleDeleteItem = (productId :string ) => {
    cartUtils(productId, 'REMOVE')
  }
useEffect(() => {
  
}, [])

  const item = !cartData ? <p>no item in the cart yet</p> : cartData.map((item: {product_id:string,  p_name: string, img: string, quantity:string, c_price:string, subTotal: number, }, idx) => {
    return    <tr className='text-left' key={idx}>
    <td className='px-6 py-4'>
      <img src={imageBaseUrl+item.img} height={'auto'} alt='' className='rounded-lg object-contain w-[100%]'/>
    
    </td>
    <td className='px-6 py-4'>
        <span className=' font-semibold text-sm sm:text-lg '>{item.p_name}</span>
    </td>
    <td className='px-6 py-4 font-medium text-lg'>
      <span>₦{item.c_price}</span>
    </td>
      <td className='px-6 py-4'>
        <div className='flex space-x-3 font-bold text-lg'>
    
        <button onClick={()=> handleQuantity(item.product_id, 'INCREMENT')} className=' font-semibold text-lg'>+</button>
          <span className='px-4 py-3 border rounded'>{item.quantity }</span>
        <button onClick={()=> handleQuantity(item.product_id,'DECREMENT')} className=' font-semibold text-lg'>-</button>
        </div>
    </td>
    <td className='px-6 py-4 font-medium text-lg'> <span> ₦{item.subTotal} </span></td>
    <td className='px-6 py-4'>
      {' '}
      <button onClick={()=> handleDeleteItem(item.product_id)} className=' text-red-600'>{trash}</button>{' '}
    </td>
    </tr>
  }) 
 
  return (
    <div className='px-5'>
      <div className={` block w-full py-10 sm:mt-[8rem]`}> </div>

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
                <th scope='col' className=' sr-only px-6 py-3 font-semibold text-black-sub'>
                  product name
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
            </tbody>
          </table>
        </div>

        <div className='flex flex-col  lg:w-[30%] border rounded-md p-5  space-y-3 shadow-md '>
          <div className='flex justify-between border rounded-md border-black-sub p-3'>
            <span className=' font-semibold text-lg text-black-sub'>Subtotal</span>
            <span className='font-bold text-lg text-tertiary-100'>₦3,380</span>
          </div>
          <button onClick={()=> Navigate('/login')} className='bg-tertiary-100 text-white font-semibold hover:bg-primary transition-all duration-500 p-3 rounded-md '>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className=' mt-5 sm:mt-10 mb-20 sm:mb-20'>
        <button onClick={()=>  window.history.go(-1)} className='flex  sm:bg-tertiary-100 text-tertiary sm:text-white hover:bg-primary transition-all duration-500 p-3 rounded-md  text-lg font-bold  '>
          {arrowLeft} <span className='ml-3'> Continue shopping </span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
