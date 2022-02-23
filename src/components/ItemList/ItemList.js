import { useState } from "react"

const ItemList = (products) => {
    const[p,setP] = useState(products)
    console.log(p)
   
    p.map(product=>{
        return (<div style={{fontSize:20}}>
                   key={product.id}
                   <h5>{product.name}</h5>
                   <img src={product.img}></img>
                   <h6 style={{padding: 0}}>{product.price}</h6>
                   <p style={{color:'grey', fontSize:10}}>{product.category}</p>
                   <button style={{background:'#44FFFF'}}>Comprar</button>
                 
               </div>)
    })
}

export default ItemList