import React from 'react';
import "./Payment.css"
import {FaCcPaypal} from "react-icons/fa";
import {SiDpd} from "react-icons/si";
import {FaCcVisa, FaCcMastercard, FaCcDiscover, FaDhl, FaFedex, } from "react-icons/fa";


function Payment() {
  return (
    <div className='payment-section'>
        <h1> Payment Method</h1>
        <div className='payment-icons'>
            <FaCcPaypal className='payment-method'/>
            <FaCcMastercard className='payment-method'/>            
            <FaCcVisa className='payment-method'/>
        </div>
        <div className='payment-icons'>
             <FaCcDiscover className='payment-method'/>
             <FaCcPaypal className='payment-method'/>
             <FaCcMastercard className='payment-method'/>
        </div>
        <div className='delivery-method'>
            <h1>Delivery Method</h1>
        </div>
        <div className='delivery-icon'>
            <FaDhl className='payment-method'/>
            <FaFedex className='payment-method'/>            
        </div>
        <div className='delivery-icon'>
            <SiDpd className='payment-method'/>
            <FaDhl className='payment-method'/>
        </div>
     
        
        
      
    </div>
  )
}

export default Payment;
