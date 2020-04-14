import React, { Component } from "react";
//import './menu-button.css';
import { Container, Col, Row, Nav, Navbar, Button} from 'react-bootstrap'
import {Link} from 'gatsby'
//import './navicon.scss';
//import './navicon'
import styles from './menu-button.module.css'
import { FiShoppingCart } from 'react-icons/fi'

import { IconContext } from "react-icons";


class MenuButton extends Component {

 

  render() {




    return (
    

<Container className={styles.navigationBar} fluid>
    
  <Row>
    <Col className={styles.navMenuContainer}>
    

<button class="hamburger hamburger--slider active" type="button" onMouseDown={this.props.handleMouseDown}>
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>  




    
</Col>
    <Col className={styles.navbarMenu} xs={6}>
        
        
        
   
        
   
              
    <Link to="/">
        <div className="sign">
        Paris <span className="flicker">M</span><span className="flicker">oves</span>
        </div>
        
        
        </Link>
       
         
        
        
    
        
        
</Col>
    <Col className={styles.rightMenu}>
        

<Link to="/" 



className={styles.langLink} activeClassName={styles.activeLang}>EN</Link> 
<Link to="/blog/" 



className={styles.langLink} activeClassName={styles.activeLang}>FR</Link>



<IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  <span>

  <Link to="#" className={styles.cartLink}><FiShoppingCart /></Link>

  </span>
</IconContext.Provider>



        
        </Col>
  </Row>



</Container>


 
    );
  }
}
 
export default MenuButton;