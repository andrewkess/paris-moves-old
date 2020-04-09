import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'
import ClassPreview from '../components/class-preview'


import styles from '../components/teacher.module.css'
//import instagram from "../../../public/instagram.png" // Tell Webpack this JS file uses this image
import { Image, Container, Row, Col, ListGroup } from 'react-bootstrap';



class BlogPostTemplate extends React.Component {
  render() {

//    const post = get(this.props, 'data.contentfulBlogPost')
    const post = get(this.props, 'data.contentfulTeacher')

    const danceClasses = get(this, 'props.data.allContentfulClass.edges')

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')





// moment.js comes with gatsby
const moment = require('moment');



  const SOME_TIMESTAMP  =  moment().format('X');

  const SOME_TIMESTAMP2  =  moment().format("DD-MM-YYYY hh:mm:ss")







    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.name} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
           
           
            <Img
              className={heroStyles.heroImage}
              alt={post.name}
              fluid={post.heroImage.fluid}
            />
          </div>



          <div className="wrapper">




<div className={styles.teacherDetails}>
  



<ul className={styles.containerSpaced}>
<li class="flex-item"><div className={styles.teacherName}>


    {post.name}
</div></li>
<li class="flex-item">
<a href={post.instagram}>
Insta
</a>
</li>
</ul>



  <div className={styles.teacherBio}>{post.bio.bio}


  
  </div>
  



</div>
</div>
</div>



<div className="wrapper">

<h4 className="classes-headline">Book a class</h4>


<ListGroup>
           {danceClasses.map(({ node }) => {


return (
              
                 <ClassPreview danceClass={node} />
           
             )
           })}

            </ListGroup>
</div>


      </Layout>
    )
  }
}



// filter to filter out classes that are older than today
//fields: { timestamp: { gt: $today } }, 
//also need to include these variable declarations at the top, right after $slug:String!,

export default BlogPostTemplate

export const pageQuery = graphql`
  query 
  
  BlogPostBySlug2(
    $slug: String!,
    $today: Int!
    ) {
    
site {
      siteMetadata {
        title
      }
    }
    

    contentfulTeacher (webUrl: { eq: $slug })
     {
        
            name
            bio {
              bio
            }
            instagram
           
           
            heroImage: visual {
              fluid(
                maxWidth: 1180
                maxHeight: 480
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulFluid
              }
            }
        }




        
        
        
       



            allContentfulClass(

                

                sort: {
                    fields: [date], order: ASC
                }, 
                
                
                filter: {
                    fields: { timestamp: { gt: $today } },  teacher: {webUrl: {eq: $slug}} 
                }
                
                
                
                
                
                ) {
                edges {
              node {
                name
                price
                duration
                type
                date(formatString:"DD")
                fields {timestamp}

                month: date(formatString: "MMM")
                time: date(formatString: "h:mm A")
                
               
                description {
                  childMarkdownRemark {
                    rawMarkdownBody
                  }
                }
              }
            }
          }








  }
`
