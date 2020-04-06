import React from 'react'
import styles from './teacher.module.css'
import Img from 'gatsby-image'

export default ({ data2 }) => (
  <div className={styles.teacher}>


    <div className={styles.teacherDetails}>
      <h3 className={styles.teacherHeadline}>{data2.name}</h3>
      <p>{data2.bio.bio}</p>

      {data2.instagram}

      <Img alt="" fluid={data2.heroImage.fluid} />


    </div>
  </div>
)
