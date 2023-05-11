import React from 'react'
type Props = {
    // title: string,
    image: any,
    logo: any
}
const SupermarketsCards = (props: Props) => {
    const { image,logo} = props
  return (
    <button className='flex flex-col justify-center items-center rounded-[14px] py-5 space-y-5  bg-cards shadow-sm shadow-black hover:shadow-black hover:shadow-md hover:-translate-y-1 transition-all'>
          <img src={image} alt="" className='w-[75%] rounded-[14px]  mx-auto' />
          
    <img src={logo} alt="" className='w-[50%]  mx-auto' />

<a href='/supermarkets/blenco' className='font-semibold text-lg  text-left  hover:text-primary transition-all'> Start shopping  &gt;&gt;</a>

</button>
  )
}

export default SupermarketsCards