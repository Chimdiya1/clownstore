import React from 'react';
import Header from './Components/header';
import Home from './Components/Home';
import Products from './Components/Products';
import { ProductList } from './Components/ProductList';
import ProductPage from './Components/ProductPage'
function App() {
  const ProductPages = ProductList.map((item) => {
    return <ProductPage key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
      {ProductPages}
    </div>
  );
}

export default App;
