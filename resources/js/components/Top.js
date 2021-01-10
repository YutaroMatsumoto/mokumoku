import React, { Component } from 'react';
import Items from './Items'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link }　from 'react-router-dom'

import { readGroups } from '../actions/index'

class Top extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         items: [],
    //         item: ''
    //     }
    // }

    // コンポーネントがマウントされた時点で初期描画用のtodosをAPIから取得
    componentDidMount() {
        this.props.readGroups()
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        {/* <div>{console.log(this.props.items)}</div> */}
                        {/* <Items items={this.state.items}/> */}
                        {_.map(this.props.groups, group => (
                            <tr key={group.id}>
                                <td><Link to={`/groups/${group.id}`}>{group.name}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/groups/new">新しい勉強会グループを作成する</Link>

                {/* aaaa */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ groups: state.groups })

const mapDispatchToProps = ({ readGroups })


export default connect(mapStateToProps, mapDispatchToProps)(Top);