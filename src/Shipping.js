import React from 'react';
import "./shipping.css";
import {AiOutlineShoppingCart} from "react-icons/ai";

function Shipping() {
  return (
    <div className='shipping'>
        <div className='heading'>
            <h1>Shipping and payment</h1>
        </div>
        <AiOutlineShoppingCart className='icon'/>
      
    </div>
  )
}

export default Shipping;
