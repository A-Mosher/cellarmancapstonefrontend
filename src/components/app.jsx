import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/navBar';
import Home from './pages/homePage';
import DailyTasks from './pages/dailyTasks';
import WeeklyTasks from './pages/weeklyTasks';
import Search from './pages/search';
import Signup from './pages/signup';
import Login from './pages/login';
import NewProduct from './newProduct';
import LandingPage from './pages/landingPage';


class App extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };

        // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

        this.handleLogin = this.handleLogin.bind(this);

    }

    // handleSuccessfulAuth(data) {
    //     this.props.history.push('/');
    // }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        });

    }
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path={'/signup'} render={props => (
                        <LandingPage {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                    )} />
                    <Route exact path={'/'} render={props => (
                        <Home {...props} loggedInStatus={this.state.loggedInStatus} />
                    )} />
                    <Route path='/dailyTasks' component={DailyTasks} />
                    <Route path='/weeklyTasks' component={WeeklyTasks} />
                    <Route path='/search' component={Search} />
                    <Route path='/login' component={Login} />
                    <Route path='/newProduct' component={NewProduct} />\
                </Switch>
            </Router>
            
        );
    }
}

export default App;