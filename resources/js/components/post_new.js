import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
// import { Box, Grid, makeStyles, InputBase } from '@material-ui/core';

import { connect } from 'react-redux'
// import { Field, reduxForm } from 'redux-form'
import { Link }　from 'react-router-dom'

import { createPost } from '../actions/index'
import { Button, TextField } from '@material-ui/core'


    // renderField(field) {
        // const { input, label, type, meta: { touched, error } } = field
        // return (
            // <div>
                {/* <label>{label}</label> */}
                {/* <input {...input} placeholder={label} type={type} /> */}
                {/* { touched && error && <span>{error}</span> } */}
            {/* </div> */}
        // )
    // }

// class PostNew extends Component {
export const PostNew = (props) => {
    const { id } = props.match.params
    // constructor(props) { // initializeしたときにbind
        // super(props)
        // this.onSubmit = this.onSubmit.bind(this)
    // }

    // async onSubmit(values) {
        // await this.props.createGroup(values)
        // this.props.history.push('/')
    // }

        // const { handleSubmit, pristine, submitting } = this.props
        // 上記について）renderしたときにとってくる？
        // pristine: 入力されていないとtrueを返す。入力されているとfalseを返す。
        // submitting: 送信されるとtrueを返す。送信する前はfalseを返す。
    const { register, handleSubmit, watch, errors, control } = useForm()
    console.log('errorsをひょうじ')
    console.log(errors)
    // console.log(control)
    console.log('errorsをひょうじ')
    // console.log('onsubmitをひょうじする')
    const onSubmit = (data) => { console.log(data) };
    console.log('onsubmitをひょうじする')

    return (
        <div>
            <h1>投稿画面</h1>
            {/* <form onSubmit={handleSubmit(this.onSubmit)}> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <Controller
                          as={<TextField />}
                          name="title"
                          placeholder="タイトル"
                        //   ref={ register({required: 'タイトルは必須です。'}) }
                          defaultValue=""
                          control={control}
                          rules={{required: 'タイトルは必須です。'}}
                        />
                        <ErrorMessage errors={errors} name="title"/>
                    </div>


                    <div>
                        <Controller
                          as={<TextField />}
                          name="content"
                          placeholder="内容"
                          defaultValue=""
                          control={control}
                          rules={{required: '内容は必須です。', maxLength: {value: 5, message: '文字数は2000文字以下になるようにしてください。'}}}
                        />
                        <ErrorMessage errors={errors} name="content"/>
                    </div>
                </div>
                <div>
                    {/* <input type="submit" value="Submit" disabled={pristine || submitting} /> */}
                    <Controller
                      as={<Button color="primary"><span>送信</span></Button>}
                      name="submit"
                      control={control}
                      defaultValue=""
                      onClick={handleSubmit(onSubmit)}
                    />
                    {/* <input type="submit" value="Submit"  /> */}
                    <Link to="/">Cancel</Link>
                </div>
            </form>
            
        </div>
    )
    
    
    
    
    
    

    
    
    
    
    

    
    

    
    
}

// const validate = values => {
    // const errors = {}
// 
    // if (!values.title) errors.name = "タイトルを入力してください。"
    // if (!values.date) errors.detail = "日付を入力してください。"
    // if (!values.content) errors.detail = "内容を入力してください。"
// 
    // console.log(errors)
    // return errors
// }
// 
// const mapDispatchToProps = ({ createPost })
// 
// export default connect(null, mapDispatchToProps)(PostNew)
// export default connect(null, mapDispatchToProps)(
//    reduxForm({ validate, form: 'postNewForm' })(PostNew)
// )