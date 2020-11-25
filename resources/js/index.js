import React from 'react'
import ReactDOM from  'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'

import Top from './components/Top'
import GroupNew from './components/group_new'
import reducer from './reducers/index'
// import * as serviceWorker from './serviceWorker';


// redux thunk ミドルウェアを使うことで、actioncreatorが、actionの代わりに関数を返すことができるようになる
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Top} />
                <Route path="/group/new" component={GroupNew} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)

// serviceWorker.unregister();
