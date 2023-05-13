import React from 'react';
import shawarma from '../../assets/shawarma.jpeg';
import shawarma2 from '../../assets/shawarma2.jpeg';
import girlWithshaw from '../../assets/girl-with-shawarma.jpeg';
import { cart, ratings } from '../../utilities';

type productProps = {
  item?: string;
  image: any;
  // path: string
};

const Products = ({ item, image }: productProps) => {
  return (
    <div className='rounded-md border p-5  hover:border-alt-tertiary hover:shadow-md transition-all duration-500'>
      {/**/}
      <div className=' flex flex-col  '>
        <div className='card-zoom  rounded-xl w-full h-[100%] bg-slate-500 '>
          <img
            src={image}
            alt=''
            height={'100%'}
            className='object-cover w-full h-full card-zoom-image'
          />
        </div>
        <div className='flex flex-col py-5  justify-start'>
  <button 
    className='text-left font-bold h-[100px] overflow-hidden sm:text-xl text-alt-sec hover:text-tertiary-100 transition-all duration-500'
    // style={{ height: '60px', overflow: 'hidden' }}
  >
    {item}
  </button>
  {ratings}
</div>

        {/* <div className='flex flex-col py-5 justify-center'>
          <button className='text-left  font-bold text-xl text-alt-sec hover:text-tertiary-100 transition-all duration-500 '>
            {item}
          </button>
          {ratings}
        </div> */}
        <div className='flex justify-between items-start'>
          <div className=''>

          <span className=' sm:text-xl font-bold text-tertiary-100'>
              ₦1248
          </span>
              <s className=' ml-5 text-bold text-base text-black-sub'> ₦1000 </s>
          </div>
          <button className=' sm:inline-flex sm:items-center sm:space-x-3 px-5 py-2 sm:p-3 rounded-md bg-tertiary-100 text-white font-semibold  text-base'>
            {cart} <span> Add </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// {/* <a class="card-zoom cursor-pointer" href="pages/shoes/shoes.html">
//             <div
//               class="card-zoom-image"
//               style="background-image: url(assets/home-banner-2.jpg)"
//             ></div>
//             <div class="card-zoom-text space-y-3">
//               <h5 class="font-normal text-black">
//                 Looking <br />
//                 for new <br />
//                 shoes?
//               </h5>
//               <button class="text-base font-normal text-black">Sneakers on sale</button>
//             </div>
//           </a> */}

export default Products;
