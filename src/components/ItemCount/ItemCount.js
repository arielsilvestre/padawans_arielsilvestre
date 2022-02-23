import { tab } from "@testing-library/user-event/dist/tab"
import { useState } from "react"
 
const ItemCount = ({stock, initial, onAdd}) => {
    const[quantity,setQuantity] = useState(initial)


const increment = () => {
    if(quantity < stock){
        setQuantity(quantity+1)
    }
}

const decrement = () => {
    if (quantity>0){
        setQuantity(quantity -1)
    }
}

return (
    <div align="center">
        <table>
            <tbody>
                <tr>
                    {/* <td><button onClick={()=>console.log("hola")}>Hola</button></td> */}
                    <td align="left"> <button  onClick={() => decrement()}> - </button></td>
                    <td align="center">{quantity}</td>
                    <td align="right"> <button className="" onClick={() => increment()}> + </button> </td>
                </tr>
                
            </tbody>
        </table>
            <button onClick={() => alert("se agregó al carrito")}>Comprar</button>
    </div>
)
}

export default ItemCount

/*const ItemCount = ({label, backgroundColor, colorText, handleClick}) =>{ //le paso props al boton
    <>
        <h6>{label}</h6>
        
    </>
} */