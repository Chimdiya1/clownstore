import React, { useContext } from 'react';
import Header from './Components/header';
import Home from './Components/Home';
import Products from './Components/Products';
import { ProductList } from './Components/ProductList';
import ProductPage from './Components/ProductPage'
import Prompt from './Components/Prompt'
import ShopCart from './Components/ShopCart'
import CartContextProvider from './contexts/CartContext';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const ProductPages = ProductList.map((item) => {
    return (
      <Route
        path={'/' + item.id}
        render={() => <ProductPage key={item.id} item={item} />}
      />
    );
  });
  
  return (
    <Router>
      <div className="App">
        <CartContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={ShopCart} />
            {ProductPages}
          </Switch>
          
        </CartContextProvider>
      </div>
    </Router>
  );
}

export default App;
