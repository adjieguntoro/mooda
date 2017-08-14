import React, { Component } from 'react'
import './Register_Panel.scss'
import Logo_small from './../../images/mooda_small_logo.png'
import Lamp from './../../images/lampu.png'


class Register_Panel extends Component {
    render() {
        return(
            <section className="is-white " id="register-panel">
               <div className="container">
                    <div className="colums ">
                        <div className="column is-8 is-offset-2">
                            <div className="hero is-info">
                                <div className="columns regiter-panel-body">
                                    <div className="column is-2 lamp">
                                        <img src={Lamp} alt=""/>
                                    </div>
                                    <div className="column is-6">
                                        <h5 className="title"> <b> Bergabunglah Sekarang </b></h5>
                                        <h6 className="subtitle"> dan bersiaplah jadi bagian dari <br/>
                                        Generasi Smart MOODA</h6>
                                    </div>
                                    <div className="column is-3 ">
                                        <a href="#" className="button is-warning is-regis is-vcentered">Daftar</a>
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

export default Register_Panel