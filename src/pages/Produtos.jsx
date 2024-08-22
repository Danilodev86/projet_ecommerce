import { useEffect, useState } from "react";


function Produtos() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    console.log(data);


    return (
        <>
        <div id="topo"> <h1>Portal do Revendedor</h1></div>
        <div className="produtosFetch">
            {data.map(item => (
                <div className="produtos">
                    <img width="180px" src={item.image} alt="" />
                    <div id="title">{item.title}</div>
                    <div id="price">{item.price}</div>
                    <div id="description">{item.description}</div>

                </div>
            ))}
        </div>
        </>

    )
};

export default Produtos;