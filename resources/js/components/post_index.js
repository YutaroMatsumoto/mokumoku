import React, { Component } from 'react';
import Items from './Items'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link }　from 'react-router-dom'

import { readPosts } from '../actions/index'

class PostIndex extends Component {
    constructor(props) { // initializeしたときにbind
        console.log('あいうえお')
        super(props)
        // this.onSubmit = this.onSubmit.bind(this)
    }

    // コンポーネントがマウントされた時点で初期描画用のtodosをAPIから取得
    componentDidMount() {
        const { id } = this.props.match.params
        const aiueo = this.props

        console.log('東京')
        this.props.readPosts(id)
    }

    render() {
        return (
            <React.Fragment>
                <h1>くぃうえお</h1>
                {/* <table>
                    <tbody> */}
                        {/* <div>{console.log(this.props.items)}</div> */}
                        {/* <Items items={this.state.items}/> */}
                        {/* {_.map(this.props.posts, post => (
                            <tr key={post.id}>
                                <td>{post.name}</td>
                            </tr>
                        ))} */}
                        
                    {/* </tbody>
                </table> */}
                {/* <Link to="/groups/new">新しい勉強会グループを作成する</Link> */}

                {/* aaaa */}
            </React.Fragment>
        )
    }
}

// const mapStateToProps = state => ({ posts: state.posts })

const mapDispatchToProps = ({ readPosts })


export default connect(null, mapDispatchToProps)(PostIndex);