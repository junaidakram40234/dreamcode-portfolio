import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Contant from './pages/Contant.jsx';
import Casestudies from './pages/Casestudies.jsx';


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contant" element={<Contant />} />
      </Routes>
    </div>
  );
}

export default App