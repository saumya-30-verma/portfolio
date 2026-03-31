import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Pages/Portfolio'
import Projects from './Pages/Projects';

const App = () => {
  return (
  <BrowserRouter>
   <Routes>
     <Route path='/' element={<Portfolio />} />
     <Route path='/projects' element={<Projects />} />
   </Routes>
  
  </BrowserRouter>
  )
}

export default App