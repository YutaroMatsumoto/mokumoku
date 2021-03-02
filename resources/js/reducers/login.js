// import _ from 'lodash'
import { POST_LOGIN } from '../actions/index'

export default (login = {}, action) => {
    switch(action.type) {
        case POST_LOGIN:
            const data = action.response.data
            return data
        default:
            return login
    }
}