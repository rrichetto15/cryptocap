import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
