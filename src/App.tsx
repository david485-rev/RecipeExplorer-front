import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeController from './components/Home/HomeController';
import RegisterContainer from './components/Register/RegisterContainer';
import MyProfileController from './components/MyProfile/MyProfileController';
import NavBar from './components/NavBar/NavBar';
import {User, UserContext} from "./components/Context/UserContext"
import LoginController from './components/Login/LoginController';
import CreateRecipeController from './components/CreateRecipe/CreateRecipeController';
import ProfileController from './components/Profile/ProfileController';

function App() : JSX.Element {
  const [user, setUser] = useState<User>({} as any)
  
  return (
    <div className='App'>
      <UserContext.Provider value={user}>
      <NavBar setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomeController />}/>
        <Route path="/register" element={<RegisterContainer/>}/>
        <Route path="/login" element={<LoginController setUser={setUser} />} />
        <Route path='/create-recipe' element={<CreateRecipeController />}/>
        <Route path='/profile/:id' element={<ProfileController setUser={setUser} />} />
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
