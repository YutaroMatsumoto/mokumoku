import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'

import { getGroup, deleteGroup, updateGroup } from '../actions/index'
// この画面は、グループの取得、作成、削除ができる

// class内で使用するpropsは、mapStateToPropsで定義したもの

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

    // renderField({input, label, type, meta: { touched, error }}) {
    renderField(field) {
        // inputのnameと一致するkeyをもつstateをinput.valuesに入れている？
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
        await this.props.updateGroup(values)

        // updateGroupを実行したら、投稿一覧画面へ戻る
        this.props.history.push(`/groups/${values.id}`)
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props
        // 上記について）renderしたときにとってくる？
        // pristine: 入力されていないとtrueを返す。入力されているとfalseを返す。
        // submitting: 送信されるとtrueを返す。送信する前はfalseを返す。
        
        return (
            <div>
                <h1>勉強会グループ編集</h1>
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
    return errors
}

const mapStateToProps = (state, ownProps) => {
    // stateには、一つ前の画面で利用したaction(readPosts)によりがdispatchされた値？が入っている ← おそらくこれは、このコンポーネントでactionを読んでいなかったため
    // initialValuesを使わないとfieldに値が入らない
    // initialValuesは、input.valuesのこと？
    const group = state.groups[ownProps.match.params.id]
    return { initialValues: group }
}

const mapDispatchToProps = ({ getGroup, updateGroup })

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'groupShowForm', enableReinitialize: true })(GroupShow)
    // enableReinitializeはtrueにすると、initialValuesが変わるたびにformが初期化される
    // componentdirMountが実行される前と後ではstateが異なることがあるため、enableReinitializeをtrueにしておく必要がある
)