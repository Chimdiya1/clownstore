import React, { useContext,useEffect,useState } from 'react';
import CartItem from './Cart_item';
import { CartContext } from '../contexts/CartContext';
import '../shopCart.css';
const ShopCart = () => {
  
  const { cart, total,addTotal,resetTotal } = useContext(CartContext);


  const CartLists = cart.length ? (
    cart.map((item) => {
      return <CartItem key={item.id} item={item} />;
    })
  ) : (
    <div></div>
  );
  return (
    <div className="shop_cart">
      <h3>Cart</h3>
      {CartLists}
      <div className="total">
        <p>TOTAL</p>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default ShopCart;
