import React from 'react';
import ReactDOM from 'react-dom/client';
import App_ES from './App_ES';
import App_EN from './App_EN'; // Assuming you have an App_ES component for Spanish
import './index.css';

const lang = navigator.language || navigator.userLanguage; // Handle fallback for older browsers



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App_ES />
  </React.StrictMode>
);
