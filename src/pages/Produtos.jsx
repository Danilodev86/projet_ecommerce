import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Moeda from "../ultis/formatCurrency";  // Importa o componente Moeda
import CategoriaButton from "../components/CategoriaButton";
import Footer from "../components/Footer";



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
<main>
  {data ? (
    <>
      <header id="topo">
        <div id="categoriaButton">
          <CategoriaButton />
        </div>
        <h1>Portal do Revendedor</h1>
        <div id="categoriaButton">
          <CategoriaButton />
        </div>
      </header>
      <section className="produtosFetch">
        {data.map(item => (
          <button
            className="produtos"
            key={item.id}
            onClick={() => Detalhes(item.id)}
          >
            <img className="image" src={item.image} alt={item.title} />
            <div className="title">{item.title}</div>
            <span className="price">
              <Moeda price={item.price} />
              <p>Pagamento no Pix</p>
              <hr />
            </span>
          </button>
        ))}
      </section>
      <Footer />
    </>
  ) : (
    <h1>Loading</h1>
  )}
</main>

  );
}

export default Produtos;
