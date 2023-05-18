import React, { useEffect } from 'react';
import Store from '../../components/cards/Store';
import { useStore } from '../../store/StoreProvider';
import { useParams } from 'react-router-dom';
import { getItem } from '../../utilities';

const Supermarket = () => {
  const { isLoading, marketList } = useStore();
  const { name } = useParams()
  const  location = getItem('city')
  // useEffect(() => {
  //   console.log(marketList);
  // }, [marketList]);

  const storeList = marketList.map(({ id, img, name, number_of_product, whatsapp_link }) => (
    <Store
      key={id}
      id={id}
      name={name}
      image={img}
      products={number_of_product}
      whatsAppLink={whatsapp_link}
    />
  ));
  
  return ( 
    <div className=' px-5 mt-10  w-full h-full'>
      <div className='flex flex-col py-8 justify-center w-full h-full  space-y-5 items-center'>
        <h1 className='font-extrabold  sm:text-[48px] sm:leading-[56px] text-alt-sec p-1  '>
         {name}
        </h1>
        <span className='block font-bold text-2xl capitalize text-tertiary-100'>{location}</span>
      </div>
      <hr />
      <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 mb-20 lg:mb-10 '>
          {isLoading? 'Loading': storeList}
      </div>
    </div>
  );
};

export default Supermarket;
