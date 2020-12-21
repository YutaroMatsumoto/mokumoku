import React, { Component } from 'react';
import Items from './Items'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link }　from 'react-router-dom'

import { readPosts } from '../actions/index'

class PostIndex extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.readPosts(id)
    }

    render() {
        const { group_posts } = this.props
        return (
            <React.Fragment>
                <p>グループ情報</p>
                <p>グループ名：{group_posts.group_name ? group_posts.group_name : '' }</p>
                <p>グループ詳細：{group_posts.group_detail ? group_posts.group_detail : '' }</p>
                <Link to='/'>戻る</Link>
                <Link to={`${group_posts.group_id}/edit`}>グループ情報を編集する</Link>
                <table>
                    <tbody>
                        {_.map(group_posts.posts, post => (
                            <tr key={post.id}>
                                <td>日付：{post.date}</td>
                                <td>{post.title}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ group_posts: state.groups })

const mapDispatchToProps = ({ readPosts })


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);