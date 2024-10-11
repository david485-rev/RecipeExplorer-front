import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MyProfile from './components/MyProfile/MyProfile';
function App() : JSX.Element {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/MyProfile" element={<MyProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
