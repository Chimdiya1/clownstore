import React, {useContext} from 'react';
import CartItem from './Cart_item'
import {CartContext} from '../contexts/CartContext'
const ShopCart = () => {
    const { cart } = useContext(CartContext);
    console.log(cart)
    const CartLists = cart.length ? (cart.map((item) => {
      return <CartItem key={item.id} item={item} />;
    })) : (
            <div>
                
            </div>
    )
    return <div className="shop_cart">{CartLists}</div>;
}
 
export default ShopCart;