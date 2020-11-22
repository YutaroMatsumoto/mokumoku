import _ from 'lodash'
import { READ_ITEMS } from '../actions/index'


export default (items = {}, action) => {
    switch(action.type) {
        case READ_ITEMS:
            console.log(action)
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        default:
            return items

    }
}