import _ from 'lodash'
import { READ_GROUPS, CREATE_GROUP, READ_POSTS } from '../actions/index'


export default (groups = {}, action) => {
    switch(action.type) {
        case READ_GROUPS:
            console.log('READ_GROUPSのろぐ')
            console.log(action)
            console.log('READ_GROUPSのろぐ')
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        case CREATE_GROUP:
            console.log('CREATE_GROUPのろぐ')
        // case READ_POSTS:
            // console.log('READ_POSTSのろぐ')
            // console.log(_.mapKeys(action.response.data.posts, 'id'))
            // console.log('READ_POSTSのろぐ')
            // return _.mapKeys(action.response.data.posts, 'id')
        default:
            return groups
    }
}