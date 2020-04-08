import React from 'react'
import styles from './teacher.module.css'
import Img from 'gatsby-image'
import { Carousel, Image } from 'react-bootstrap'






export default ({ data2 }) => (



  <div className={styles.teacher} height="400px">
<Carousel>
  <Carousel.Item>




      <Img className="d-block w-100" alt="" fluid={data2.heroImage.fluid} />


  </Carousel.Item>
</Carousel>
      


  </div>
)