import * as React from "react";
import LoginUser from "./pages/LoginUser";
import { Routes, Route } from "react-router-dom";
import Produtos from "./pages/Produtos";
import Detalhes from "./pages/Detalhe";
import CategoriaButton from "./components/CategoriaButton";
import Footer from './components/Footer'; 


function App() {
  return (
    <main>
         
      <Routes>
        <Route path="/" element={< LoginUser/>} />
        <Route path="/categoria" element={<CategoriaButton />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<Detalhes />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>

    </main>
  );
}

export default App;

