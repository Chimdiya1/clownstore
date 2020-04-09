import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
const CartItem = (props) => {
  const { removeItem, addTotal, resetTotal } = useContext(CartContext);
  const [amount, setAmount] = useState(1);
    useEffect(()=> {
      item.total = item.price ;

      addTotal();
      return ()=>{addTotal()}
    },[])
  
  const item = props.item;
  return (
    <div className="cart_item">
      <div className="col">
        <img className="item_pic" src={item.img} alt={item.name}></img>
      </div>
      <div className="col" id="details">
        <div className="row_a">
          <p>Item</p>
          <p>Amount</p>
          <p>Price</p>
        </div>
        <div className="row_b">
          <p>{item.name}</p>
          <p>
            <select
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                item.total = item.price * e.target.value;

                addTotal();
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>${(item.price * amount).toFixed(2)}</p>
        </div>
      </div>
      <div className="col" id="cancel">
        <p onClick={() => removeItem(item)} style={{ textAlign: 'center' }}>
          X
        </p>
      </div>
    </div>
  );
};

export default CartItem;
