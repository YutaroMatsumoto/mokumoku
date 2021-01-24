import React from 'react'
import ReactDOM from  'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { Top } from './components/Top'
import { GroupNew } from './components/group_new'
// import PostNew from './components/post_new'
import { GroupShow } from './components/group_show'
import { PostIndex } from './components/post_index'
import { PostNew } from './components/post_new'
import { PostShow } from './components/post_show'
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
                <Route exact path="/groups/:id" component={PostIndex} />
                <Route path="/groups/:id/edit" component={GroupShow} />
                <Route path="/groups/:id/post/new" component={PostNew} />
                <Route path="/groups/:id/post/:post_id/edit" component={PostShow} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)

// serviceWorker.unregister();
