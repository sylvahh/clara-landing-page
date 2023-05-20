import SupermarketsCards from '../../components/cards/SupermarketsCards';
import { useStore } from '../../store/StoreProvider';
import { marketLoading } from '../../utilities';

const Supermarkets = () => {
  const { supermarket, isLoading} = useStore();

  const mappedList = supermarket.map(
    ({ market_name, location, market_img, market_logo, city, id }) => {
      return (
        <SupermarketsCards
          key={id}
          id={id}
          name={market_name}
          location={location}
          city={city}
          image={market_img}
          logo={market_logo}
        />
      );
    }
  );

  const loadingList = (
    <>
      {marketLoading}
      {marketLoading}
      {marketLoading}
      {marketLoading}
    </>
  );
  return (
    <section className='relative px-5 sm:px-10 mt-[6rem] sm:mt-[10rem] '>
      <div>
        <h1 className='text-[24px] md:text-[35px] lg:text-[55px] font-bold'>
          Top selling <span className='text-tertiary underline'> Supermarket </span>
        </h1>
        <small>Select Supermarket and start shopping</small>
        <small className='text-right block '>
          Can’t find your favourite Supermarket? <br />
          <a
            href='/'
            className=' font-semibold  underline  decoration-tertiary hover:decoration-primary '
          >
            {' '}
            Send us the name
          </a>
        </small>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-20 my-10 sm:my-20'>
        {isLoading ? loadingList : mappedList}
      </div>

      <a href='/' className=' underline  decoration-tertiary hover:decoration-primary text-left '>
        {' '}
        Discover all Supermarkets
      </a>

 
    </section>
  );
};

export default Supermarkets;
