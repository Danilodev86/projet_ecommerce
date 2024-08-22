import * as React from "react";
import Footer from './components/footer/index';
import LoginUser from './components/LoginUser';

import { Routes, Route } from "react-router-dom";

import Produtos from "./pages/Produtos";

// import Home from "./pages/home";
import Detalhe from "./pages/Detalhe"

function App() {
  return (
    <main>
         
      <Routes>
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/" element={<LoginUser />} />
      </Routes>

    </main>
  );
}

export default App;

