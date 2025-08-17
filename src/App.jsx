import React from 'react';
import Home from './components/pages/Home';
import Course from './components/Course';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;