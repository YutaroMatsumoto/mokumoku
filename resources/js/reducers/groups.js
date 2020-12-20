import _ from 'lodash'
import { READ_GROUPS, CREATE_GROUP, READ_POSTS, GET_GROUP } from '../actions/index'


export default (groups = {}, action) => {
    switch(action.type) {
        case READ_GROUPS:
            console.log('READ_GROUPSのろぐ')
            console.log(action)
            console.log('READ_GROUPSのろぐ')
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        // case READ_POSTS:
            // return { 'id': action.response.data.id, 'name': action.response.data.name, 'detail': action.response.data.detail }
        case CREATE_GROUP:
            console.log('CREATE_GROUPのろぐ')
        case GET_GROUP:
            const data = action.response.data
            return {...groups, [data.id]: data}
        default:
            return groups
    }
}