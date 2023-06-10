import React from 'react'
// import BsCart3 from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import './header.css'
const header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <h4>TeeRex Store</h4>
        </div>
        <div className='links'>
            <ul>
                <li>Products</li>
                <li><BsCart3 /></li>
            </ul>
        </div>
    </div>
  )
}

export default header