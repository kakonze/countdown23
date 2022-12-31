import Logo from '../images/logo.png';
import React from 'react'

export default function Header() {
  return (
   <div className='nav'>
  
    <div className='nav navbar navbar-expand-lg mx-4'><img src={<Logo/>} alt='logo'/> </div>
    <div className='collapse navbar-lg'>
        <ul className='nav navbar-nav text-capitalize mx-auto'>
            <li className='navbar-item active'> </li>
            <li className='navbar-item active'> </li>
            <li className='navbar-item active'> </li>
            <li className='navbar-item active'> </li>
            <li className='navbar-item active'> </li>
        </ul>
    </div>
    </div>
  )
}
