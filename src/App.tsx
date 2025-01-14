import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './vistas/Home';
import About from './vistas/About';
import Dashboard from './vistas/Dashboard';
import Login from './vistas/Login';
import Signin from './vistas/Signin';
import Bienvenida from './vistas/Bienvenida';
import Bienvenida2 from './vistas/bienvenida_v2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path='/bienvenida2' element={<Bienvenida2/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
