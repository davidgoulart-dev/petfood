import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Cadastro from './pages/cadastro';
import './styles/global.css'
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import { Provider } from 'react-redux'
import store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petshop" element={<Petshop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Provider>
  </BrowserRouter>



);

