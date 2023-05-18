import React, { Fragment, useEffect, useContext } from 'react';
import MarketDropDown from '../components/CustomDropdown';
import TopNav from '../components/TopNav';
import blenco from '../assets/blenco.png';
import supermarket from '../assets/supermarket.png';
import womanSmiling2 from '../assets/woman_holding_groceries-removebg-preview.png';
import womanSmiling from '../assets/woman_simling-removebg-preview.png';
import vectorYellow from '../assets/Vector~yellow.png';
import vectorGreen from '../assets/Vector~green.png';
import handshake from '../assets/handshake.svg';
import constructionWorker from '../assets/construction~worker.svg';
import deviceShop from '../assets/device~shop.svg';
import reseller from '../assets/reseller.svg';
import logo from '../assets/logo~green.png';
import whatsApp from '../assets/WhatsApp.svg';
import facebook from '../assets/Facebook.svg';
import twitter from '../assets/Twitter.svg';
import mastercard from '../assets/mastercard.png';
import cardPayment from '../assets/card~payment.png';

import Cards from '../components/cards/Cards';
import Carousel from '../components/carousel/Carousel';
import { MarketOptions, getStoreById, makeApiRequest } from '../utilities';
import CustomDropdown from '../components/CustomDropdown';
import StoreContext from '../store/StoreContext';
import { useStore } from '../store/StoreProvider';

const HomePage = () => {
  // const {getStoresById} = useStore()
  
  useEffect(() => {
    // getStoresById('1')
  },[])
  return (
    <Fragment>
      <TopNav />

      <section className='mt-[6rem] sm:mt-[10rem]'>
        <div className='flex  justify-between space-x-5 sm:space-x-10  px-5 sm:px-10'>
          <div className=' w-full text-[20px] md:text-[35px] lg:text-[55px]'>
            <h1 className=''>
              Shop from your
              <span className='text-primary underline'> favourite market</span> right here
            </h1>
          </div>

          <div className='w-[50%]'>
          <CustomDropdown options={MarketOptions} />
          </div>
        </div>
        <div className='px-5 sm:px-10 my-20 sm:my-[10rem]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-20'>
            <Cards title='Supermarkets' image={blenco} path='/supermarkets' />
            <Cards title='local markets' image={supermarket} path='/localmarkets' />
          </div>
          <div className='flex justify-end my-10 sm:pr-10'>
            {' '}
            <a
              href='/'
              className='text-lg font-semibold text-tertiary hover:text-secondary  hover:-translate-y-1 transition-all py-5 '
            >
              {' '}
              See all markets &gt;&gt;{' '}
            </a>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className='bg-cards p-5  sm:p-10'>
        <div className='relative flex flex-col  lg:flex-row  items-center justify-between '>
          <div className='text-[24px]  sm:text-[55px] lg:absolute top-0  w-fit'>
            <h1>
              Become a<span className='text-tertiary underline pl-1'>shopping assistant</span> today
            </h1>
          </div>
          <div className=' w-full lg:w-[60%] mt-10 lg:mt-20'>
            <img src={womanSmiling} alt='woman smiling' className='w-[100%]' />
          </div>
          <div className='flex flex-col md:flex-row lg:flex-col space-y-10 lg:space-y-0 lg:h-[100vh]  justify-center box-border '>
            <div className='flex flex-col space-y-3 items-start h-full  justify-center mt-20'>
              <h4 className='font-semibold text-xl text-center '>
                Make money while shopping for clients
              </h4>
              <button className='bg-primary p-2 rounded w-full lg:w-auto font-semibold text-tertiary hover:text-white hover:bg-tertiary transition-colors duration-300'>
                {' '}
                Become a Shopping Assistant{' '}
              </button>
            </div>

            <div className=' flex justify-start sm:justify-end '>
              <img src={vectorYellow} alt='vector' className='w-[75%] ' />
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className='bg-[#F5F5F5] px-5 sm:px-10 pt-20 pb-10 sm:pt-[10rem]'>
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
            <span className='py-1  px-5 border rounded-lg border-tertiary text-tertiary font-semibold'>
              {' '}
              Shop from 150+ stores near you
            </span>
          </div>
          <div className='flex justify-end sm:justify-start w-full'>
            <img src={vectorGreen} alt='vector' className='w-[50%] sm:w-[20%]  sm:ml-[12rem]' />
          </div>
        </div>
      </section>

      {/* secttion 4 */}

      <footer className='bg-cards'>
        <div className=' p-5 sm:p-10'>
          <div className=' flex flex-col justify-between sm:flex-row '>
            <h1 className=' sm:hidden capitalize text-center pb-5 text-[35px] font-semibold text-black'>
              shoppers reviews{' '}
            </h1>

            <div className=' sm:-order-first  text-right sm:w-[60%]  '>
              <img src={womanSmiling2} alt='woman smiling' className='sm:w-[75%] mx-auto' />
            </div>
            <div className='flex flex-col justify-center  space-y-10 items-center w-full sm:w-[40%] '>
              <h1 className='hidden sm:block  capitalize text-[45px] font-semibold text-black'>
                shoppers reviews{' '}
              </h1>
              <div className='w-full'>
                <Carousel />
              </div>
            </div>
          </div>
        </div>

        <div id='' className='bg-primary mt-20 rou lg:rounded-t-[45%]'>
          <div className=' w-full text-center   text-black'>
            <div className='flex flex-col  justify-center pt-10'>
              <img src={handshake} alt='handshake' className='w-[30%] sm:w-[10%] mx-auto' />
              <h1 className='text-[24px] md:text-[35px] lg:text-[55px] text-white'>
                Let’s make Magic together
              </h1>
            </div>

            <div className='flex flex-col sm:flex-row justify-between my-[10rem] space-y-10  sm:space-y-0 '>
              <div className='text-center space-y-5 px-20 md:px-10 lg:px-20'>
                <img src={deviceShop} alt='house' className='w-[40%] mx-auto' />
                <h4 className='font-bold text-2xl '>Register your Supermarket</h4>
              </div>
              <div className='text-center space-y-5 px-20 md:px-10 lg:px-20'>
                <img src={reseller} alt='avatar' className='w-[40%] md:w-[] mx-auto' />
                <h4 className='font-bold text-2xl '>Become a Delivery partner</h4>
              </div>
              <div className='text-center space-y-5 px-20 md:px-10 lg:px-20'>
                <img src={constructionWorker} alt=' man working ' className='w-[40%] mx-auto' />
                <h4 className='font-bold text-2xl '>Work with Us</h4>
              </div>
            </div>

            {/* footer */}
            <hr className='border-black-sub mx-10' />
            <div className=' bg-primary flex justify-between  space-y-5 sm:space-y-0 flex-wrap px-10 sm:px-10 pt-10'>
              <div className='flex flex-col  justify-center space-y-2 items-start '>
                <div className='pb-5'>
                  <img src={logo} alt='logo' className='w-[45%] sm:w-[75%]' />
                </div>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>
                  Onboard Retail
                </li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>
                  Business Benefits
                </li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>
                  Become a Partner
                </li>
              </div>
              <div className='flex flex-col  justify-center space-y-2 items-start  s'>
                <span className='text-2xl font-semibold '>Contact us</span>
                <li className=' list-none   hover:text-tertiary cursor-pointer mt-10'>
                  +234 1234 567 890
                </li>
                <li className=' list-none   hover:text-tertiary cursor-pointer'>
                  No. 7 addison ST, maryland{' '}
                </li>
                <li className=' list-none   hover:text-tertiary cursor-pointer'>
                  support.clara@gmaim.com
                </li>
              </div>

              <div className='flex flex-col  justify-center space-y-2 items-start sm:pt-14'>
                <span className='text-2xl font-semibold'>Socials</span>
                <div className='flex '>
                  <li className=' list-none text-lg cursor-pointer'>
                    {' '}
                    <img src={facebook} alt='facebook' className=' w-[50%]' />
                  </li>
                  <li className=' list-none text-lg cursor-pointer'>
                    {' '}
                    <img src={whatsApp} alt='whatsApp' className=' w-[50%]' />
                  </li>
                  <li className=' list-none text-lg cursor-pointer'>
                    {' '}
                    <img src={twitter} alt='twitter' className=' w-[50%]' />
                  </li>
                </div>
                <span className='text-2xl font-semibold'>Secured payments</span>

                <div className='flex justify-between'>
                  <img src={cardPayment} alt='card payment' className='w-[35%]' />
                  <img src={mastercard} alt='mastercard' className='w-[35%]' />
                </div>
              </div>

              <div className='text-center w-full py-5'>
                <span>All right reserved 2022</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* section 5 */}
    </Fragment>
  );
};

export default HomePage;
