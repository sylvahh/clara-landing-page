import React from 'react'
import logo from '../assests/logo~green.png'
const TopNav = () => {
  return (
      <header className=' bg-primary sticky top-0 px-5 sm:px-10  py-3'>
          <div className="flex justify-between   items-center">
              <a href="" className='w-full  sm:w-auto'>
                  
              <img src={logo} alt="logo" className=' w-[50%] sm:w-auto' />
              </a>
              <div className='flex space-x-20 sm:text-xl w-full sm:w-auto'>
                  <button className='hidden sm:block text-tertiary bg-white py-2 px-5 hover:bg-gray-200 hover:text-secondary rounded-lg'> Add Supermarket</button>
                  <button className='text-tertiary bg-transparent  hover:text-secondary font-semibold'> My Account</button>

              </div>
          </div>
    </header>
  )
}

export default TopNav