import React, { Component } from 'react'
import './Register_page.scss'
import Logo_small from './../../images/mooda_small_logo.png'


class Register_page extends Component {
        constructor(props) {
        super(props);
        this.state = {
            modal_state : false,
            reg_step:1,

            users : {
                email : "",
                password : "",
                fullname : "",
                birth : {
                    date : "",
                    month : "",
                    year : ""
                }
            }
        };

        this.nextHandling = this.nextHandling.bind(this);
        this.prevHandling = this.prevHandling.bind(this);
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onPassChangeHandler = this.onPassChangeHandler.bind(this);
        this.onFullNameChangeHandler = this.onFullNameChangeHandler.bind(this);        
        this.onBirthDateChangeHandler = this.onBirthDateChangeHandler.bind(this);
        this.onBirthMonthChangeHandler = this.onBirthMonthChangeHandler.bind(this);
        this.onBirthYearChangeHandler = this.onBirthYearChangeHandler.bind(this);
    }

    onEmailChangeHandler(e){
        const newEmail = e.target.value
        const newState = this.state.users
        newState.email = newEmail
        this.setState({  
            users : newState 
        })

    }

    onPassChangeHandler(e){
        const newPass = e.target.value
        const newState = this.state.users
        newState.password = newPass
        this.setState({  
            users : newState 
        })
    }
    
    onFullNameChangeHandler(e){
        const newFullName = e.target.value
        const newState = this.state.users
        newState.fullname = newFullName
        this.setState({  
            users : newState 
        })

    }

    onBirthDateChangeHandler(e){
        const newDate = e.target.value
        const newState = this.state.users
        newState.birth.date = newDate
        this.setState({  
            users : newState 
        })
    }

    onBirthMonthChangeHandler(e){
        const newMonth = e.target.value
        const newState = this.state.users
        newState.birth.month = newMonth
        this.setState({  
            users : newState 
        })
    }

    onBirthYearChangeHandler(e){
        const newYear = e.target.value
        const newState = this.state.users
        newState.birth.year = newYear
        this.setState({  
            users : newState 
        })
    }

    nextHandling() {
        const newState = this.state.reg_step + 1
        this.setState({
            reg_step:newState 
        })
        
    }

    prevHandling() {
         this.setState(() => {
            const newState = this.state.reg_step - 1;
            return { reg_step:newState }
        })
    }

    first_step = () => {
        return(
            <div>
                <div className="field">
                        <label htmlFor="email" className="label">Email</label>
                        <div className="control">
                            <input className="input" 
                                    type="text"
                                    placeholder="Email" 
                                    value={this.state.users.email}
                                    onChange={this.onEmailChangeHandler}
                                    />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="password" className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Password"
                                value={this.state.users.password}
                                onChange={this.onPassChangeHandler}
                                />
                        </div>
                    </div>
            </div>
        );
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

            return(
                <div>
                    <div className="field">
                            <label htmlFor="fullname" className="label">Full Name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Full Name"
                                    value={this.state.users.fullname}
                                    onChange={this.onFullNameChangeHandler}
                                    />
                            </div>
                        </div>
                        <div className="field">
                            <div className="label">Tanggal Lahir</div>
                            <div className="columns">
                                <div className="column is-4">
                                    <div className="control">
                                        <div className="select">
                                            <select 
                                                name="birthDate" 
                                                value={this.state.users.birth.date}
                                                onChange={this.onBirthDateChangeHandler}
                                                >
                                                <option value="">Tanggal</option>
                                                {datesOption}                                       
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="control">
                                        <div className="select">
                                            <select
                                                name="birthDate"
                                                value={this.state.users.birth.month}
                                                onChange={this.onBirthMonthChangeHandler}
                                                
                                                >
                                                <option value="">Bulan</option>
                                                {monthOption}                                        
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div className="control">
                                        <div className="select">
                                            <select 
                                                name="birthYear"
                                                value={this.state.users.birth.year}
                                                onChange={this.onBirthYearChangeHandler}
                                                
                                                >
                                                
                                                <option value="">Tahun</option>
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
                                    <button
                                    className="button is-light"
                                    onClick={this.prevHandling}
                                    >Cancel</button>
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