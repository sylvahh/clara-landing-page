import { arrowRight,  imageBaseUrl } from '../../utilities';
import { useStore } from '../../store/StoreProvider';
import { useNavigate } from 'react-router-dom';
type Props = {
  id: string;
  image: string;
  logo: string;
  name: string;
  location: string;
  city: string;
};
const SupermarketsCards = (props: Props) => {
  const { id, image, logo, name, location, city } = props;
  const Navigate = useNavigate();
  const { getMarketId } = useStore();
  const handleMarket = (storeId: string,  storeName: string , storeLocation?: string,) => {
    getMarketId(storeId, 'MARKET_STORES', storeLocation).then(() => Navigate(storeName));
  };

  return (
    <div className='flex flex-col justify-center items-center rounded-[14px] py-5 space-y-3  bg-cards shadow-sm shadow-black hover:shadow-black hover:shadow-md hover:-translate-y-1 transition-all'>
      <img src={imageBaseUrl + image} alt='' className='w-[85%] rounded-[10px]  mx-auto' />

      <img src={imageBaseUrl + logo} alt='' className='w-[50%]  mx-auto' />
      <div className='flex flex-col items-center'>
        <span className='font-semibold text-lg text-tertiary capitalize'>{name}</span>
        <small className=' text-sm  font-medium'>{location}</small>
      </div>
      <button
        onClick={() => handleMarket(id, name, city,)}
        className=' inline-flex items-center text-black-sub font-semibold text-lg  text-left  hover:text-primary transition-all duration-500'
      >
        {' '}
        Start shopping {arrowRight}
      </button>
    </div>
  );
};

export default SupermarketsCards;
