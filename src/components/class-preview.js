import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Button, ListGroup, ListGroupItem, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './class-preview.module.css'


function alertClicked() {
  alert('You clicked the third ListGroupItem');
}


export default ({ danceClass }) => (
  <div className={styles.preview}>



    <ListGroup.Item action onClick={alertClicked}>
    <div class="d-flex w-100 justify-content-between">
      
      <div class="mb-1" className={styles.preview}>
        


     <div className={styles.previewTitle}>{danceClass.name}</div>
         
     <div className={styles.previewPrice}>{danceClass.duration} <span className={styles.grayDot}>•</span> €{danceClass.price}</div>

 <div class="mb-1 card-text" className={styles.previewDescription}>{danceClass.description.childMarkdownRemark.rawMarkdownBody}</div>
  

</div>



<div className={styles.previewEventblock}>
<div className={styles.previewDay}>{danceClass.date}</div>
<div className={styles.previewMonth}>{danceClass.month}</div>
<div className={styles.previewTime}>{danceClass.time} 


<div className={styles.previewParis}>PARIS TIME</div>

</div>
</div>


    </div>
 


    </ListGroup.Item>
 <div className={styles.previewPostpad}> </div>



  </div>
)
