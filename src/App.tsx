import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login/LoginContainer";
import {User, UserContext} from "./components/Context/UserContext"
import { useState } from 'react';

function App() {
  const [user, setUser] = useState<User>({} as any)
  return (
    <div className='App'>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
