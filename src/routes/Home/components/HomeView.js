import React, { Component } from 'react'
import './HomeView.scss'
import Opener from './../../../components/Opener/Opener'
import RegisterPanel from './../../../components/RegisterPanel/RegisterPanel'

class HomeView extends Component {
  render () {
    return (
      <div>
        <Opener />
        <RegisterPanel />
      </div>
    )
  }
}
export default HomeView
