import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'

import { getGroup, deleteGroup, putGroup } from '../actions/index'
// この画面は、グループの取得、作成、削除ができる


class GroupShow extends Component {
    constructor(props) { // initializeしたときにbind
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if(id) {
            this.props.getGroup(id)   
        }
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
        // await this.props.postGroup(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        // 上記について）renderしたときにとってくる？
        // pristine: 入力されていないとtrueを返す。入力されているとfalseを返す。
        // submitting: 送信されるとtrueを返す。送信する前はfalseを返す。
        
        return (
            <div>
                <h1>グループ編集</h1>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div>
                        <Field label="グループ名" name="name" type="text" component={this.renderField}/>
                        <Field label="説明" name="detail" type="text" component={this.renderField}/>
                    </div>
                    <div>
                        <input type="submit" value="Submit" disabled={pristine || submitting} />
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

const mapStateToProps = (state, ownProps) => {
    const group = state.groups[ownProps.match.params.id]
    return { initialValues: group, group }
}

const mapDispatchToProps = ({ getGroup })

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'groupShowForm', enableReinitialize: true })(GroupShow)
    // enableReinitializeはtrueにすると、initialValuesが変わるたびにformが初期化される
)