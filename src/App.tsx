import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeController from './components/Home/HomeController';

function App() : JSX.Element {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomeController />}/>
      </Routes>
    </div>
  );
}

export default App;
