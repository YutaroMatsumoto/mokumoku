import _ from 'lodash'
import { CREATE_POST } from '../actions/index'

export default (posts = {}, action) => {
    switch(action.type) {
        case CREATE_POST:
        default:
            return posts
    }
}