import React from 'react'
import ReactDOM from  'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Top from './components/Top'
import reducer from './reducers/index'
// import * as serviceWorker from './serviceWorker';


// redux thunk ミドルウェアを使うことで、actioncreatorが、actionの代わりに関数を返すことができるようになる
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Top />
    </Provider>,
    document.getElementById('app')
)

// serviceWorker.unregister();
