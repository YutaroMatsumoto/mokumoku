import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Top from './Top';
import About from './About';
import User from './User';
import UserDetail from './UserDetail';
import Axios from 'axios';

// function App() {
//     return (
        // <Router>
        //     <div>
        //         <NavBar />
        //         <Switch>
        //             <Route path="/" exact component={Top} />
        //             <Route path="/about" component={About} />
        //             <Route path="/user" exact component={User} />
        //             <Route path="/user/:id" component={UserDetail} />
        //         </Switch>
                
        //     </div>
        // </Router>
//         <div>
//             aaaaa
//         </div>
        
//     )
// }

class App extends Component {
    render() {
        return (
            <Top/>
        )
    }

    
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}