import React, { Component } from "react";
import "./menu.css";
import { Link } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
import styles from './menu-button.module.css'
import { FiShoppingCart } from 'react-icons/fi'

import { IconContext } from "react-icons";

class Menu extends Component {
    render() {
      var visibility = "hide";
  
      if (this.props.menuVisibility) {
        visibility = "show";
      }
  
      return (
       
       <Container ><Row id="flyoutMenu"
             
       className={visibility}><Col className="menu-left-column">
        <div >
                 <button class="hamburger hamburger--slider is-active" type="button" onMouseDown={this.props.handleMouseDown}>
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>  
         
         <div class="menuContainer">

          <h2><a href="#">About</a></h2>
          <h2><a href="#">Instructors</a></h2>
          </div>

          <div className="instructorBar">

          <h4><Link to="/blog/">Lara Laquiz</Link></h4>
          <h4><Link to="/blog/">Melvin Hans</Link></h4>
          </div> 
          <div class="menuContainer2">
          <h2><a href="#">Contact</a></h2>
          <h2><a href="#">Privacy</a></h2>
          </div>
         <div className="devbar">
          <h6><Link to="/original/">Original Settings</Link></h6>
  <h6><Link to="/blog/">Blog</Link></h6>
  </div>
       
       
        </div>

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
  
  export default Menu;