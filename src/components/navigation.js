import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { Navbar, Nav, Container, Col, Row, NavDropdown} from 'react-bootstrap';
import MenuContainer from './menu-container'
import Demo from '../components/hamburger-react-button'


export default () => (
<div>
 <div id="buttonNave"><Demo /></div>




<Navbar bg="dark" variant="dark"  expand="xs" sticky="top" fixed="top" className="float" >



<Navbar.Toggle aria-controls="basic-navbar-nav"  />



<Navbar.Brand href="/"  className="" >PARIS MOVES</Navbar.Brand>


      <Nav className="flex-row" activeKey="/home">
    <Nav.Item className="">
      <Nav.Link href="/blankslate">EN</Nav.Link>
    </Nav.Item>
    <Nav.Item className="">
      <Nav.Link eventKey="link-1">FR</Nav.Link>
    </Nav.Item>
    <Nav.Item className="">
      <Nav.Link eventKey="link-2">SC</Nav.Link>
    </Nav.Item>
  </Nav>
  

</Navbar>

</div>


)
