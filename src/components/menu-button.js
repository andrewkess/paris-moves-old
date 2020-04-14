import React, { Component } from "react";
import {Button} from 'react-bootstrap'


class MenuButton extends Component {

 

  render() {




    return (
    



<Button class="hamburger hamburger--slider active" type="button" onMouseDown={this.props.handleMouseDown}>
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</Button>  






 
    );
  }
}
 
export default MenuButton;