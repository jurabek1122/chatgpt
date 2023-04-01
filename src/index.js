import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
// import { setConfig } from 'react-google-translate'

// setConfig({
//   clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? '',
//   privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? '',
//   projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? ''
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);