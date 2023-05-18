import { itemsToShow, productLoading, storeNameLoading } from '../../utilities';
import CustomDropdown from '../../components/CustomDropdown';
import Products from '../../components/cards/Products';

import { useStore } from '../../store/StoreProvider';

const Store = () => {
  const { isLoading, productList: CproductList } = useStore();
  const storeName = CproductList[0] ? CproductList[0].store_name : '';
  const ProductList = CproductList.map(({ id, img, p_name, s_new_price, s_old_price }) => (
    <Products
      key={id}
      id={id}
      image={img}
      name={p_name}
      newPrice={s_new_price}
      oldPrice={s_old_price}
    />
  ));

 

  const loadingList = (
    <>
      {productLoading}
      {productLoading}
      {productLoading} {productLoading}
    </>
  );
   

  return (
    <div className='px-5 '>
      <div className='flex flex-col p-10 sm:p-20  justify-center rounded-2xl bg-alt-tertiary  w-full h-full  space-y-5'>
        <h1 className='font-extrabold text-left  sm:text-[48px] sm:leading-[56px] text-alt-sec p-1  '>
          {CproductList.length ? storeName : storeNameLoading}
        </h1>
      </div>

      <div className='mt-10 sm:px-20'>
        <div className='flex justify-between items-center'>
          <span className='font-semibold text-lg block w-full'>
            We found <span className='text-tertiary-100 font-semibold'>{CproductList.length}</span>{' '}
            items for you!
          </span>

          <div className='hidden sm:flex items-center shadow  rounded-md  w-[25%]'>
            <CustomDropdown options={itemsToShow} sideText='show:' />
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 '>
          {CproductList.length ? ProductList : loadingList}
        </div>
      </div>
    </div>
  );
};

export default Store;
