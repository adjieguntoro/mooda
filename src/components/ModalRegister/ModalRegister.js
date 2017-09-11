import React, { Component } from 'react'
import './ModalRegister.scss'
import { Link, browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import Logo from './../../images/logo_mooda_white_big.png'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

class ModalRegister extends Component {
  responseFacebook = (response) => {
    console.log(response)
    browserHistory.push('thankyou')
  }

  responseFFacebook = (response) => {
    console.log(response)
    browserHistory.push('/')
  }

  responseGoogle = (response) => {
    console.log(response)    
    browserHistory.push('thankyou')
  }

  responseFGoogle = (response) => {
    console.log(response)
    browserHistory.push('/')
  }

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
              
            </p>
            <div className='buttonSet'>
              <FacebookLogin
                appId='1966921796909853'
                fields='name,email,picture'
                callback={(e) => this.responseFacebook()}
                textButton='Daftar dengan Facebook'
                cssClass='button  login-button button-fb' />

              <GoogleLogin
                clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
                buttonText='Daftar dengan Google'
                className='button login-button button-gl'
                onSuccess={(e) => this.responseGoogle(e)}
                onFailure={(e) => this.responseFGoogle()} />
                
              <Link to='/register'className='button  login-button button-email'>
                <span>Daftar dengan Email</span>
              </Link>
            </div>
            <div className='tnc'>
              <p>Dengan membuat akun di Mooda, kamu berkesempatan untuk menjadi orang pertama yang
                diberitahukan ketika Mooda siap untuk kamu gunakan. Kami akan mengirimkan kabar baik selanjutnya
                melalui alamat email yang kamu daftarkan.
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
