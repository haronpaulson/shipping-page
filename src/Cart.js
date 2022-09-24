import React from 'react';
import "./Cart.css";
import {MdLocalShipping} from "react-icons/md";

function Cart() {
  return (
    <div className='cart'>
        <div className='my-art'>
            <div className='my-cart'>
                <h1 className='cart-heading'> Your Cart</h1>
                <div className='ad'>
                    <img src="ad1.png" className='ad-image'></img>
                    <div className='ad-caption'>
                        <h2 className='ad-caption-main'>T-Shirt <br/> Summer vibes</h2>                   
                        <p1> #261311</p1>
                    </div>
                    <h4> $89.99</h4>
                </div>
            </div>
            <div className='my-cart'>
                <div className='ad'>
                    <img src="addd.png" className='ad-image'></img>
                    <div className='ad-caption'>
                        <h2>Basic-Slim<br/>Fit T--Shirt</h2>
                        
                        <p1> #212315</p1>
                    </div>
                    <h4> $69.99</h4>
                </div>
            </div> 
            <div className='total'>
                <h4 className='total-cost'> Total Cost</h4>
                <h5>$159.95</h5>
            </div>
            <div className='lasttt'>
                <MdLocalShipping className='shipping-truck'/>
                <p4>You are $30.02 away<br/> from ree shipping!</p4>

            </div>          

        </div>
      
    </div>
  )
}

export default Cart;
