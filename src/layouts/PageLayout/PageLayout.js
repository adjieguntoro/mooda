import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import 'bulma-scss'
import Navbar from './../../components/Navbar'
// import Opener from './../../components/Opener'
// import RegisterPanel from './../../components/RegisterPanel'
import Footer from './../../components/Footer'

export const PageLayout = ({ children }) => (
  <div className='layout-default'>
    {
      // <Navbar />
    }
    <div className='page-layout__viewport content u-flex-auto'>
      {children}
    </div>
    {
      // <Footer />
    }
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
