import React, { Component } from 'react'
import './RegisterPanel.scss'
import Lamp from './../../images/lampu.png'
import ModalRegister from './../../components/ModalRegister'

class RegisterPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal_state : false,
    }

    this.toogleModal = this.toogleModal.bind(this)
  }

  toogleModal () {
    this.setState((prev, props) => {
      const newState = !prev.modal_state
      return { modal_state : newState }
    })
    console.log(this.state.modal_state)
  }

  render () {
    return (
      <section className='is-white ' id='register-panel'>
        <ModalRegister modal_state={this.state.modal_state} onClose={this.toogleModal} />
        <div className='container'>
          <div className='colums '>
            <div className='column is-8 is-offset-2'>
              <div className='hero is-info'>
                <div className='columns regiter-panel-body'>
                  <div className='column is-2 lamp'>
                    <img src={Lamp} alt='' />
                  </div>
                  <div className='column is-6'>
                    <h5 className='title'>
                      <b> Bergabunglah Sekarang </b>
                    </h5>
                    <h6 className='subtitle'>
                      dan bersiaplah jadi bagian dari <br />
                      Generasi Smart MOODA
                    </h6>
                  </div>
                  <div className='column is-3 '>
                    <a href='#'
                      className='button is-warning is-regis is-vcentered'
                      onClick={this.toogleModal}>
                      Daftar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default RegisterPanel
