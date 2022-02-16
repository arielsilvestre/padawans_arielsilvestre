import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) =>{ //le paso props al boton
    const[products,setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(products=>{
            console.log(products)
            setProducts(products)
        })
    })


    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`);
    }
    
    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}></ItemCount>
                {/* {products.map(product=>{
                    return <li key={product.id}>{product.name}</li>
                })} */}
                {products.map(product=>{
                     return <div style={{fontSize:50}}>
                                <h5>{product.name}</h5>
                                <img src={product.img}></img>
                                <h6>{product.price}</h6>
                                <p style={{color:'grey', fontSize:10}}>{product.category}</p>
                                <button style={{background:'#44FFFF'}}>Comprar</button>
                            </div>
                })}
           
        </>
    )
}

export default ItemListContainer;