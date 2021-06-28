import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state= {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleSubmit.bind(this);

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

        axios.post('http://localhost:5000/api/user', {
            user: {
                name: name,
                email: email,
                password: password,
                password2: password2
            }
        },
        { withCredentials: true}
        )
        .then(response => {
            console.log('registration res', response);
        }).catch(error => {
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
                        value={this.state.email}
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
                        value={this.state.email}
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
                        value={this.state.password}
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
                        value={this.state.password2}
                        onChange={this.handleChange}
                        required />
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Sign Up
                    </button>
                    <span className='form-input-login'>
                        Already have an account? Login <a href='a'>here</a>
                    </span>

                </form>
            </div>
        );
    }
}

export default Signup;