import React, { useState } from 'react';
import '../style/CategoriaButton.css'; // Importa o arquivo CSS para estilizar o dropdown

const CategoriaButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Selecione uma categoria
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#roupas">Roupas</a></li>
          <li><a href="#acessorios">Acessórios</a></li>
          <li><a href="#calçados">Calçados</a></li>
          <li><a href="#bermudas">Bermudas</a></li>
          <li><a href="#camisetas">Camisetas</a></li>
          <li><a href="#casacos">Casacos</a></li>
          {/* Adicione outras categorias conforme necessário */}
        </ul>
      )}
    </div>
  );
};

export default CategoriaButton;
