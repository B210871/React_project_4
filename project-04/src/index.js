import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
body{
  color:white;
  background-color:#323334;
  min-height:100vh;
  font-family: 'Inter', sans-serif;
}

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globalstyle/>
    <App />
  </React.StrictMode>
);

