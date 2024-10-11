import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeController from './components/Home/HomeController';
import RegisterContainer from './components/Register/RegisterContainer';
import MyProfile from './components/MyProfile/MyProfile';
import NavBar from './components/NavBar/NavBar';

function App() : JSX.Element {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path="/MyProfile" element={<MyProfile/>}/>
        <Route path="/" element={<HomeController />}/>
        <Route path="/register" element={<RegisterContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
