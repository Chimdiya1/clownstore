import React, {useContext} from 'react';
import '../productItem.css';
import { CartContext } from '../contexts/CartContext';
const ProductItem = (props) => {
  const {addItem} = useContext(CartContext)
    const item = props.item
    return (
      <div className="product_item">
        <div className="col1">
          <img src={item.img} alt={item.name}></img>
          <p className="item_name">{item.name}</p>
          <p className="item_price">{item.price}</p>
        </div>
        <div className="col2">
          <p>{item.shortDesc}</p>
          <button
            onClick={()=>addItem(item)}
            className="to_cart"
          >Add to Cart</button>
        </div>
      </div>
    );
}
 
export default ProductItem;