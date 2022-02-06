const CartWidget = ({num}) =>{
    return (
        <>
            <img src="http://simpleicon.com/wp-content/uploads/cart.png" style={{'height': '20px'}}></img>
            <h3 style={{'display':'inline'}}> {num}</h3>
        </>
    )
}

export default CartWidget