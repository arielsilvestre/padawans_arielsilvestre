const Button = ({label, backgroundColor, colorText, handleClick}) =>{ //le paso props al boton
    return (
        <button style={{backgroundColor, color: colorText}} onClick={handleClick}>{label}</button>
    )
}

export default Button;
