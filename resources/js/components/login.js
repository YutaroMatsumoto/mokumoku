import React from 'react'
import { useForm, Controller } from 'react-hook-form'
// import { Box, Grid, makeStyles, InputBase } from '@material-ui/core';

import { useDispatch } from 'react-redux'

import { login } from '../actions/index'
import { Button, TextField, Container } from '@material-ui/core'

export const Login = (props) => {
    const { handleSubmit, register, errors, control, formState: { isDirty, isSubmitting } } = useForm()
    const dispatch = useDispatch()

    const style = { margin: 12 }
    const { id } = props.match.params
    const back = `/groups/${id}`

    const onSubmit = (data) => { 
        dispatch(login(data))
        props.history.push('/')
    }

    // メールアドレスのバリデーションに利用
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return (
        <Container maxWidth="sm">
            <h1>ログイン</h1>
            {/* <form onSubmit={handleSubmit(this.onSubmit)}> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <Controller
                          error={errors.email ? true : false}
                          as={<TextField 
                            label="メールアドレス"
                            variant="outlined"
                            helperText={errors.email ? errors.email.message : false}
                            fullWidth={true}/>}
                          name="email"
                          placeholder="メールアドレス"
                          defaultValue=""
                          control={control}
                          rules={{required: 'メールアドレスは必須です。', 
                                maxLength: {value: 250, message: '文字数は250文字以下になるようにしてください。'},
                                pattern: {value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: '正しい形式でメールアドレスを入力してください。'}}}
                        />
                    </div><br/>

                    <div>
                        <Controller
                          error={errors.password ? true : false}
                          as={<TextField
                            label="パスワード"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            helperText={errors.password ? errors.password.message : false}
                            fullWidth={true}/>}
                          name="password"
                          placeholder="パスワード"
                          defaultValue=""
                          control={control}
                          rules={{required: 'パスワードは必須です。', maxLength: {value: 250, message: '文字数は250文字以下になるようにしてください。'}}}
                        />
                    </div>
                </div>
                <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(onSubmit)}
                      style={style}
                      disabled={!isDirty || isSubmitting}
                    >ログイン</Button>
                </div>
            </form>
            
        </Container>
    )
}