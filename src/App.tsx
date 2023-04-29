import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav';
import HomePage from './view/HomePage';
import Supermarkets from './view/markets/Supermarkets';
import LocalMarket from './view/markets/LocalMarkets';

function App() {
  return (
    <div className='App'>
      <TopNav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/supermarkets' element={<Supermarkets />} />
        <Route path='/localmarkets' element={<LocalMarket />} />

      </Routes>
    </div>
  );
}

export default App;
