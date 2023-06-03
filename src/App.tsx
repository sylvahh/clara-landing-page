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
import Login from './view/Login';

function App() {

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
