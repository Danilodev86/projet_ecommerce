import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Produtos() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    console.log(data);

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
                        <div id="price">${item.price.toFixed(2)}</div>
                        
                    </button>
                       
                ))}
            </div>
        </>

    )
};

export default Produtos;