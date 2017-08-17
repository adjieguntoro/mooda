import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Opener from './../../../components/Opener/Opener'
import Register_Panel from './../../../components/Register_Panel/Register_Panel'


class HomeView extends Component {
  render () {
    return (
      <div>
        <Opener />
        <Register_Panel />
      </div>
    )
  }
}
export default HomeView
