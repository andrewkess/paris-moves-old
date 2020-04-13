import React, { Component } from "react";
//import './menu-button.css';
import VogueVideo from "../../static/videoplayback2.mp4"

 
class VideoFullScreen extends Component {
  render() {
    return (


<video autoplay="true"
          width="100%"
          height="auto"
          preload="auto"
          muted="true"
          playsinline="true"
          loop="true"> 
    <source src={VogueVideo} type="video/mp4" class='headerVid'/>
  </video>
      
    );
  }
}
 
export default VideoFullScreen;

