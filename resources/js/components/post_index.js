import React, { Component, useEffect } from 'react';
import Items from './Items'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import { Link }　from 'react-router-dom'

import { readPosts } from '../actions/index'

// componentDidMount() {
// const { id } = this.props.match.params
// this.props.readPosts(id)
// }

export const PostIndex = (props) => {

    const dispatch = useDispatch()


    /**  useeffectを利用せず、以下だけでreadpostを実行しようとするの、無限にrequestが発生する  **/
    // readPosts(id)
    // dispatch(readPosts(id))
    /** **/

    const { id } = props.match.params
    useEffect(() => {
        dispatch(readPosts(id))
    },[id])

    const group_posts = useSelector(state => state.groups)

    // const a = props
    // const { group_posts } = props
    // console.log('aaa')
    // console.log(props)
    // console.log('aaa')
    // console.log('postsをひょうじする')
    // console.log('postsをひょうじする')
    // console.log(group_posts.posts)
    // console.log('postsをひょうじする')
    // console.log('postsをひょうじする')
    // const check = Object.keys(group_posts.posts).length
    // if(group_posts.posts) {
        // console.log('投稿あり')
    // } else {
        // console.log('投稿なし')
    // }
    return (
        <React.Fragment>
                <p>グループ情報</p>
                <p>グループ名：{group_posts.group_name ? group_posts.group_name : '' }</p>
                <p>グループ詳細：{group_posts.group_detail ? group_posts.group_detail : '' }</p>
                <Link to='/'>戻る</Link>
                <Link to={`${group_posts.group_id}/edit`}>グループ情報を編集する</Link>
                <Link to={`${group_posts.group_id}/post/new`}>投稿</Link>
                <table>
                    <tbody>
                        {_.map(group_posts.posts, post => (
                            <tr key={post.id}>
                                <td>日付：{post.date}</td>
                                <td>{post.title}</td>
                                <td><Link to={`${group_posts.group_id}/post/${post.id}/edit`}>編集</Link></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
        </React.Fragment>
    )
}

// const mapStateToProps = state => ({ group_posts: state.groups })

// const mapDispatchToProps = ({ readPosts })

// export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);