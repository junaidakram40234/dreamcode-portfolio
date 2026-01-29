import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App