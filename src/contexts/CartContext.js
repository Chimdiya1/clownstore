import React, { useContext, useState, createContext } from 'react';


export const CartContext = createContext()
const CartContextProvider = (props) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        if (cart.length===0){
            setCart([ item]);
        }
        else {if (!cart.includes(item)) {
            setCart([...cart, item]);
        }}
    }
    return ( 
        <CartContext.Provider value={{cart,addItem}}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;