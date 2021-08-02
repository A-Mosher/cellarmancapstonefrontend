import React, { Component } from 'react';
import axios from 'axios';
import './login.css';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state= {
            email: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password } = this.state;

        axios.post('http://localhost:5000/api/auth',
        {
            email: email,
            password: password
        },
        )
        .then(response => {
            alert("Login Successful")
            console.log(response)
            if (response.data.logged_in === true) {
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log('Login error', error);
        });
        event.preventDefault();
    }
    render(){
        return (
            <div className='form-content-right'>
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h1 className="header">Login</h1>
                    <div className='form-inputs'>
                        <label htmlFor='email' className='form-label'>
                            Email
                        </label>
                        <input id='email' type='email' name='email' onChange={this.handleChange} className='form-input' placeholder='Enter your email' />
                    </div>
                    <br></br>
                    <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input id= 'password' type='password' name='password' onChange={this.handleChange} className='form-input' placeholder='Enter your password' />
                    </div>
                    <br></br>
                    <button className='form-input-btn' type='submit'>
                        Login
                    </button>
                    <span className='form-input-login'>
                        Don't have an account? Signup <a href='/signup'>here</a>
                    </span>

                </form>
            </div>
        )
    };   
}

export default Login;