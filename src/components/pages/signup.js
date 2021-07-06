import React, { Component } from 'react';
import axios from 'axios';
import LandingPage from './landingPage';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state= {
            name: "",
            email: "",
            password: "",
            password2: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value       
        })
    }

    handleSubmit(event) {
        const {
            name,
            email,
            password,
            password2
        } = this.state;

        axios.post('http://localhost:5000/api/users', {
            user: {
                name: name,
                email: email,
                password: password,
                password2: password2
            }
        })
        .then(response => {
            const { handleSuccessfulAuth } = this.props;
            console.log('registration res', response);
            handleSuccessfulAuth && handleSuccessfulAuth(response.data);
        }).catch(error => {
            // User already exists
            console.log('registration error', error);
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className='form-content-right'>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <h1>Sign up</h1>
                    <div className='form-inputs'>
                        <label htmlFor='name' className='form-label'>
                            Name
                        </label>
                        <input
                        id='name'
                        type='text'
                        name='name'
                        className='form-input'
                        placeholder='Enter your first and last name'
                        onChange={this.handleChange}
                        required />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='email' className='form-label'>
                            Email
                        </label>
                        <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        onChange={this.handleChange}
                        required />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input
                        id= 'password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        onChange={this.handleChange}
                        required />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password2' className='form-label'>
                            Confirm Password
                        </label>
                        <input
                        id= 'password2'
                        type='password'
                        name='password2'
                        className='form-input'
                        placeholder='Re-enter your password'
                        onChange={this.handleChange}
                        required />
                    </div>
                    <button className='form-input-btn' type='submit' >
                        Sign Up
                    </button>
                    <span className='form-input-login'>
                        Already have an account? Login <a href='/login'>here</a>
                    </span>

                </form>
            </div>
        );
    }
}

export default Signup;