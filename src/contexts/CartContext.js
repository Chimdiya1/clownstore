import React, { useContext, useState, createContext } from 'react';

export const CartContext = createContext();
const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [added, setadded] = useState( false );
  const [checkOut, setCheckOut] = useState(false);
  const changeCheck = () => {
    setCheckOut(!checkOut)
  }
    const changeAdd = () => {
    
          setadded(!added);
        
  };
  const resetTotal = () => {
    setTotal(1);
  };
  const addTotal = () => {
    let subsum = 0;
    cart.map((item) => {
      subsum += item.total;
    });
    setTotal(subsum);
  };
  const addItem = (item) => {
    item.inCart = true
    item.count = 1
    const price = item.price; 
    item.total=price
    if (cart.length === 0) {
      setCart([item]);
    } else {
      if (!cart.includes(item)) {
        setCart([...cart, item], () => {
          addTotal();
        });
      }
    }
    
  };
  const removeItem = (removed) => {
    setCart(cart.filter((item) => item !== removed))
    addTotal()
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        total,
        resetTotal,
        addTotal,
        added,
        changeAdd,
        checkOut,
        changeCheck
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
