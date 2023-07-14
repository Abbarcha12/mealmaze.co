import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
// Specify weight and style
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

