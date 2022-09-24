import React from 'react';
import "./Registeration.css"
import {AiOutlineShoppingCart} from "react-icons/ai";
import Payment from "./Payment";
import {IoMdArrowRoundBack} from "react-icons/io";

function Registeration() {
    function HandleSubmit(e) {
        const name= e.target.value;
        return name;

    };
    return (
      <div className='registeration'>
        <div className='form'>
            <div className='header'>
                <h1> Shipping and Payment</h1>
                <AiOutlineShoppingCart className='icons'/>
            </div>
            <div className='button'>
                <button className='buttons'>LOGIN</button>
                <button className='buttons'>SIGN UP</button>
            </div>
            <div className='lastt'>
                <div className='back'>
                    <IoMdArrowRoundBack className='back-icon'/>
                    <h1 style={{color:'black'}}> Back</h1>
                </div>
                <div className='final-button'>
                    <button className='buttonss'>CONTINUE SHOPPING</button>
                    <button className='buttonss'>PROCEED TO PAYMENT</button>
                </div>
                
            </div>
            
            <form className='formm ' onSubmit={HandleSubmit}>
                <div className='row-one'>
                    <input type="text" placeholder='Email' className='input'/>
                    <input type="text" placeholder='First Name' className='input'/>
                    <input type="text" placeholder='Last Name' className='input'/>
                    <input type="text" placeholder='Phone Number' className='input'/>
                </div>
                <div className='row-two'>
                    <input type="text" placeholder='Address' className='input'/>
                    <input type="text" placeholder='City' className='input'/>
                    <input type="text" placeholder='Postal Code' className='input'/>
                    <input type="text" placeholder='India' className='input'/>
                    
                </div>
                <div className='submit'>
                    <button type="submit" className='buttons'>Submit</button>
                </div>
                <div className='payment'>
                    <Payment />
                </div>
   
            </form>
        </div>
      
      </div>
  )
}

export default Registeration;
