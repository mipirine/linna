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
    <Home />
    
    
    </>
  );
}

export default App;