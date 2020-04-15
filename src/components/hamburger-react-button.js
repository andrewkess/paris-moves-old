import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'

import "./menu.css";
import { Link } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'
import styles from './menu-button.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { IconContext } from "react-icons";



class Demo extends React.Component {
  showSettings (event) {
    event.preventDefault();
  
  }

  render () {

    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '15px',
          top: '15px'
        },
        bmBurgerBars: {
          background: 'white'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

      
      
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={ styles } width="100%">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>



      </Menu>
    );
  }
}

export default Demo;