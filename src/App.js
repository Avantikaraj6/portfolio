import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Skill from "./routes/Skill";

import {  Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Routes>
        <Route path="/project" element={<Project />}/>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Routes>
        <Route path="/skill" element={<Skill />}/>
      </Routes>
    </>
  );
}

export default App;
