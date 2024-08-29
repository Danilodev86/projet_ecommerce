import React from 'react';

// Componente que formata o preço
const Moeda = ({ price }) => {
  const formatCurrency = (amount) => {
    return `R$ ${parseFloat(amount).toFixed(2).replace('.', ',')}`;
  };

  const formattedPrice = formatCurrency(price);

  return <span>{formattedPrice}</span>;
};

export default Moeda;

