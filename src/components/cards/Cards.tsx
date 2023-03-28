import React from 'react'
type Props = {
    title: string,
    image: any 
}

const Cards = (props: Props) => {
    const { title, image } = props;
  return (
      <button className='flex flex-col justify-center items-center rounded-[14px] py-5 space-y-5  bg-cards shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all'>
              <img src={image} alt="" className='w-[75%] rounded-[14px]  mx-auto' />
          <h3 className='font-[700] text-lg px- text-center sm:text-[25px]'> {title}</h3>
          
    </button>
  )
}

export default Cards