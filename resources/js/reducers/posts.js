import _ from 'lodash'
import { CREATE_POST, GET_POST, UPDATE_POST, DELETE_POST } from '../actions/index'

export default (posts = {}, action) => {
    switch(action.type) {
        case GET_POST:
            const data = action.response.data
            // return {...posts, [data.id]: data}
            return data
        case CREATE_POST:
        case UPDATE_POST:
        case DELETE_POST:
        default:
            return posts
    }
}