import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import groups from './groups'
import posts from './posts'

export default combineReducers({ groups, posts, form })