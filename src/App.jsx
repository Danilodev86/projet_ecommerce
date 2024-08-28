import * as React from "react";
import LoginUser from "./pages/LoginUser";
import { Routes, Route } from "react-router-dom";
import Produtos from "./pages/Produtos";
import Detalhes from "./pages/Detalhe";


function App() {
  return (
    <main>
         
      <Routes>
        <Route path="/" element={< LoginUser/>} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<Detalhes />} />
      </Routes>

    </main>
  );
}

export default App;

