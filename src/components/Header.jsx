import { Button, Navbar } from 'flowbite-react'
import React from 'react'
import logo from '../assets/logo2.png'
const Header = () => {
  return (
    <Navbar fluid={true} rounded={false}>
      
    <Navbar.Brand href="#">
      <img
        src={logo}
        className="mr-3 h-16 sm:h-19"
        alt="Logo"
      />
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>Contact Us</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/navbars">
        HOME
      </Navbar.Link>
      <Navbar.Link href="/navbars">ABOUT US</Navbar.Link>
      <Navbar.Link href="/navbars">COLLECTION</Navbar.Link>
      <Navbar.Link href="/navbars">DOWNLOADS</Navbar.Link>
      <Navbar.Link href="/navbars">UTILITIES</Navbar.Link>
    </Navbar.Collapse>
    
  </Navbar>
  )
}

export default Header