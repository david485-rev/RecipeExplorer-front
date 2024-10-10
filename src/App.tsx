import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from "./components/login/login";
import MockHome from "./components/mockHomePage/mockHome";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MockHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
