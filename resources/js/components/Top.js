import React, { Component } from 'react';
import Items from './Items'
import { connect } from 'react-redux'
import _ from 'lodash'

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
        // axios.get('/api/get')
        //      .then((response) => {
        //          console.log(response);
        //          this.setState({
        //              items: response.data
        //          })
        //      })
        //      .catch(error => {
        //          console.log(error);
        //      })
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
                                <td>{group.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* aaaa */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ groups: state.groups })

const mapDispatchToProps = ({ readGroups })


export default connect(mapStateToProps, mapDispatchToProps)(Top);