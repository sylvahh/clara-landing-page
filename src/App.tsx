import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import HomePage from './view/HomePage';
import Supermarkets from './view/markets/Supermarkets';
import LocalMarkets from './view/markets/LocalMarkets';
import Market from './view/markets/Market';
import Store from './view/markets/Store';
import Cart from './view/Cart';
import { StoreProvider } from './store/StoreProvider';
// import Cookies from 'js-cookie';
// import { useCookies } from 'react-cookie';
import Login from './view/Login';

function App() {
  // const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  // const tokenCookie = cookies.find(cookie => cookie.startsWith('1P_JAR='));
  // const token = tokenCookie ? tokenCookie.split('=')[1] : null;
  // clara_session
  // const token = Cookies.get('clara_session');
  // console.log(token)
  // const [cookies, setCookie] = useCookies();

  // console.log(cookies)
  const cookies = document.cookie.split(';');
  console.log(cookies);
  // const forebiddenpaths = ['/', '/supermarkets', '/localmarkets'];
  return (
    <StoreProvider>
      <TopNav />
      {/* <div className={`${!findPaths(forebiddenpaths) ? 'hidden' : ' block w-full py-10 sm:mt-[8rem]'}`}> </div> */}
      {/* <div className={`${!findPaths(forebiddenpaths) ? 'hidden': ' block w-full py-10 sm:mt-[8rem]'}`}> </div> */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/supermarkets' element={<Supermarkets />} />
        <Route path='/localmarkets/' element={<LocalMarkets />} />
        <Route path='/localmarkets/:name' element={<Market />} />
        <Route path='/supermarkets/:name' element={<Market />} />
        <Route path='/supermarkets/:name/:store' element={<Store />} />
        <Route path='/supermarkets/:name/:store/cart' element={<Cart />} />
      </Routes>
    </StoreProvider>
  );
}

export default App;
