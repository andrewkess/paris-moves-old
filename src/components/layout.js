import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import hamburgers from './hamburgers.css'
import Container from './container'
import Navigation from './navigation'
import Demo from './hamburger-react-button'



//import CustomNavBar from './custom-navbar'
//<CustomNavBar />

//To add full screen video module just import and then add this component to layout below
//import VideoFullScreen from './video-full-screen'
//<VideoFullScreen />


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
     <div>
      <Navigation />
     <Container>
        {children}
      </Container>
      </div>
    )
  }
}

export default Template