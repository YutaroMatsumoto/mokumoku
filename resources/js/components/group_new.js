import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { Link }　from 'react-router-dom'
import { Button, TextField, Container } from '@material-ui/core'

import { createGroup } from '../actions/index'

export const GroupNew = (props) => {
    const { handleSubmit, register, errors, control, formState: { isDirty, isSubmitting } } = useForm()
    const dispatch = useDispatch()
    const style = { margin: 12 }
    const onSubmit = (data) => {
        dispatch(createGroup(data))
        props.history.push('/')
    }

    return (
        <Container maxWidth="sm">
            <h1>グループ作成画面</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <Controller
                          error={errors.name ? true : false}
                          as={<TextField 
                            label="グループ名"
                            variant="outlined"
                            helperText={errors.name ? errors.name.message : false}
                            fullWidth={true}/>}
                          name="name"
                          placeholder="グループ名"
                          defaultValue=""
                          control={control}
                          rules={{required: 'グループ名は必須です。', maxLength: {value: 250, message: '文字数は250文字以下になるようにしてください。'}}}
                        />
                    </div><br/>
                    <div>
                        <Controller
                          error={errors.detail ? true : false}
                          as={<TextField
                            label="グループの概要"
                            multiline
                            variant="outlined"
                            helperText={errors.detail ? errors.detail.message : false}
                            fullWidth={true}
                            rows={3}/>}
                          name="detail"
                          placeholder="グループの概要"
                          defaultValue=""
                          control={control}
                          rules={{required: 'グループの概要は必須です。', maxLength: {value: 250, message: '文字数は200文字以下になるようにしてください。'}}}
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
                    >送信</Button>
                    <Button
                      variant="contained"
                      component={Link}
                      to="/"
                      style={style}
                    >戻る</Button>
                </div>

            </form>

        </Container>
    )
}