import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import asyncmock from "../../asyncmock";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) =>{ //le paso props al boton
    const[products,setProducts] = useState([])

    const getProducts  = () => {
        return new Promise((resolve)=> {
            setTimeout(() => {
                resolve(asyncmock)
            }, 2000)
        })
    }

    useEffect(()=>{
        getProducts().then(products=>{
            /* console.log(products) */
            setProducts(products)          
        })
    })

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`);
    }
    
    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}></ItemCount>
            <ItemList products={products}/>
                 {/* {products.map(product=>{
                     return <div style={{fontSize:20}}>
                                <h5>{product.name}</h5>
                                <img src={product.img}></img>
                                <h6 style={{padding: 0}}>{product.price}</h6>
                                <p style={{color:'grey', fontSize:10}}>{product.category}</p>
                                <button style={{background:'#44FFFF'}}>Comprar</button>
                                <ItemCount stock={10} initial={1} onAdd={handleOnAdd}></ItemCount>
                            </div>
                })} */}
           
        </>
    )
}

export default ItemListContainer;