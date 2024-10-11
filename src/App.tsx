import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterContainer from './components/Register/RegisterContainer';

function App(): JSX.Element {
    return (
        <div className='App'>
            <Routes>
                <Route path="/register" element={<RegisterContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
