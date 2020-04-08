import React from 'react'
import styles from './teacher.module.css'
//import instagram from "../../public/instagram.png" // Tell Webpack this JS file uses this image
import { Image, Container, Row, Col } from 'react-bootstrap';


export default ({ data2 }) => (
  <div className={styles.teacher}>


    <div className={styles.teacherDetails}>
      



<ul className={styles.containerSpaced}>
  <li class="flex-item"><div className={styles.teacherName}>{data2.name}
</div></li>
<li class="flex-item">
    <a href={data2.instagram}>
<Image src={instagram} className={styles.insta}  />
</a>

    
    </li>
</ul>



      <div className={styles.teacherBio}>{data2.bio.bio}</div>
      
  


    </div>
  </div>
)
