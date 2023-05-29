import { createBrowserRouter } from 'react-router-dom';
import HomePage from './view/HomePage';
import Login from './view/Login';
import Supermarkets from './view/markets/Supermarkets';
import LocalMarkets from './view/markets/LocalMarkets';
import Market from './view/markets/Market';
import Store from './view/markets/Store';
import Cart from './view/Cart';
import TopNav from './components/TopNav';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/supermarkets',
    element: <Supermarkets />,
  },
  {
    path: '/localmarkets',
    element: <LocalMarkets />,
  },
  {
    path: '/localmarkets/:name',
    element: <Market />,
  },
  {
    path: '/supermakets/:name',
    element: <Market />,
  },
  {
    path: '/localmarkets/:name/:store',
    element: <Store />,
  },
  {
    path: '/supermarkets/:name/:store',
    element: <Store />,
  },
  {
    path: '/localmarkets/:name/:store/cart',
    element: <Cart />,
  },
  {
    path: '/supermarkets/:name/:store/cart',
    element: <Cart />,
  },
  {
    path: '*',
    element: <TopNav />,
  },
]);

{
  /* <Route path='/' element={<HomePage />} />
<Route path='/login' element={<Login />} />
<Route path='/supermarkets' element={<Supermarkets />} />
<Route path='/localmarkets/' element={<LocalMarkets />} />
<Route path='/localmarkets/:name' element={<Market />} />
<Route path='/supermarkets/:name' element={<Market />} />

<Route path='/supermarkets/:name/:store' element={<Store />} />
<Route path='/supermarkets/:name/:store/cart' element={<Cart />} /> */
}
