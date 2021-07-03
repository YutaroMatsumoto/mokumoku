import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
// import { Box, Grid, makeStyles, InputBase } from '@material-ui/core';

import { useDispatch } from 'react-redux'
import { Link }　from 'react-router-dom'

import { createPost } from '../actions/index'
import { Button, TextField, Container } from '@material-ui/core'

export const PostNew = (props) => {
    const { handleSubmit, register, errors, control, formState: { isDirty, isSubmitting } } = useForm()
    const dispatch = useDispatch()

    const style = { margin: 12 }
    const { id } = props.match.params
    const back = `/groups/${id}`

    const onSubmit = (data) => { 
        dispatch(createPost(data))
        props.history.push(back)
    }

    return (
        <Container maxWidth="sm">
            <h1>投稿画面</h1>
            {/* <form onSubmit={handleSubmit(this.onSubmit)}> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <Controller
                          error={errors.title ? true : false}
                          as={<TextField 
                            label="タイトル"
                            variant="outlined"
                            helperText={errors.title ? errors.title.message : false}
                            fullWidth={true}/>}
                          name="title"
                          placeholder="タイトル"
                        //   ref={ register({required: 'タイトルは必須です。'}) }
                          defaultValue=""
                          control={control}
                          rules={{required: 'タイトルは必須です。', maxLength: {value: 250, message: '文字数は250文字以下になるようにしてください。'}}}
                        />
                        {/* <ErrorMessage errors={errors} name="title" as={<Alert severity="warning"><AlertTitle></AlertTitle></Alert>}/> */}
                        {/* <ErrorMessage errors={errors} name="title"/> */}
                    </div><br/>

                    <div>
                        <Controller
                          error={errors.content ? true : false}
                          as={<TextField
                            label="内容"
                            multiline
                            variant="outlined"
                            helperText={errors.content ? errors.content.message : false}
                            fullWidth={true}
                            rows={15}/>}
                          name="content"
                          placeholder="内容"
                          defaultValue=""
                          control={control}
                          rules={{required: '内容は必須です。', maxLength: {value: 2000, message: '文字数は2000文字以下になるようにしてください。'}}}
                        />
                        {/* <ErrorMessage errors={errors} name="content" as={<Alert severity="warning"><AlertTitle></AlertTitle></Alert>}/> */}
                    </div>
                    <div>
                        <input type="hidden" ref={register} name="group_id" value={id}/>
                    </div>
                </div>
                <div>
                    {/* <input type="submit" value="Submit" disabled={pristine || submitting} /> */}
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
                      to={back}
                      style={style}
                    >戻る</Button>
                </div>
            </form>
            
        </Container>
    )
}