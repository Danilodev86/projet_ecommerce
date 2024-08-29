import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moeda from "../ultis/formatCurrency";  // Importa o componente Moeda
import '../style/detalhesProdutos.css';
import '../style/zoom.css';


function produtoDetalhes() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    console.log(data);

    return (
        <main >
        <h1>Detalhes do Produtos</h1>
        <div className="detalhesProdutos" >
                   
            <span className="effectzoom"> 
                <img id="image"  src={data.image} alt={data.title} />
            </span>

            <span >
                <div id="title">{data.title}</div><br />
                <h3>Descrição:</h3>
                <div id="description">{data.description}</div>
                
                <div id="price">
                    <Moeda price={data.price} /></div><br /><br />
               
                <button>Adicionar no Carrinho</button>
                <br /><br /><br />
            
            </span>

           

        </div>
        </main>

    )
};

export default produtoDetalhes;