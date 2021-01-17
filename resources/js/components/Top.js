import React, { Component, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link }　from 'react-router-dom'

import { readGroups } from '../actions/index'
import { Button, Container } from '@material-ui/core';

export const Top = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readGroups())
    }, [])

    const groups = useSelector(state => state.groups)

    const style = { margin: 12 }

    return (
        <Container maxWidth="lg">
            <table>
                <tbody>
                    {/* <div>{console.log(this.props.items)}</div> */}
                    {/* <Items items={this.state.items}/> */}
                    {_.map(groups, group => (
                        <tr key={group.id}>
                            <td><Link to={`/groups/${group.id}`}>{group.name}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button
              variant="contained"
              color="primary"
              style={style}
              component={Link}
              to="/groups/new"
            >新しいグループを作成</Button>
            {/* <Link to="/groups/new">新しい勉強会グループを作成する</Link> */}
        </Container>
    )
}

































// const mapStateToProps = state => ({ groups: state.groups })

// const mapDispatchToProps = ({ readGroups })


// export default connect(mapStateToProps, mapDispatchToProps)(Top);