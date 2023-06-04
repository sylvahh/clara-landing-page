import CartDropdown from './CartDropdown';
import cart from '../assets/icon-cart.svg';
import { useStore } from '../store/StoreProvider';
import { useNavigate } from 'react-router-dom';

type dropdownProps = {
  showCart: boolean;
    setShowCart: any;
  scroll: boolean
};

function CartBtn({ showCart, setShowCart, scroll }: dropdownProps) {
  const { cartItemsCount } = useStore()
  const Navigate = useNavigate()

  return (
    <div className='hidden sm:block'>
      <button
        onMouseEnter={() => {
          setShowCart(true);
        }}
        onClick={() =>{ setShowCart(false); Navigate(window.location.pathname + '/cart')}}
        type='button'
        className='relative inline-flex peer  text-sm font-medium text-center text-white'
      >
        <img src={cart} alt='shopping cart' width={'35px'} className='' />
        <span className='sr-only'>Cart</span>

        <div className='absolute inline-flex items-center justify-center   w-5 h-5 text-xs font-bold text-white bg-tertiary-100 rounded-full -top-2 -right-2'>
          {cartItemsCount}
        </div>
      </button>
      <CartDropdown showCart={showCart} setShowCart={setShowCart} scroll={scroll} />
    </div>
  );
}

export default CartBtn;
