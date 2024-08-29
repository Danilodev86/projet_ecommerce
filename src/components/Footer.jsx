// src/components/Footer.jsx
import React from 'react';
import '../style/Footer.css'; // Importa o CSS para o footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
     
        <div className="footer-info">
          <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
          <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
          <p>Email: contato@suaempresa.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
