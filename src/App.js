import React from 'react';
import {
  Routes, 
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Register_A from './pages/register-ambassador';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/Register_A' element={<Register_A/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
