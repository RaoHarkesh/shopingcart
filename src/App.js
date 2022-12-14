import Navbar from './components/navbar';

import './App.css';
import Home from './components/home';
import Cart from './components/cart';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Product from './components/product';
import Preview from './components/preview';
function App() {
  return (
  <>
  
  <BrowserRouter>
  <Navbar/>
  
  <Switch>
    
    <Route path="/home">
    <Home/>    
    </Route>
  <Route path="/cart">
  <Cart/>
  </Route>
  <Route path="/preview/:id">
    <Preview/>
  </Route>
  <Route path="/">
      
      <Home/>
    </Route>
  </Switch>
  </BrowserRouter>
  </>
  );
}

export default App;