import Button from '../Button/Button';

const NavBar = ({children}) =>{
    const handleCelular = () => {
        console.log('Celular')
    }
    const handleTablet = () => {
        console.log('Tablet')
    }
    const handleNotebook = () => {
        console.log('Notebook')
    }

    return (
        <nav className='navBar'>
        <div className="container-fluid" >
            <a className="navbar-brand" href="#">Navbar</a>
            <Button label={'Celular'} backgroundColor={'red'} colorText={'white'} handleClick={handleCelular}/> 
            <Button label={'Tablet'} backgroundColor={'green'} colorText={'white'} handleClick={handleTablet}/> 
            <Button label={'Notebook'} backgroundColor={'blue'} colorText={'white'} handleClick={handleNotebook}/> 
            <Button label={'iPad'} backgroundColor={'grey'} colorText={'white'} /> 
            {children}
      
        </div>
        </nav>
    )
}

export default NavBar