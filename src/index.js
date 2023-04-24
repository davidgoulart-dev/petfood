import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/cadastro';
import './styles/global.css'
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Petshop />
  </React.StrictMode>
);

