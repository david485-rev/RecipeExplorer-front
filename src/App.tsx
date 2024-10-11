import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeController from './components/Home/HomeController';
import RegisterContainer from './components/Register/RegisterContainer';

function App() : JSX.Element {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomeController />}/>
        <Route path="/register" element={<RegisterContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
