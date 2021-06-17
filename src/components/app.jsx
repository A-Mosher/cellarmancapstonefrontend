import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/navBar';
import Home from './pages/homePage';
import DailyTasks from './pages/dailyTasks';
import WeeklyTasks from './pages/weeklyTasks';
import Search from './pages/search';

class App extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/dailyTasks' component={DailyTasks} />
                    <Route path='/weeklyTasks' component={WeeklyTasks} />
                    <Route path='/search' component={Search} />
                </Switch>
            </Router>
            
        );
    }
}

export default App;