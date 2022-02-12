import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) =>{ //le paso props al boton
    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`);
    }
    
    return (
        <>
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}></ItemCount>
        </>
    )
}

export default ItemListContainer;