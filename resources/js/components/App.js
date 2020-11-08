import React, { Component } from 'react';
import ReactDOM from  'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Top from './Top';
import About from './About';
import User from './User';
import UserDetail from './UserDetail';
import Axios from 'axios';

function Items(props) {
    return props.items.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
            </tr>
        );
    });
}

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
    constructor(){
        super();
        this.state = {
            items: [],
            item: ''
        }
    }

    // コンポーネントがマウントされた時点で初期描画用のtodosをAPIから取得
    componentDidMount() {
        axios.get('/api/get')
             .then((response) => {
                 console.log(response);
                 this.setState({
                     items: response.data
                 })
             })
             .catch(error => {
                 console.log(error);
             })
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <Items items={this.state.items}/>
                    </tbody>
                </table>
                {/* aaaa */}
            </React.Fragment>
        )
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}