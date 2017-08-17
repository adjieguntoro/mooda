import React, { Component } from 'react'
import './Opener.scss'
import Logo from './../../images/logo_mooda_white_big.png'

class Opener extends Component {
    render() {
        return(
            <div className="hero is-info opener">
                <div className="container hero-body">
                    <div className="columns is-centered">
                        <div className="column is-5">
                            <h2 className="title">
                                <img src={Logo} className="logo-big"/>
                             </h2>
                             <h2 className="title">
                                 <b>
                                 Kami sedang mempersiapkan <br/>
                                 sesuatu yang menarik buat kamu
                                 </b>
                             </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Opener