import React { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeController from './components/Home/HomeController';
import RegisterContainer from './components/Register/RegisterContainer';
import Login from "./components/Login/LoginController";
import {User, UserContext} from "./components/Context/UserContext"

function App() : JSX.Element {
  const [user, setUser] = useState<User>({} as any)
  return (
    <div className='App'>
      <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<HomeController />}/>
        <Route path="/register" element={<RegisterContainer/>}/>
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
