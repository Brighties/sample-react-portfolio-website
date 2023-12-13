import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/*This tag gives us the ability to use routes in our application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
