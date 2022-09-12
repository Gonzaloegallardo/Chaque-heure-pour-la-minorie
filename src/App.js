import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/Container/itemListContainer';
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
      
    </Routes>
    </div>
    <div className="App">

    </div>
    </BrowserRouter>
  );
}

export default App;
