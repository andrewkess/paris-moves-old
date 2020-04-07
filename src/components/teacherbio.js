import React from 'react'
import styles from './teacher.module.css'
import instagram from "../../public/instagram.png" // Tell Webpack this JS file uses this image
import { Image, Container, Row, Col } from 'react-bootstrap';

export default ({ data2 }) => (
  <div className={styles.teacher}>


    <div className={styles.teacherDetails}>
      <div className={styles.teacherName}>{data2.name}
      <Image src={instagram} className={styles.insta} />
</div>


<Container>
<Row>
<Col xs={11} sm={11} md={11} lg={11}>{data2.name}
</Col>
<Col xs={1} sm={1} md={1} lg={1}> <Image src={instagram} fluid />
</Col>
</Row>
</Container>


      <div className={styles.teacherBio}>{data2.bio.bio}</div>
      
      
      {data2.instagram}

  


    </div>
  </div>
)
