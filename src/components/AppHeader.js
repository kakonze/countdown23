import Logo from '../images/logo.png';
import React from 'react'

export default function Header() {
  return (
     <div className="navbar navbar-expand-sm bg-primary navbar-dack px-sm-5">
    
    <div className="navbar-header">
        <div className="container-fluid">

          <div className="navbar-header">
        <div className="navbar-brand">
            COUNTDOWN
            </div>
            </div>
            </div>
            <ul className="nav navbar-nav">
              <li className='nav-item active'>Details</li>
              <li className='nav-item active'>Options</li>
              <li className='nav-item active'>Settings</li>
              <li className='nav-item active'>About</li>
            </ul>

        
      </div>
    
    </div>
  )
}
