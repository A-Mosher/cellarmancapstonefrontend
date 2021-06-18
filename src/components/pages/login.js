import React from 'react';

function Login() {
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
}

export default Login;