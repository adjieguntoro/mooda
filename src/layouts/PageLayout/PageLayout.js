import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import 'bulma-scss'
import Navbar from './../../components/Navbar'
// import Opener from './../../components/Opener'
// import RegisterPanel from './../../components/RegisterPanel'
import Footer from './../../components/Footer'

export const PageLayout = ({ children }) => (
  <div className=''>
    <Navbar />
    {/* <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}
    <div className='page-layout__viewport'>
      {children}
    </div>
    <Footer />
  </div>
    // <section className="hero is-primary is-bold">
    //   <div className="hero-body">
    //     <div className="container">
    //       <h1 className="title">
    //         Hello World
    //       </h1>
    //       <p className="subtitle">
    //         My first website with <strong>Bulma</strong>!
    //       </p>
    //     </div>
    //   </div>
    // </section>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
