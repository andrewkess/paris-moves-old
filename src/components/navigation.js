import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default () => (
  <div>
 
 
 <Navbar bg="black" variant="dark" expand="xs" 
>

 

<Navbar.Toggle aria-controls="basic-navbar-nav"  />



<Navbar.Brand href="/"  className="row align-items-start" >PARIS MOVES</Navbar.Brand>


      <Nav className="justify-content-start" activeKey="/home">
    <Nav.Item className="flex">
      <Nav.Link href="/home">EN</Nav.Link>
    </Nav.Item>
    <Nav.Item className="flex">
      <Nav.Link eventKey="link-1">FR</Nav.Link>
    </Nav.Item>
    <Nav.Item className="flex">
      <Nav.Link eventKey="link-2">SC</Nav.Link>
    </Nav.Item>
  </Nav>
  

</Navbar>



       

  </div>
)
