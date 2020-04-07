import React,{useContext} from 'react';
import cartpic from './favicon-32x32.png';
import { CartContext } from '../contexts/CartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)
  
    return (
      <div>
        <p className="cart_items">{cart.length}</p>
        <img src={cartpic} alt="Cart" height="20" width="20"></img>
      </div>
    );
}
 
export default Cart;