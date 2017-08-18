import React, { Component } from 'react'
import './ModalRegister.scss'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import Logo from './../../images/logo_mooda_white_big.png'
import FacebookLogin from './../../facebook/facebook'

const responseFacebook = (response) => {
  console.log(response)
}

class ModalRegister extends Component {
  render () {
    const isActive = this.props.modal_state ? 'is-active' : ''
    return (
      <div className={`modal ${isActive}`} id='modal'>
        <div className='modal-background' onClick={this.props.onClose} />
        <div className='modal-content'>
          <div className='login-form-header'>
            <img src={Logo} alt='' />
          </div>
          <div className='login-form-panel'>
            <p className='intro'>
              Daftar MOODA <br />
              lorem ipsum di dolor amet consectetur adipisicing elit
            </p>
            <div className='buttonSet'>
              <FacebookLogin
                appId='1966921796909853'
                
                fields='name,email,picture'
                callback={responseFacebook}
                textButton='Daftar dengan Facebook'
                cssClass='button  login-button button-fb' />
              <button className='button  login-button button-tw'>
                <span>Daftar dengan Twitter</span>
              </button>
              <button className='button  login-button button-gl'>
                <span className='icon'>
                  <i className='fa fa-home' />
                </span>
                <span>Daftar dengan Google</span>
              </button>
              <Link to='/register' className='button  login-button button-email'>
                <span>Daftar dengan Email</span>
              </Link>
            </div>
            <div className='tnc'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ullam dolorem sint perspiciatis.
              Accusantium doloremque voluptate tempora
              obcaecati est, sed enim nemo consequuntur,
              aliquid vero assumenda fugiat perferendis sunt
              consectetur quis.
              </p>
            </div>
          </div>
        </div>
        <button className='modal-close is-large' aria-label='close' onClick={this.props.onClose} />
      </div>
    )
  }
}

ModalRegister.propTypes = {
  modal_state : PropTypes.bool,
  onClose: PropTypes.func,
}

export default ModalRegister
