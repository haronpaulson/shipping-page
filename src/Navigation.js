import React from 'react';
import "./Navigation.css";
import {BsSearch} from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import {RiRemixiconLine} from "react-icons/ri";

function Navigation() {
  return (
    <div className='navigation'>
        <div className='title' style={{display:'flex', alignItems:'center'}}>
            <RiRemixiconLine className='head-icon'/>
            <h1><span style={{color:'darkorange'}}>E-</span>Shop</h1>
        </div>
        <div className='category'>
            <ul className='gender'>
                <li className='category-gender'>Men</li>
                <li className='category-gender'>Women</li>
                <li className='category-gender'>Kids</li>
            </ul>
        </div>
        <div className='search-icon'>
            <BsSearch className='icon'/>
            <AiOutlineShoppingCart  className='icon'/>
            <BsFillPersonFill className='icon' />

        </div>
      
    </div>
  );
}

export default Navigation;
