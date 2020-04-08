import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import VogueVideo from "../../static/videoplayback2.mp4"


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />

        <video autoplay="true"
          width="100%"
          height="auto"
          preload="auto"
          muted="true"
          playsinline="true"
          loop="true">
    <source src={VogueVideo} type="video/mp4" />
  </video>

        {children}
      </Container>
    )
  }
}

export default Template
