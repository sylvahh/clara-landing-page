import React, { Fragment } from 'react';
import MarketDropDown from '../components/MarketsDropdown';
import TopNav from '../components/TopNav';
import blenco from '../assets/blenco.png';
import supermarket from '../assets/supermarket.png';
import Cards from '../components/cards/Cards';

const HomePage = () => {
  return (
    <Fragment>
      <TopNav />

      <div className='flex  justify-between mt-[6rem] px-5 sm:px-10'>
        <div className='w-full text-[55px]'>
          <h1>
            Shop from your <span className='text-primary  underline'> favourite supermarket</span>{' '}
            right here
          </h1>
        </div>
        {/* <div className='w-fu  text-center bg-black'> */}

        <MarketDropDown />
        {/* </div> */}
      </div>
      <div className='px-5 sm:px-10 my-[10rem]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
          <Cards title='Supermarkets in Lagos Island' image={blenco} />
          <Cards title='Supermarkets in Lagos Mainland' image={supermarket} />
        </div>
        <div className='flex justify-end my-10 sm:pr-10'> <a href="/" className='text-lg font-semibold text-primary hover:text-secondary  hover:-translate-y-1 transition-all py-5 '> See all supermarkets &gt;&gt; </a></div>
      </div>
    </Fragment>
  );
};

export default HomePage;
