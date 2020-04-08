import React, { useContext, useState, createContext } from 'react';


export const CartContext = createContext()
const CartContextProvider = (props) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0);
    const resetTotal = () => {
        setTotal(1);
    }
    const addTotal = (num) => {
        let subsum = 0
        cart.forEach((item) => {
            subsum+=item.price*num
        })
        setTotal(subsum);
    };
    const addItem = (item) => {
        if (cart.length===0){
            setCart([ item]);
        }
        else {if (!cart.includes(item)) {
            setCart([...cart, item]);
        }}
    }
    const removeItem = (removed) => {
        setCart(cart.filter((item) => item !== removed));
    };
    return ( 
        <CartContext.Provider value={{cart,addItem,removeItem,total,resetTotal,addTotal}}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;