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

class App extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact render={props => (
                        <Home {...props} loggedInStatus={this.state.loggedInStatus} />
                    )} />
                    <Route path='/dailyTasks' component={DailyTasks} />
                    <Route path='/weeklyTasks' component={WeeklyTasks} />
                    <Route path='/search' component={Search} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/newProduct' component={NewProduct} />
                </Switch>
            </Router>
            
        );
    }
}

export default App;