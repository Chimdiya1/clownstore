import React from 'react';
import {ProductList} from './ProductList';
import ProductItem from './ProductItem'
const Products = () => {
    
    const ProductLists = ProductList.map(item => {
        return (<ProductItem key={item.id} item={item}/>)
    })
    return ( 
        <div className="products">
            <h1>Products</h1>
            {ProductLists}
        </div>
     );
}
 
export default Products;
