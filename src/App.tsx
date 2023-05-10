import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import HomePage from './view/HomePage';
import Supermarkets from './view/markets/Supermarkets';
import LocalMarket from './view/markets/LocalMarkets';
import Supermarket from './view/markets/Supermarket';

function App() {
  return (
    <div className='App'>
      <TopNav />
      <div className='w-full py-10 mt-[8rem]'> </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/supermarkets' element={<Supermarkets />} />
        <Route path='/localmarkets' element={<LocalMarket />} />
        <Route path='/supermarket' element={<Supermarket />} />
      </Routes>
    </div>
  );
}

export default App;
