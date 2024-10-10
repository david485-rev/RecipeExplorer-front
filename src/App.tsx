import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';

function App(): JSX.Element {
    return (
        <div className='App'>
            <Routes>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
