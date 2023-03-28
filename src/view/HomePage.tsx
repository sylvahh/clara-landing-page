import React, { Fragment } from 'react';
import MarketDropDown from '../components/MarketsDropdown';
import TopNav from '../components/TopNav';
import blenco from '../assets/blenco.png';
import supermarket from '../assets/supermarket.png';
import ladyInCart from "../assets/ladyn'cart.png";
import vectorYellow from '../assets/Vector~yellow.png';
import vectorGreen from '../assets/Vector~green.png';

import Cards from '../components/cards/Cards';
import Carousel from '../components/carousel/Carousel';

const HomePage = () => {
  return (
    <Fragment>
      <TopNav />

      <div className='flex  justify-between space-x-10 mt-[6rem] px-5 sm:px-10'>
        <div className='w-full text-[24px] md:text-[35px] lg:text-[55px]'>
          <h1>
            Shop from your <span className='text-primary  underline'> favourite supermarket</span>{' '}
            right here
          </h1>
        </div>

        <MarketDropDown />
      </div>
      <div className='px-5 sm:px-10 my-20 sm:my-[10rem]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
          <Cards title='Supermarkets in Lagos Island' image={blenco} />
          <Cards title='Supermarkets in Lagos Mainland' image={supermarket} />
        </div>
        <div className='flex justify-end my-10 sm:pr-10'>
          {' '}
          <a
            href='/'
            className='text-lg font-semibold text-primary hover:text-secondary  hover:-translate-y-1 transition-all py-5 '
          >
            {' '}
            See all supermarkets &gt;&gt;{' '}
          </a>
        </div>
      </div>

      {/* section 2 */}
      <div className='bg-cards p-5  sm:p-10'>
        <div className='relative flex flex-col  lg:flex-row  items-center justify-between '>
          <div className='text-[24px]  sm:text-[55px] lg:absolute top-0 left-[40%] w-fit'>
            <h1>
              Order from your{' '}
              <span className='text-tertiary underline'> favourite supermarket</span>{' '}
              <span className=' text-black-sub'> online</span>
            </h1>
          </div>
          <div className=' w-100 lg:w-[60%]'>
            <img src={ladyInCart} alt='lady in cart' className='w-[100%]' />
          </div>
          <div className='flex flex-col md:flex-row lg:flex-col space-y-10 lg:space-y-0 lg:h-[100vh]  justify-center box-border '>
            <div className='flex flex-col space-y-3 items-start h-full  justify-center mt-20'>
              <input
                type='text'
                placeholder='Enter name of supermarket'
                className='rounded-md border  py-1 border-secondary w-[75%] md:w-full lg:w-[60%] placeholder:text-center '
              />
              <small className='font-semibold'>
                Can’t find your favourite Supermarket?{' '}
                <a href='/' className='text-secondary font-bold underline hover:text-primary'>
                  {' '}
                  Send us the name
                </a>
              </small>
            </div>

            <div className=' flex justify-start sm:justify-end '>
              <img src={vectorYellow} alt='vector' className='w-[75%] ' />
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className='bg-[#F5F5F5] px-5 sm:px-10 pt-20 sm:pt-[10rem]'>
        <div className='flex flex-col items-center space-y-10 '>
          <div className='text-[24px] md:text-[35px] lg:text-[55px]'>
            <h1 className='inline font-extrabold '> We deliver</h1>
            <span className='text-[35px] font-bold text-tertiary'> in minutes</span> <br />
            <p className='leading-[1] font-semibold text-[35px]'>
              {' '}
              Why <span className='text-primary'> stress yourself</span> to the <br /> supermarket
            </p>
          </div>
          <div className=' text-center'>
            <button className='py-1  px-5 border rounded-lg border-tertiary text-tertiary font-semibold'>
              {' '}
              Shop from 150+ stores near you
            </button>

          </div>
            <div className='flex justify-end sm:justify-start w-full'>
              <img src={vectorGreen} alt='vector' className='w-[50%] sm:w-[20%]  sm:ml-[12rem]' />
            </div>
        </div>
      </div>

      {/* secttion 4 */}

      <div className='bg-cards'>
  

<Carousel/>


      </div>
    </Fragment>
  );
};

export default HomePage;
