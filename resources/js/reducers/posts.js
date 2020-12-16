import _ from 'lodash'
import { READ_POSTS } from '../actions/index'


export default (posts = {}, action) => {
    switch(action.type) {
        case READ_POSTS:
            return _.mapKeys(action.response.data.posts, 'id')
        default:
            return posts
    }
}