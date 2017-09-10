import React, { Component } from 'react'
import './HomeView.scss'
import Navbar from './../../../components/Navbar'
import Footer from './../../../components/Footer'
import Opener from './../../../components/Opener/Opener'
import RegisterPanel from './../../../components/RegisterPanel/RegisterPanel'

class HomeView extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div>
          <Opener />
          <RegisterPanel />
        </div>
        <Footer />
      </div>
    )
  }
}
export default HomeView
