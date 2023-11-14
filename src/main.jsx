import React from 'react';
import ReactDOM from 'react-dom';
import App_ES from './App_ES';
import App_EN from './App_EN';
import './index.css';

// Set a timeout of 0.5 seconds (500 milliseconds)
const timeout = 500;

const fetchGeolocation = () => {
  return fetch("https://geolocation-db.com/json/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Geolocation service request failed");
      }
      return response.json();
    })
    .then((data) => {
      return data.country_name;
    })
    .catch((error) => {
      console.error(error);
      return null; // Return a default value or handle the error as needed
    });
};

const renderApp = (country) => {
  if ((!navigator.userAgent.includes('oogle')) && (navigator.language === 'en-US') && (country === 'United States')) {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App_EN />
      </React.StrictMode>
    );
  } else {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App_ES />
      </React.StrictMode>
    );
  }
};

// Fetch geolocation data and handle timeout
Promise.race([fetchGeolocation(), new Promise(resolve => setTimeout(resolve, timeout))])
  .then((country) => {
    if (country !== null) {
      renderApp(country);
    } else {
      // Handle the case where geolocation data is unavailable
      // You can display a message to inform the user
      console.log("Geolocation data is unavailable");
      // You can also consider rendering a default component or showing an error message.
    }
  });
