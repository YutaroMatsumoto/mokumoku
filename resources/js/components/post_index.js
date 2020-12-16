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
        console.log(this.props.posts)
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        {_.map(this.props.posts, post => (
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

const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = ({ readPosts })


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);