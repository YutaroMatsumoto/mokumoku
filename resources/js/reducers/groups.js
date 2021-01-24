import _ from 'lodash'
import { READ_GROUPS, CREATE_GROUP, GET_GROUP, UPDATE_GROUP, READ_POSTS } from '../actions/index'


export default (groups = {}, action) => {
    switch(action.type) {
        case READ_GROUPS:
            return _.mapKeys(action.response.data, 'id')
        case CREATE_GROUP:
        case GET_GROUP:
            const data = action.response.data
            // return {[data.id]: data}
            return data
        case READ_POSTS:
        case UPDATE_GROUP:
            const datas = action.response.data
            const return_data = {'group_id': datas.id,
                                 'group_name': datas.name,
                                 'group_detail': datas.detail,
                                 'posts':_.mapKeys(datas.posts, 'id')}
            return return_data;
        default:
            return groups
    }
}