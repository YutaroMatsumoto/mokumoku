import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import groups from './groups'

export default combineReducers({ groups, form })