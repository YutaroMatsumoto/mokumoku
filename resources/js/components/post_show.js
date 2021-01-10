import React, { useEffect, useContext } from 'react'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
// import { Box, Grid, makeStyles, InputBase } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'
import { Link }　from 'react-router-dom'
import { Button, TextField, Container } from '@material-ui/core'
import { createPost, getPost } from '../actions/index'
import { PostIndex } from './post_index'
import { result } from 'lodash'


// この画面では、以下の機能が必要となる
 // ・投稿情報取得機能
 // ・投稿削除機能（alertも）
 // ・投稿更新機能

 // Controller コンポーネントの値をリセットするには、useForm に defaultValues を指定する必要があります。

 // setvalue使ってみる（useForm）

export const PostShow = (props) => {
    const style = { margin: 12 }
    const { id } = props.match.params // これはグループのid
    const { post_id } = props.match.params
    const back = `/groups/${id}`

    const dispatch = useDispatch()

    const post = useSelector(state => state.posts)
    console.log('useselector実行')
    console.log(post)
    // console.log(post.title)

    const { handleSubmit, register, reset, errors, control, formState: { isDirty, isSubmitting } } = useForm({ defaultValues: post })

    useEffect(() => {
      console.log('実行まえ')
      dispatch(getPost(post_id))
      console.log('実行あと')
    }, [post_id])

    // 以下の実装だと、編集画面を表示するのが2回目以降の場合、レンダリング回数が増える
    useEffect(() => {
      if(post.title) {
        console.log('resetがじっこうされた')
        console.log('resetがじっこうされた')
        reset(post) // resetを実行するとdefaultValuesをresetしてくれる？
      } else{ 
        console.log('resetはじっこうされていない')
        console.log('resetはじっこうされていない')
      }
    }, [post.title])

    console.log('あいうえお')


    // 以下にすると、結局無限ループになる //
    // useEffect(() => {
      // reset(defaultValues)
    // }, [reset, defaultValues]) //


    // 無限ループパート2 //
    // useEffect(() => {
      // console.log('実行まえ')
      // dispatch(getPost(post_id))
      // console.log('実行あと')
      // if(post.title) {
        // reset(post)
      // }
    // }, [post_id, post])

    //--- もともと書いていた処理（無限ループが発生） ---//
    // useEffect(() => {
      // dispatch(getPost(post_id))
    // }, [post_id])
    // const post = useSelector(state => state.posts)
    // const defaultValues = {title: post.title, content: post.content}
    // useEffect(() => {
      // reset(defaultValues)
    // }, [reset])
    //--------------------------//

    const onSubmit = (data) => { 
        // dispatch(createPost(data))
        // props.history.push(back)
        console.log(data)

    }

    return (
        <Container maxWidth="sm">
            <h1>投稿編集画面</h1> 
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
                            rows={5}/>}
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