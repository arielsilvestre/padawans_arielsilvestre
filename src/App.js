import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
      <div className="App">
          <NavBar >
             <CartWidget num='2'></CartWidget>
          </NavBar>
          
          <ItemListContainer greeting="Hola Mundo!!"></ItemListContainer>
          

      </div>
  );
}

export default App;
