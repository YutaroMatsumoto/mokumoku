import axios from 'axios'

// reducerで利用するため、export
export const READ_GROUPS = 'READ_GROUPS'
export const CREATE_GROUP = 'CREATE_GROUP'
export const READ_POSTS = 'READ_POSTS'
export const GET_GROUP = 'GET_GROUP'
export const UPDATE_GROUP = 'UPDATE_GROUP'
export const CREATE_POST = 'CREATE_POST'
export const GET_POST = 'GET_POST'
export const UPDATE_POST = 'UPDATE_POST'

// viewのcomponent側で使用するため、exportする
// tunkによって、actionの代わりに関数を返すことができるようになっている
export const readGroups = () => async dispatch => {
    const response =  await axios.get('/api/get')
    dispatch({ type: READ_GROUPS, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}


export const createGroup = values => async dispatch => {
    const response =  await axios.post('/api/add', values)
    dispatch({ type: CREATE_GROUP, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}

export const readPosts = id => async dispatch => {
    const response =  await axios.get(`/api/get-posts/${id}`)
    dispatch({ type: READ_POSTS, response })
}

export const getGroup = id => async dispatch => {
    const response = await axios.get(`/api/show/${id}`)
    dispatch({ type: GET_GROUP, response })
}

// グループの編集処理
export const updateGroup = values => async dispatch => {
    const id = values.id
    const response = await axios.post(`/api/update/${id}`, values)
    dispatch({ type: UPDATE_GROUP, response })
}

export const createPost = values => async dispatch => {
    const response =  await axios.post('/api/add-post', values)
    dispatch({ type: CREATE_POST, response })
}

export const getPost = id => async dispatch => {
    console.log('actionはうごいているよ')
    console.log(id)
    console.log('actionはうごいているよ')
    const response = await axios.get(`/api/show-post/${id}`)
    dispatch({ type: GET_POST, response })
}

export const updatePost = values => async dispatch => {
    const id = values.post_id
    console.log('updatepostがうごいている')
    console.log(values)
    console.log('updatepostがうごいている')
    const response = await axios.post(`/api/update-post/${id}`, values)
    dispatch({ type: UPDATE_POST, response })
}