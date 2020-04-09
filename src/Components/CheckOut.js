import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CheckOut = () => {
  const { cart, checkOut, changeCheck } = useContext(CartContext);

  if (checkOut && cart.length>0) {
    return (
        <div className="prompt" onClick={()=>
            {if(cart>0){
              changeCheck()
            }}
            
        }>
        <div>
          <p>Checkout successful reload</p>
          <p>x</p>
        </div>
      </div>
    );
  } else if(cart.length==0){
    return <div style={{color:'red'}}>cart is empty</div>;
  } else {
      return<div></div>
  }
};

export default CheckOut;
