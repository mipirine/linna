import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import CostaNavarinoDetails from "./pages/CostaNavarinoDetails";
import PuertoBanusDetails from "./pages/PuertoBanusDetails";
import LaGomeraDetails from "./pages/LaGomeraDetails";
import ScrollToTop from './components/ScrollToTop';
//import {Navbar } from './components/Navbar'
//import Layout from "./components/Layout";
function App() {

  return (
    <>
    
    <BrowserRouter>
    <ScrollToTop>
    <Routes>
    
      <Route path="/" element={<Home />}></Route>
      <Route path="/costaNavarino" element={<CostaNavarinoDetails />}></Route>
      <Route path="/puertoBanus" element={<PuertoBanusDetails />}></Route>
      <Route path="/laGomera" element={<LaGomeraDetails />}></Route>
      
    </Routes>
    </ScrollToTop>
    </BrowserRouter>
    </>
  );
}

export default App;