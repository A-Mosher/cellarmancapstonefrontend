import React from 'react';

function Signup() {
    return (
        <div className='form-content-right'>
            <form className='form'>
                <h1>sign up with this form</h1>
                <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input id='name' type='text' name='name' className='form-input' placeholder='Enter your first and last name' />
                </div>
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
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                        Confirm Password
                    </label>
                    <input id= 'password2' type='password2' name='password2' className='form-input' placeholder='Re-enter your password' />
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign Up
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='a'>here</a>
                </span>

            </form>
        </div>
    )
}

export default Signup;