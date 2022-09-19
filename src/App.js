import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/Container/itemListContainer';
import ItemDetailContainer from './components/Container/itemDetailContainer';
import Cart from './components/Container/CartContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar/>
    </div>
    <div>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:CategoryId' element={<ItemListContainer/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
    </Routes>
    </div>
    <div className="App">

    </div>
    </BrowserRouter>
  );
}

export default App;
