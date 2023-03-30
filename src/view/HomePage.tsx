import React, { Fragment } from 'react';
import MarketDropDown from '../components/MarketsDropdown';
import TopNav from '../components/TopNav';
import blenco from '../assets/blenco.png';
import supermarket from '../assets/supermarket.png';
import ladyInCart from "../assets/ladyn'cart.png";
import vectorYellow from '../assets/Vector~yellow.png';
import vectorGreen from '../assets/Vector~green.png';
import motherAndSon from '../assets/son-Mom.png';
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

const HomePage = () => {
  return (
    <Fragment>
      <TopNav />

      <section className='mt-[6rem] sm:mt-[10rem]'>
        <div className='flex  justify-between space-x-10  px-5 sm:px-10'>
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
      </section>

      {/* section 2 */}
      <section className='bg-cards p-5  sm:p-10'>
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
            <button className='py-1  px-5 border rounded-lg border-tertiary text-tertiary font-semibold'>
              {' '}
              Shop from 150+ stores near you
            </button>
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
            <h1 className=' sm:hidden capitalize text-[45px] font-semibold text-black'>
              shoppers reviews{' '}
            </h1>

            <div className=' sm:-order-first  text-right sm:w-[60%]  '>
              <img src={motherAndSon} alt='mother and son' className='sm:w-[75%] mx-auto' />
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

        <div id='yellow-bg' className=' mt-20 relative'>
          <div className=' w-full text-center absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-black'>
            <div className='flex flex-col  justify-center'>
              <img src={handshake} alt='handshake' className='w-[50%] sm:w-[25%] mx-auto' />
              <h1 className='text-[24px] md:text-[35px] lg:text-[55px] text-white'>
                Let’s make Magic together
              </h1>
            </div>

            <div className='flex flex-col sm:flex-row justify-between my-[10rem] space-y-10  sm:space-y-0 '>
              <div className='text-center space-y-5 px-20'>
                <img src={deviceShop} alt='house' className='w-[40%] mx-auto' />
                <h4 className='font-bold text-2xl '>Register your Supermarket</h4>
              </div>
              <div className='text-center space-y-5 px-20'>
                <img src={reseller} alt='avatar' className='w-[40%] mx-auto' />
                <h4 className='font-bold text-2xl '>Become a Delivery partnert</h4>
              </div>
              <div className='text-center space-y-5 px-20'>
                <img src={constructionWorker} alt=' man working ' className='w-[40%] mx-auto' />
                <h4 className='font-bold text-2xl '>Work with Us</h4>
              </div>
            </div>

            {/* footer */}
<hr  className='border-black-sub mx-10'/>
            <div className=' flex justify-between  space-y-5 sm:space-y-0 flex-wrap px-10 sm:px-10 pt-10'>
              <div className='flex flex-col  justify-center space-y-2 items-start '>
                <div className='pb-5'>
                <img src={logo} alt='logo' className='w-[45%] sm:w-[75%]' />
                </div>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>Onboard Retail</li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>Business Benefits</li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>Become a Partner</li>
              </div>
              <div className='flex flex-col  justify-center space-y-2 items-start  sm:pt-14'>
                <span className='text-2xl font-semibold'>Important Links</span>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>About Us</li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>How it works</li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>FAQs</li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>Podcast & Stories</li>
                <li className=' list-none text-lg  hover:text-tertiary cursor-pointer'>Contact Us</li>
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

                <div className="flex justify-between">
                  <img src={cardPayment} alt="card payment" className='w-[35%]' />
                  <img src={mastercard} alt="mastercard" className='w-[35%]' />

                </div>
              </div>
           
              <div className='text-center w-full pt-20 sm:pt-20'>
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
