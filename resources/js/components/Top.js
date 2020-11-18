import React, { Component } from 'react';
import Items from './Items'

class Top extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            item: ''
        }
    }

    // コンポーネントがマウントされた時点で初期描画用のtodosをAPIから取得
    componentDidMount() {
        axios.get('/api/get')
             .then((response) => {
                 console.log(response);
                 this.setState({
                     items: response.data
                 })
             })
             .catch(error => {
                 console.log(error);
             })
    }

    render() {
        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <Items items={this.state.items}/>
                    </tbody>
                </table>
                {/* aaaa */}
            </React.Fragment>
        )
    }
}

export default Top;