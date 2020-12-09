import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'

class GroupNew extends Component {
    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field

        return (<div></div>)
    }
    render() {
        return (
            <div>
                <h1>新規作成画面</h1>
                <form>
                    <div>
                        <Field label="Title" name="title" type="text" component={this.renderField}/>
                        <Field label="Detail" name="detail" type="text" component={this.renderField}/>
                    </div>
                    <div>
                        <input type="submit" value="Submit" disabled={false} />
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
            

        )
    }
}

const validate = values => {
    const errors = {}

    console.log(errors)
    return errors
}
// mapDispatchToProps = ({  })

export default connect(null, null)(
    reduxForm({ validate, form: 'groupNewForm' })(GroupNew)
)