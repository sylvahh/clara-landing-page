import React, { Fragment } from 'react'
import MarketDropDown from '../components/MarketsDropdown'
import TopNav from '../components/TopNav'

const HomePage = () => {
  return (
      <Fragment>
          <TopNav/>
      

      
      <div className='flex  justify-between mt-[6rem] px-5 sm:px-10'>
        <div className='w-full text-[55px]'>
          <h1 >Shop from your  <span className='text-primary  underline'> favourite supermarket</span> right here</h1>
        </div>
        {/* <div className='w-fu  text-center bg-black'> */}

      <MarketDropDown/>
        {/* </div> */}
      </div>
          
    </Fragment>
  )
}

export default HomePage