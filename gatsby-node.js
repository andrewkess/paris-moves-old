const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/teacher-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulTeacher {
              edges {
                node {
                  webUrl
                }
              }
            }


           



          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulTeacher.edges
        posts.forEach((post, index) => {
// moment.js comes with gatsby
const moment = require('moment');

          createPage({
            path: `/teacher/${post.node.webUrl}/`,
            component: blogPost,
            context: {
              slug: post.node.webUrl,
              today: parseInt((moment().format('X')))
              //todayTimeStamp: Date(document.data.event_date)
            },
          })
        })
      })
    )
  })
}

// moment.js comes with gatsby
const moment = require('moment');


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // I'm guessing your type is ContentfulClass
  if (node.internal.type === `ContentfulClass`) {
    const date = node.date;

    createNodeField({
      name: 'timestamp',
      node,
      // convert date to unix timestamp & convert to number
      value: +moment(date).format('X'),
    })


  }
}