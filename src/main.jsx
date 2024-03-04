import React from 'react';
import ReactDOM from 'react-dom/client';
import App_ES from './App_ES'; // Assuming you have an App_ES component for Spanish
import App_EN from './App_EN'; // Assuming you have an App_EN component for English
import './index.css';

const lang = navigator.language || navigator.userLanguage; // Handle fallback for older browsers

let AppToRender;
if (lang === 'es') {
  // If language is English, render the App_EN component
  AppToRender = <App_ES />;
} else {
  // Default to Spanish (or any other language)
  AppToRender = <App_EN />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {AppToRender}
  </React.StrictMode>
);
