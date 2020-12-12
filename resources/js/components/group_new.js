import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'

import { createGroup } from '../actions/index'

class GroupNew extends Component {
    constructor(props) { // initializeしたときにbind
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field

        return (
            <div>
                <label>{label}</label>
                <input {...input} placeholder={label} type={type} />
                { touched && error && <span>{error}</span> }
            </div>
        )
    }

    async onSubmit(values) {
        await this.props.createGroup(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit } = this.props //renderしたときにとってくる？
        return (
            <div>
                <h1>新規作成画面</h1>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <Field label="グループ名" name="name" type="text" component={this.renderField}/>
                        <Field label="説明" name="detail" type="text" component={this.renderField}/>
                        {/* <Field label="Name" name="name" type="text" component="input" placeholder="グループ名"/> */}
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

    if (!values.name) errors.name = "グループ名を入力してください。"
    if (!values.detail) errors.detail = "説明を入力してください。"

    console.log(errors)
    return errors
}

const mapDispatchToProps = ({ createGroup })

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'groupNewForm' })(GroupNew)
)