import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Moeda from "../ultis/formatCurrency";  // Importa o componente Moeda

function Produtos() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const Detalhes = (id) => {
    navigate(`/produto/${id}`);
  };

  return (
    <>
      <div id="topo">
        <h1>Portal do Revendedor</h1>
      </div>
      <div className="produtosFetch">
        {data.map(item => (
          <button className="produtos" key={item.id} onClick={() => Detalhes(item.id)}>
            <img id="image" src={item.image} alt={item.title} />
            <div id="title">{item.title}</div>
            <span id="price">
              <Moeda price={item.price} /> {/* Usa o componente Moeda para formatar o preço */}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

export default Produtos;
