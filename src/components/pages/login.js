import React, { Component } from 'react';
import axios from 'axios';


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

        axios.post('http://localhost:5000/auth',
        {
            auth: {
                email: email,
                password: password
            }
        },
        { withCredentials: true }
        )
        .then(response => {
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
                <form className='login-form'>
                    <h1>Login</h1>
                    <div className='form-inputs'>
                        <label htmlFor='email' className='form-label'>
                            Email
                        </label>
                        <input id='email' type='email' name='email' className='form-input' placeholder='Enter your email' />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input id= 'password' type='password' name='password' className='form-input' placeholder='Enter your password' />
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Login
                    </button>
                    <span className='form-input-login'>
                        Don't have an account? Signup <a href='a'>here</a>
                    </span>

                </form>
            </div>
        )
    };   
}

export default Login;