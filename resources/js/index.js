import React from 'react'
import ReactDOM from  'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import Top from './components/Top'
import GroupNew from './components/group_new'
import PostIndex from './components/post_index'
import reducer from './reducers/index'
// import * as serviceWorker from './serviceWorker';


// redux thunk ミドルウェアを使うことで、actioncreatorが、actionの代わりに関数を返すことができるようになる
// const store = createStore(reducer, applyMiddleware(thunk))


// dev環境の場合はdebugできるよう設定
const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Top} />
                <Route exact path="/groups" component={Top} />
                <Route path="/groups/new" component={GroupNew} />
                <Route path="/groups/:id/posts" component={PostIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)

// serviceWorker.unregister();
