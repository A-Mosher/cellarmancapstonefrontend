import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/navBar';


class App extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
            
        );
    }
}

export default App;