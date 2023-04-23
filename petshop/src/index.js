import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/cadastro';
import './styles/global.css'
import Checkout from './pages/checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);

