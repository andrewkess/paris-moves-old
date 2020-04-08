require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'PARIS MOVES • ONLINE DANCE STUDIO',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
      },
      {
        resolve: 'gatsby-remark-video',
        options: {
          width: 600,
          height: 'auto',
          preload: 'auto',
          muted: true,
          autoplay: true,
          playsinline: true,
          controls: false,
          loop: true
        }
      }
  ],
}



// moment.js comes with gatsby
const moment = require('moment');



  const SOME_TIMESTAMP  =  moment().format('X');

  const SOME_TIMESTAMP2  =  moment().format("DD-MM-YYYY hh:mm:ss")
