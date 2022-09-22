import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './Container/itemListContainer';
import ItemDetailContainer from './Container/itemDetailContainer'
import Cart from './Container/CartContainer';
import ShopProvider from './components/Context';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <ShopProvider>
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
    </ShopProvider>
  );
}

export default App;
