import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Helmet>
  <React.StrictMode>
    
      <App />
    
  </React.StrictMode>
  </div>
);