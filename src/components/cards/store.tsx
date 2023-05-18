import React from 'react';
import blenco from '../../assets/blenco~logo.png';
import { arrowRight, imageBaseUrl, ratings } from '../../utilities';

type StoreProps = {
  id: string;
  name: string;
  image: string;
  products: string;
  whatsAppLink: string | undefined;
};

const Store = (props: StoreProps) => {
  const { id, name, image, products, whatsAppLink } = props;
  return (
    <div className='relative rounded-lg h-full shadow-sm shadow-black hover:shadow-black hover:shadow-md hover:-translate-y-0.5 transition-all'>
      <div className='flex flex-col lg:flex-row  lg:justify-between p-5 w-full '>
        <div className='flex flex-col items-center lg:items-start space-y-3 lg:w-[50%]'>
          <div className='flex justify-center  items-start'>

          <img src={imageBaseUrl + image} alt='logo' className=' lg:w-[85%]  lg:h-[100px] object-contain' />
          </div>
          <span className='hidden lg:block bg-[#ccc] w-fit p-2 rounded-md text-tertiary-100'>
            <span className='mr-2 font-medium'>{products}</span> Products
          </span>
        </div>
        <div className='lg:w-[80%]'>
          <div className='mb-5 lg:mb-10'>
            <h1 className='capitalize font-bold text-2xl'>{name} </h1>

            {ratings}
            <small className='block  lg:hidden bg-[#fff] w-fit  rounded-md text-tertiary-100'>
              <span className='mr-2 font-medium'>{products}</span> Products
            </small>
          </div>
          <div className='flex flex-col space-y-5 lg:space-y-10'>
            <button className='capitalize inline-flex justify-center bg-tertiary-100 hover:bg-primary transition-all duration-500 text-white lg:w-fit font-semibold p-2  rounded-md'>
              visit store {arrowRight}
            </button>
            <a
              href={whatsAppLink}
              className='capitalize text-sm lg:text-base bg-alt-tertiary text-tertiary text-center font-semibold py-2 px-4 rounded-md lg:w-fit'
            >
              order on whatsapp
            </a>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0 inline-flex items-center bg-primary px-3 py-1 rounded-tr-md rounded-bl-2xl shadow-sm text-white font-semibold text-sm '>
        Store
      </div>
    </div>
  );
};

export default Store;
