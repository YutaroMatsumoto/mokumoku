import axios from 'axios'
import { get } from 'jquery'

// reducerで利用するため、export
export const READ_ITEMS = 'READ_ITEMS'

// viewのcomponent側で使用するため、exportする
// tunkによって、actionの代わりに関数を返すことができるようになっている
export const readItems = () => async dispatch => {
    const response =  await axios.get('/api/get')
    console.log('あああああ')
    console.log('あああああ')
    console.log(response)
    console.log('あああああ')
    console.log('あああああ')

    dispatch({ type: READ_ITEMS, response }) // reducerに渡す。これにより、actionはtype, responseのkeyをもつ
}