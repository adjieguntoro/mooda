import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import './Register.scss'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal_state : false,
      reg_step:1,
      validate : {
        email : {
          class : '',
          msg : ''
        },
        pass : {
          class : '',
          msg : ''
        },
        fullname : {
          class : '',
          msg : ''
        }
      },
      users : {
        email : '',
        password : '',
        fullname : '',
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
    this.onFullNameChangeHandler = this.onFullNameChangeHandler.bind(this)
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
    if (this.validateEmail(newEmail)) {
      console.log('email valid')
      const newState = this.state.validate
      newState.email.class = 'is-info'
      newState.email.msg = 'Email Valid'
      this.setState({
        validate : newState
      })
    } else {
      console.log('email tidak valid')
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

  onFullNameChangeHandler (e) {
    const newFullName = e.target.value
    const newState = this.state.users
    newState.fullname = newFullName
    this.setState({
      users : newState
    })
    if (this.validateName(newFullName)) {
      const newState = this.state.validate
      newState.fullname.class = 'is-info'
      newState.fullname.msg = ""      
      this.setState({
        validate : newState
      })
    } else {
      const newState = this.state.validate
      newState.pass.class = 'is-danger'
      newState.pass.msg = 'Nama harus diisi'      
      this.setState({
        validate : newState
      })
    }
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
    if (FullName == ''){
      return false
    } else {
      return true
    }
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
      <div>
        <div className='field'>
          <label htmlFor='email' className='label'>Email</label>
          <div className='control has-icons-left'>
            <input className={`input ${this.state.validate.email.class}`}
              type='text'
              placeholder='Email'
              value={this.state.users.email}
              onChange={this.onEmailChangeHandler}
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
                Cancel
              </button>
            </div>
          </div>
          <div className='column is-6'>
            <div className={`"control ${IsDisabled} `}>
              <button
                className='button is-info'
                onClick={this.nextHandling}>
                Next
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
    const FullNameField = this.state.users.fullname
    const BirtDateField = this.state.users.birth.date
    const BirtMonthField = this.state.users.birth.month
    const BirtYearField = this.state.users.birth.year

    let IsDisable = true
    if (FullNameField.length > 3 && BirtDateField !== '' && BirtMonthField !== '' && BirtYearField !== '') {
      IsDisable = false
    }

    const IsDisabled = IsDisable ? 'is-disabled' : ''
    return (
      <div>
        <div className='field'>
          <label htmlFor='fullname' className='label'>Full Name</label>
          <div className={`control ${this.state.validate.fullname.class}`}>
            <input
              className='input'
              type='text'
              placeholder='Full Name'
              value={this.state.users.fullname}
              onChange={this.onFullNameChangeHandler}
                            />
          </div>
          <p className={`help ${this.state.validate.fullname.class}`}> {this.state.validate.fullname.msg}</p>          
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
                  Cancel
                </button>
              </div>
            </div>
            <div className='column is-6'>
              <div className={`"control ${IsDisabled} `}>
                <button
                  className='button is-info'
                  onClick={this.nextHandling}>
                  Next
                </button>
              </div>
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
        browserHistory.push('/thankyou')
    }

    return (
      <div className='container register-form'>
        <div className='columns'>
          <div className='column is-4 is-offset-4'>
            { elementForm }
          </div>
        </div>
      </div>
    )
  }
}

export default Register
