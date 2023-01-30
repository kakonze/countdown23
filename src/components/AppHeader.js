import Logo from '../images/logo.png';
import React from 'react'
import {Navbar,
  Nav,
  NavItem,
  NavLink,
  NavBrand
} from 'reactstrap'

export default function Header() {
  return (

       <Navbar color='light' expand="md">
        
         <Nav className="mr-auto navbar">
            <NavItem>
              <NavLink href="">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Signup</NavLink>
            </NavItem>
         </Nav>
       </Navbar>

        
      
    
 
  )
}
