// Frontend App Entry Point
// https://blog.openreplay.com/authentication-in-react-with-supabase/

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

// Wraps application, passes authentication state
import AuthProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>

  </React.StrictMode>
);

