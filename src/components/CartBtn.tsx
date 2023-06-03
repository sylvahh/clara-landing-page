import CartDropdown from './CartDropdown';
import cart from '../assets/icon-cart.svg';
import { useStore } from '../store/StoreProvider';

type dropdownProps = {
  showCart: boolean;
    setShowCart: any;
  scroll: boolean
};

function CartBtn({ showCart, setShowCart, scroll }: dropdownProps) {
  const {cartItems}= useStore()

  return (
    <div className='hidden sm:block'>
      <button
        onMouseEnter={() => {
          setShowCart(true);
          console.log('hello');
        }}
        onClick={() => setShowCart(!showCart)}
        type='button'
        className='relative inline-flex peer  text-sm font-medium text-center text-white'
      >
        <img src={cart} alt='shopping cart' width={'35px'} className='' />
        <span className='sr-only'>Cart</span>

        <div className='absolute inline-flex items-center justify-center   w-5 h-5 text-xs font-bold text-white bg-tertiary-100 rounded-full -top-2 -right-2'>
          {cartItems}
        </div>
      </button>
      <CartDropdown showCart={showCart} setShowCart={setShowCart} scroll={scroll} />
    </div>
  );
}

export default CartBtn;
