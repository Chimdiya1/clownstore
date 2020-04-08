import React,{useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

const Prompt = () => {
      const { added,changeAdd } = useContext(CartContext);

    if (added) {
        return (
            <div className="prompt" onClick={() => changeAdd()}>
                <div>
                    <p>Added to cart</p>
                    <p>x</p>
                </div>
          
            </div>
        )
    } else {
      return (
        <div >
          
        </div>
      );
    }
  }
      
 
export default Prompt;