import axios from 'axios'
import { get } from 'jquery'

// reducerで利用するため、export
export const READ_GROUPS = 'READ_GROUPS'
export const CREATE_GROUP = 'CREATE_GROUP'
export const READ_POSTS = 'READ_POSTS'

// viewのcomponent側で使用するため、exportする
// tunkによって、actionの代わりに関数を返すことができるようになっている
export const readGroups = () => async dispatch => {
    const response =  await axios.get('/api/get')
    console.log('あああああ')
    console.log('あああああ')
    console.log(response)
    console.log('あああああ')
    console.log('あああああ')

    dispatch({ type: READ_GROUPS, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const createGroup = values => async dispatch => {
    const response =  await axios.post('/api/add', values)
    console.log('いいいいい')
    console.log('いいいいい')
    console.log(response)
    console.log('いいいいい')
    console.log('いいいいい')

    dispatch({ type: CREATE_GROUP, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const readPosts = id => async dispatch => {
    const response =  await axios.get(`/api/getposts/${id}`)
    console.log('ううううう')
    console.log('ううううう')
    console.log(response)
    console.log('ううううう')
    console.log('ううううう')

    dispatch({ type: READ_POSTS, response })
}