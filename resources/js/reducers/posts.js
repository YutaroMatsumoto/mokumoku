import _ from 'lodash'
import { READ_POSTS } from '../actions/index'


export default (posts = {}, action) => {
    switch(action.type) {
        case READ_POSTS:
            console.log(action)
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        default:
            return posts
    }
}