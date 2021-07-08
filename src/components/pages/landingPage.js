import React, { Component }from 'react';
import Login from './login';
import Signup from './signup';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.history.push('/home');
        this.props.handleLogin(data);
    }

    render() {
        return(
            <div>
                <Signup handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}