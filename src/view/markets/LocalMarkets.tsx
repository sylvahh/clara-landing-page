import React from 'react';
import SupermarketsCards from '../../components/cards/SupermarketsCards';
import { useStore } from '../../store/StoreProvider';
import { marketLoading } from '../../utilities';

const LocalMarkets = () => {
  const {isLoading ,localmarket} = useStore()
  const loadingList = (
    <>
      {marketLoading}
      {marketLoading}
      {marketLoading}
      {marketLoading}
    </>
  );
  const mappedList = localmarket.map(({market_name, location, market_img, market_logo, city, id}) => {
    return <SupermarketsCards key={id} id={id} name={market_name} location={location} city={city} image={market_img} logo={market_logo} />
  })
  return (
    <section className='relative px-5 sm:px-10 mt-[6rem] sm:mt-[10rem] '>
      <div>
        <h1 className='text-[24px] md:text-[35px] lg:text-[55px] font-bold'>
          Top selling <span className='text-tertiary underline'> Local market </span>
        </h1>
        <small>Select Local market and start shopping</small>
        <small className='text-right block '>
          Can’t find your favourite Local market? <br />
          <a
            href='/'
            className=' font-semibold  underline  decoration-tertiary hover:decoration-primary '
          >
            {' '}
            Send us the name
          </a>
        </small>
      </div>

      <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 mb-20 lg:mb-10'>
      {isLoading ? loadingList : mappedList}
        
      </div>

      <a href='/' className=' underline  decoration-tertiary hover:decoration-primary text-left '>
        {' '}
        Discover all Local markets
      </a>

      {/* <div className='absolute left-0  bg-primary flex justify-between  w-full mt-5 sm:mt-10 px-5 sm:px-10 shadow-sm'>
        <small className='text-white underline decoration-white  '>Ad</small>
        <img src={adImg} alt='ad' className='w-[25%] sm:w-[10%] ' />
        <h1 className='text-[16px] md:text-[35px] lg:text-[50px] text-center font-semibold '>
          Enjoy 15% discount on all Indomie Noodles
        </h1>
      </div> */}

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-20 my-[8rem] sm:my-[12rem]'>
      </div>
    </section>
  );
};

export default LocalMarkets;
