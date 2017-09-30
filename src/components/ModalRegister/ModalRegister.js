import React, { Component } from 'react'
import './ModalRegister.scss'
import { Link, browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import Logo from './../../images/logo_mooda_white_big.png'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

class ModalRegister extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users : {
        email : '',
        password : 'xxx',
        firstname : '',
        lastname : '',
        birth : {
          date : '01',
          month : '01',
          year : '1000'
        }
      }
    }
  }


  responseFacebook = (response) => {
    console.log(response)
    const fUser = response
    const newState = this.state.users
    newState.firstname = fUser.name.split(' ')[0]
    newState.lastname = fUser.name.split(' ')[1]
    newState.email = fUser.email
    newState.birth.date = fUser.birthday.split('/')[1]
    newState.birth.month = fUser.birthday.split('/')[0]
    newState.birth.year = fUser.birthday.split('/')[2]

    this.setState({
      users : newState
    })
    this.onSubmitHandling()
    browserHistory.push('thankyou')
  }

  responseFFacebook = (response) => {
    console.log(response)
    browserHistory.push('/')
  }

  responseGoogle = (response) => {
    const gUser = response.profileObj
    const newState = this.state.users
    newState.firstname = gUser.givenName
    newState.lastname = gUser.familyName
    newState.email = gUser.email
    this.setState({
      users : newState
    })
    this.onSubmitHandling()
    browserHistory.push('thankyou')
  }

  responseFGoogle = (response) => {
    console.log(response)
    browserHistory.push('/')
  }

  onSubmitHandling = () => {
    const users = this.state.users
    const url = 'https://mooda-api.herokuapp.com/api/v1/users/users'
    fetch(url, {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(users)
    })
    .then(() => {
      console.log(users)
      browserHistory.push('thankyou')
    })
    .catch((e) => {
      console.log(e)
    })
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
                // appId='1889371121315385'
                appId='1966921796909853' // live
                fields='name,email,picture,birthday'
                scope='user_birthday'
                callback={(e) => this.responseFacebook(e)}
                textButton='Daftar dengan Facebook'
                cssClass='button  login-button button-fb' />

              <GoogleLogin
                clientId='949121687454-lgdggdfhc9v2ohnpuo43ojn4t8318rso.apps.googleusercontent.com'
                buttonText='Daftar dengan Google'
                className='button login-button button-gl'
                onSuccess={(e) => this.responseGoogle(e)}
                onFailure={(e) => this.responseFGoogle(e)} />
                
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
