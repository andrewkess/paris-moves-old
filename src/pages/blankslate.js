import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class NavbarTry extends React.Component {
  render() {
  

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          BLANK SLATE
        </div>
      </Layout>
    )
  }
}

export default NavbarTry