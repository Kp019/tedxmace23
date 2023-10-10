import React from 'react';
import {
  Routes, 
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home';
import RegisterA from './pages/register-ambassador';
import Preg from './pages/Preg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/Register_A' element={<RegisterA />} />
      </Routes>
      <Routes>
        <Route path='/preg' element={<Preg />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
