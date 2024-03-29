import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import './App.css';
import CostaNavarinoDetails from "./pages/CostaNavarinoDetails";
import PuertoBanusDetails from "./pages/PuertoBanusDetails";
import LaGomeraDetails from "./pages/LaGomeraDetails";
import { Home } from './pages/Home';
//import {Navbar } from './components/Navbar'
import { useNavigate } from 'react-router-dom';
import Layout from "./components/Layout";
import ScrollToTop from './components/ScrollToTop';

function App() {
  const navigate = useNavigate();
  
  return (
    <>
    <ScrollToTop>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="costaNavarino" element={<CostaNavarinoDetails />}></Route>
      <Route path="puertoBanus" element={<PuertoBanusDetails />}></Route>
      <Route path="laGomera" element={<LaGomeraDetails />}></Route>
      </Route>
    </Routes>
    </ScrollToTop>
    
    
    </>
  );
}

export default App;