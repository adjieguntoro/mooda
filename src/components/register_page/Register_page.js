import React, { Component } from 'react'
import './Register_page.scss'
import Logo_small from './../../images/mooda_small_logo.png'


class Register_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_state : false,
            reg_step:1,
        };

        this.nextHandling = this.nextHandling.bind(this);

    }


    first_step = () => {
            return(
                <div>
                    <div className="field">
                            <label htmlFor="email" className="label">Email</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Email" />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="password" className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password" placeholder="Password" />
                            </div>
                        </div>
                </div>
            );
        }

    nextHandling() {
        this.setState((prev, props) => {
            const newState = this.state.reg_step + 1;
            return { reg_step:newState }
        })
    }

    second_step = () => {
        const dates = [];
        const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const years = [];

        for (var i=1970;i<2015;i++) {
            years.push(i);
        }

        for (var i=1;i<=31;i++) {
            dates.push(i);
        }

        const yearOption = years.map((year, i) =>
            <option value={year} key={i}>{year}</option>
        );

        const monthOption = months.map((month, i) =>
            <option value={i+1} key={i}>{month}</option>
        );

        const datesOption = dates.map((date, i) =>
            <option value={date} key={i}>{date}</option>
        );

        console.log(years);

            return(
                <div>
                    <div className="field">
                            <label htmlFor="fullname" className="label">Full Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="label">Tanggal Lahir</div>
                            <div className="columns">
                                <div className="column is-4">
                                    <div className="control">
                                        <div className="select">
                                            <select name="" >
                                                <option value="">Tanggal</option>
                                                {datesOption}                                       
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="control">
                                        <div className="select">
                                            <select name="" >
                                                <option value="">Bulan</option>
                                                {monthOption}                                        
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="control">
                                        <div className="select">
                                            <select name="" >
                                                <option value="">Tahun</option>
                                                <option value="1970">1970</option>
                                                {yearOption}                                        
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            );
        }


    render() {
        var elementForm = "";
        switch(this.state.reg_step){
            case 1:
                elementForm = this.first_step()
                break;
            case 2:
                elementForm = this.second_step()
                break;
        } 

        
        
        return(
            <div className="container register-form">
                <div className="columns">
                    <div className="column is-4 is-offset-4">
                        <h2 className="title"><img src={Logo_small} alt="mooda"/></h2>
                        
                        { elementForm }

                        <div className="columns">
                            <div className="column is-6">
                                <div className="control">
                                    <button className="button is-light">Cancel</button>
                                </div>
                            </div>
                            <div className="column is-6">
                                <div className="control">
                                    <button 
                                    className="button is-info"
                                    onClick={this.nextHandling}
                                    >Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register_page