import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Top from './Top';
import About from './About';
import User from './User';
import UserDetail from './UserDetail';
import Axios from 'axios';

class App extends Component {
    render() {
        return (
            <Top/>
        )
    }

    
}



export default App