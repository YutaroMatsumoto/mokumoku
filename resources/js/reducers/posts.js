import _ from 'lodash'
import { READ_POSTS } from '../actions/index'


export default (posts = {}, action) => {
    switch(action.type) {
        case READ_POSTS:
            const data = {'group_id': action.response.data.id, 'posts':_.mapKeys(action.response.data.posts, 'id')}
            return data
        default:
            return posts
    }
}