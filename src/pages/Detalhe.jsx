import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moeda from "../ultis/formatCurrency";  // Importa o componente Moeda
import '../style/detalhesProdutos.css';

function produtoDetalhes() {

    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    console.log(data);

    return (
        <main className="detalhesProudos">
            
            {
                data ? <div>
                    
                    <h2>Detalhes do Produtos</h2>

                    <span className="effectzoom">
                        <img width="100px" id="image" src={data.image} alt={data.title} />
                    </span>

                    <span >
                        <div id="title">{data.title}</div><br />
                      
                        <h3>Descrição:</h3>
                        <div id="description">{data.description}</div> 
                        <div className="price" id="price">
                            <Moeda price={data.price} /></div><br /><br />

                        {/* <button onClick={handleAdd}>Adicionar no Carrinho</button> */}
                        <br /><br /><br />

                    </span>
                </div> : <h1>Loanding</h1>
            }

        </main>

    )
};

export default produtoDetalhes;