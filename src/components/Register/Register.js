import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Logo from './../../images/mooda_logo_grey.png'
import './Register.scss'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal_state : false,
      reg_step:1,
      validate : {
        email : {
          onblur: false,
          class : '',
          msg : ''
        },
        pass : {
          class : '',
          msg : ''
        },
        firstname : {
          class : '',
          msg : ''
        }
      },
      users : {
        email : '',
        password : '',
        firstname : '',
        lastname : '',
        birth : {
          date : '',
          month : '',
          year : ''
        }
      }
    }

    this.nextHandling = this.nextHandling.bind(this)
    this.prevHandling = this.prevHandling.bind(this)
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this)
    this.onPassChangeHandler = this.onPassChangeHandler.bind(this)
    this.onFirstNameChangeHandler = this.onFirstNameChangeHandler.bind(this)
    this.onBirthDateChangeHandler = this.onBirthDateChangeHandler.bind(this)
    this.onBirthMonthChangeHandler = this.onBirthMonthChangeHandler.bind(this)
    this.onBirthYearChangeHandler = this.onBirthYearChangeHandler.bind(this)
  }

  onEmailChangeHandler (e) {
    const newEmail = e.target.value
    const newState = this.state.users
    newState.email = newEmail
    this.setState({
      users : newState
    })
    if (this.state.validate.email.onblur) {
      this.EmailValidated(newEmail)
    }
  }

  onEmailOnBlur = (e) => {
    const newState = this.state.validate.email
    console.log(newState)
    newState.onblur = !newState.onblur
    this.setState({
      validate : newState
    })
    const newEmail = e.target.value
    this.EmailValidated(newEmail)
  }

  EmailValidated = (newEmail) => {
    if (this.validateEmail(newEmail)) {
      console.log('email valid')
      const newState = this.state.validate
      newState.email.class = 'is-info'
      newState.email.msg = 'Email Valid'
      this.setState({
        validate : newState
      })
    } else {
      const newState = this.state.validate
      newState.email.class = 'is-danger'
      newState.email.msg = 'Email Tidak Valid'
      this.setState({
        validate : newState
      })
    }
  }

  onPassChangeHandler (e) {
    const newPass = e.target.value
    const newState = this.state.users
    newState.password = newPass
    this.setState({
      users : newState
    })
    if (this.validatePass(newPass)) {
      const newState = this.state.validate
      newState.pass.class = 'is-info'
      newState.pass.msg = 'Password Ok'
      this.setState({
        validate : newState
      })
    } else {
      const newState = this.state.validate
      newState.pass.class = 'is-danger'
      newState.pass.msg = 'Password minimal 8 karakter'
      this.setState({
        validate : newState
      })
    }
  }

  onFirstNameChangeHandler = (e) => {
    let newFirstName = e.target.value
    newFirstName = newFirstName.charAt(0).toUpperCase() + newFirstName.slice(1) 
    const newState = this.state.users
    newState.firstname = newFirstName
    this.setState({
      users : newState
    })
    if (this.validateName(newFirstName)) {
      const newState = this.state.validate
      newState.firstname.class = 'is-info'
      newState.firstname.msg = ''
      this.setState({
        validate : newState
      })
    } else {
      const newState = this.state.validate
      newState.firstname.class = 'is-danger'
      newState.firstname.msg = 'Nama harus diisi'
      this.setState({
        validate : newState
      })
    }
  }

  onLastNameChangeHandler = (e) => {
    const newLastName = e.target.value
    const newState = this.state.users
    newState.lastname = newLastName
    this.setState({
      users : newState
    })
  }

  onBirthDateChangeHandler (e) {
    const newDate = e.target.value
    const newState = this.state.users
    newState.birth.date = newDate
    this.setState({
      users : newState
    })
  }

  onBirthMonthChangeHandler (e) {
    const newMonth = e.target.value
    const newState = this.state.users
    newState.birth.month = newMonth
    this.setState({
      users : newState
    })
  }

  onBirthYearChangeHandler (e) {
    const newYear = e.target.value
    const newState = this.state.users
    newState.birth.year = newYear
    this.setState({
      users : newState
    })
  }

  nextHandling () {
    const newState = this.state.reg_step + 1
    this.setState({
      reg_step:newState
    })
  }

  prevHandling () {
    this.setState(() => {
      const newState = this.state.reg_step - 1
      return { reg_step:newState }
    })
  }

  validateEmail (email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    return re.test(email)
  }

  validatePass (Pass) {
    if (Pass.length < 8) {
      return false
    } else {
      return true
    }
  }

  validateName (FullName) {
    if (FullName == '') {
      return false
    } else {
      return true
    }
  }

  onSubmitHandling = () => {
    this.setState(() => {
      const newState = this.state.reg_step + 1
      return { reg_step:newState }
    })
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

  firstStep = () => {
    const EmailField = this.state.users.email
    const PassField = this.state.users.password
    let IsDisable = true

    if (EmailField.length > 0 && this.validateEmail(EmailField) && PassField.length >= 8) {
      IsDisable = false
    }

    const IsDisabled = IsDisable ? 'is-disabled' : ''
    return (
      <div className='register-holder'>
        <div className='field'>
          <label htmlFor='email' className='label'>Email</label>
          <div className='control has-icons-left'>
            <input className={`input ${this.state.validate.email.class}`}
              type='text'
              placeholder='Email'
              value={this.state.users.email}
              onChange={this.onEmailChangeHandler}
              onBlur={this.onEmailOnBlur}
              />
          </div>
          <p className={`help ${this.state.validate.email.class}`}> {this.state.validate.email.msg}</p>
        </div>
        <div className='field'>
          <label htmlFor='password' className='label'>Password</label>
          <div className='control'>
            <input
              className={`input ${this.state.validate.pass.class}`}
              type='password'
              placeholder='Password'
              value={this.state.users.password}
              onChange={this.onPassChangeHandler} />
          </div>
          <p className={`help ${this.state.validate.pass.class}`}> {this.state.validate.pass.msg}</p>
        </div>
        <div className='columns is-mobile'>
          <div className='column is-6'>
            <div className='control'>
              <button
                className='button is-light'
                onClick={this.prevHandling}>
                Batal
              </button>
            </div>
          </div>
          <div className='column is-6'>
            <div className={`"control ${IsDisabled} `}>
              <button
                className='button is-info'
                onClick={this.nextHandling}>
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  secondStep = () => {
    const dates = []
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    const years = []
    for (var i = 1970; i < 2015; i++) {
      years.push(i)
    }
    for (i = 1; i <= 31; i++) {
      dates.push(i)
    }
    const yearOption = years.map((year, i) =>
      <option value={year} key={i}>{year}</option>
    )
    const monthOption = months.map((month, i) =>
      <option value={i + 1} key={i}>{month}</option>
    )
    const datesOption = dates.map((date, i) =>
      <option value={date} key={i}>{date}</option>
    )
    const FirstNameField = this.state.users.firstname
    const BirtDateField = this.state.users.birth.date
    const BirtMonthField = this.state.users.birth.month
    const BirtYearField = this.state.users.birth.year

    let IsDisable = true
    if (FirstNameField.length >= 3 && BirtDateField !== '' && BirtMonthField !== '' && BirtYearField !== '') {
      IsDisable = false
    }

    const IsDisabled = IsDisable ? 'is-disabled' : ''
    return (
      <div>
        <div className='field'>
          <div className='coloumns is-mobile'>
            <div className='is-6'>
              <label htmlFor='fullname' className='label'>Nama Depan</label>
              <div className={`control ${this.state.validate.firstname.class}`}>
                <input
                  className='input'
                  type='text'
                  placeholder='Jhon'
                  value={this.state.users.firstname}
                  onChange={this.onFirstNameChangeHandler}
                  />
              </div>
              <p className={`help ${this.state.validate.firstname.class}`}> {this.state.validate.firstname.msg}</p>
            </div>
            <div className='is-6'>
              <label htmlFor='fullname' className='label'>Nama Belakang</label>
              <div className={`control ${this.state.validate.firstname.class}`}>
                <input
                  className='input'
                  type='text'
                  placeholder='Smith'
                  value={this.state.users.lastname}
                  onChange={this.onLastNameChangeHandler}
                  />
              </div>
              <p className={`help ${this.state.validate.firstname.class}`}> {this.state.validate.firstname.msg}</p>
            </div>
          </div>
        </div>
        <div className='field'>
          <div className='label'>Tanggal Lahir</div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <div className='control'>
                <div className='select'>
                  <select
                    name='birthDate'
                    value={this.state.users.birth.date}
                    onChange={this.onBirthDateChangeHandler}>
                    <option value=''>Tanggal</option>
                    {datesOption}
                  </select>
                </div>
              </div>
            </div>
            <div className='column is-4'>
              <div className='control'>
                <div className='select'>
                  <select
                    name='birthDate'
                    value={this.state.users.birth.month}
                    onChange={this.onBirthMonthChangeHandler}>
                    <option value=''>Bulan</option>
                    {monthOption}
                  </select>
                </div>
              </div>
            </div>
            <div className='column is-4'>
              <div className='control'>
                <div className='select'>
                  <select
                    name='birthYear'
                    value={this.state.users.birth.year}
                    onChange={this.onBirthYearChangeHandler}>
                    <option value=''>Tahun</option>
                    {yearOption}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-6'>
              <div className='control'>
                <button
                  className='button is-light'
                  onClick={this.prevHandling}>
                  Kembali
                </button>
              </div>
            </div>
            <div className='column is-6'>
              <div className={`"control ${IsDisabled} `}>
                <button
                  className='button is-info'
                  onClick={this.onSubmitHandling}>
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  LoadingStep = () => {
    return (
      <div>
        <div className="columns">
          <div className="column is-12">
            <div className='sp sp-3balls'>
            </div>
          </div>
        </div>
      </div>
    )
  }

  ThankYouStep = () => {
    return (
      <div>
        <article className='message is-success'>
          <div className='message-body'>
          Terima kasih Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatum exercitationem, minima alias iure, commodi enim a qui eligendi
          voluptate provident nihil quae maiores vel eveniet magnam, unde reprehenderit dolore in!
          </div>
        </article>
        <div className='columns'>
          <div className='column is-3'>
            <div className='control'>
              <Link to='/'
                className='button is-info'>
                Kembali Ke Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    var elementForm = ''
    switch (this.state.reg_step) {
      case 0:
        browserHistory.push('/')
        break
      case 1:
        elementForm = this.firstStep()
        break
      case 2:
        elementForm = this.secondStep()
        break
      case 3:
        elementForm = this.LoadingStep()
        break
      case 4:
        browserHistory.push('/thankyou')
    }

    return (
      <div className='container register-container'>
        <div className='register-form'>
          <div className='logo-register'>
            <img src={Logo} width='112' height='28' />
          </div>
          { elementForm }
        </div>
      </div>
    )
  }
}

export default Register
