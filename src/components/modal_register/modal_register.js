import React, { Component } from 'react'
import './modal_register.scss'
import { Link } from 'react-router'
import Logo_small from './../../images/mooda_small_logo.png'
import Logo from './../../images/logo_mooda_white_big.png'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response) => {
  console.log(response);
};


class Modal_register extends Component {
    
    
    
    render() {
        // const modal_state = this.props.modal_state;
        console.log(this.props);
        const is_active = this.props.modal_state ? "is-active" : "";
        return(
            <div className={`modal ${is_active}`} id="modal">
                <div className="modal-background" onClick={this.props.onClose} ></div>
                <div className="modal-content">
                    <div className="login-form-header">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="login-form-panel">
                        <p className="intro">
                            Daftar MOODA <br/> lorem ipsum di dolor amet
                            consectetur adipisicing 
                                elit
                        </p>
                        <div className="buttonSet">
                            <FacebookLogin
                                appId="1966921796909853"
                                autoLoad
                                fields="name,email,picture"
                                callback={responseFacebook}
                                textButton="Daftar dengan Facebook"
                                cssClass="button  login-button button-fb"
                            />
                            {/* <button className="button  login-button button-fb">
                                <span>Daftar dengan Facebook</span>
                            </button> */}
                            <button className="button  login-button button-tw">
                                <span>Daftar dengan Twitter</span>
                            </button>
                            <button className="button  login-button button-gl">
                                <span className="icon">
                                    <i className="fa fa-home"></i>
                                </span>
                                <span>Daftar dengan Google</span>
                            </button>
                            <Link to='/register' className="button  login-button button-email">
                                
                                <span>Daftar dengan Email</span>
                            </Link>
                        </div>
                        <div className="tnc">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing 
                                elit. Ullam dolorem sint perspiciatis.
                                 Accusantium doloremque voluptate tempora
                                  obcaecati est, sed enim nemo consequuntur,
                                   aliquid vero assumenda fugiat perferendis sunt
                                    consectetur quis.
                            </p>
                        </div>
                    </div>

                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose}></button>
            </div>    
        )
    }
}

export default Modal_register