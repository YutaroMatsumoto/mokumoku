import _ from 'lodash'
import { READ_GROUPS, CREATE_GROUP } from '../actions/index'


export default (groups = {}, action) => {
    switch(action.type) {
        case READ_GROUPS:
            console.log(action)
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        case CREATE_GROUP:
        default:
            return groups
    }
}