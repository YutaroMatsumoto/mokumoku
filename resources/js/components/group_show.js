import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { Link }　from 'react-router-dom'
import { Button, TextField, Container } from '@material-ui/core'

import { getGroup, updateGroup } from '../actions/index'

export const GroupShow = (props) => {
    const style = { margin: 12 }
    const { id } = props.match.params
    const back = `/groups/${id}`
    const dispatch = useDispatch()
    const group = useSelector(state => state.groups)
    
    const { handleSubmit, register, reset, errors, control, formState: { isDirty, isSubmitting } } = useForm({ defaultValues: {name: '', detail: ''} })
    useEffect(() => {
      dispatch(getGroup(id))
    }, [id])

    useEffect(() => {
      if(id == group.id) {
        reset(group) // resetを実行するとdefaultValuesをresetしてくれる？
      }
    }, [group])

    const onSubmit = (values) => {
        dispatch(updateGroup(values))
        props.history.push(back)
    }

    return (
        <Container maxWidth="sm">
            <h1>グループ情報編集画面</h1> 
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
                    <div>
                        <input type="hidden" ref={register} name="id" value={id}/>
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
                          to={back}
                          style={style}
                        >戻る</Button>
                    </div>
                </div>
            </form>
        </Container>
    )
}