import React, { useContext,useEffect,useState } from 'react';
import CartItem from './Cart_item';
import { CartContext } from '../contexts/CartContext';
import '../shopCart.css';
import { Link } from 'react-router-dom'
import CheckOut from './CheckOut'
const ShopCart = () => {
  const navStyle = {
    textDecoration: 'none',
  };
  const { checkOut, changeCheck } = useContext(CartContext);
  const { cart, total,addTotal,resetTotal } = useContext(CartContext);
   useEffect(() => {

     addTotal();
     
   }, [cart]);

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
      <CheckOut />
      {CartLists}
      <div className="total">
        <p>TOTAL</p>
        <p>{total}</p>
      </div>
      <div className="row4">
        <button
          id="checkout"
          onClick={() => {
            if (cart.length>0) {
              changeCheck();
            }
          }}
        >
          Checkout
        </button>
        <Link id="see_more" to="/products" style={navStyle}>
          <button className="see_more">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default ShopCart;
