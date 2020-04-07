import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import VogueVideo from "../../static/videoplayback2.mp4"
import Teacher from '../components/teacher'
import TeacherBio from '../components/teacherbio'
import Img from 'gatsby-image';



import ClassPreview from '../components/class-preview'
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const danceClasses = get(this, 'props.data.allContentfulClass.edges')
    const [instructor] = get(this, 'props.data.allContentfulTeacher.edges')


    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
        

          <video autoplay="true"
          width="100%"
          height="auto"
          preload="auto"
          muted="true"
          playsinline="true"
          loop="true">
    <source src={VogueVideo} type="video/mp4" />
  </video>



  <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Meet your dance teachers</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>


          




          <Container>


  

          <Row>
    <Col xs={12} sm={12} md={12} lg={6}>
      
    <Teacher data2={instructor.node} />

    </Col>
    <Col xs={12} sm={12} md={12} lg={6}>
      
    <TeacherBio data2={instructor.node} />


            <h4 className="classes-headline">Book a class</h4>

           
            <ListGroup>
           
           



              {danceClasses.map(({ node }) => {
                return (
                 
                    <ClassPreview danceClass={node} />
              
                )
              })}
               </ListGroup>
       




    </Col>
  </Row>
  </Container>





         
          </div>







      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }


    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }

    allContentfulTeacher(
      filter: { contentful_id: { eq: "4Uv7ed9AQAa6as1lWdw4J3" } }
    ) {
      edges {
        node {
          name
          bio {
            bio
          }
          instagram
         
         
          heroImage: visual {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: FILL
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        
        
        
        
        }
      }
    }


    allContentfulClass(sort: { fields: [date], order: ASC }) {
      edges {
        node {
          name
          price
          duration
          type
          date(formatString: "D")
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

