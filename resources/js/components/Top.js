import React, { Component, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link }　from 'react-router-dom'

import { readGroups } from '../actions/index'

import { makeStyles, Button, Container, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '25%',
    },
    titlePaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        height: 210,
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, .03)',
        // height: 200,
        // textOverflow: 'ellipsis',
        // width: 
    },
    title: {
        maxHeight: 30,
        textOverflow: 'ellipsis',
    },
    detail: {
        maxHeight: 100,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
    },
    button: {
        alignItems: 'flex-end',
    }
    
}))

export const Top = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readGroups())
    }, [])

    const groups = useSelector(state => state.groups)

    const classes = useStyles()
    const style = { margin: 12 }

    return (
        <Container maxWidth="lg">
            <Button
              variant="contained"
              color="primary"
              style={style}
              component={Link}
              to="/groups/new"
            >新しいグループを作成</Button>
            <br/>
            <br/>
            <Grid container spacing={1}>
                <Grid item xs={12}><Paper className={classes.titlePaper}>投稿グループ一覧</Paper></Grid>
            </Grid>
            <br/>
                <Grid container spacing={3}>
                    {_.map(groups, group => (
                       <Grid key={group.id} item xs={4}>
                         <Paper className={classes.paper}>
                            <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography className={classes.title} gutterBottom variant="subtitle1">
                                        {group.name}
                                    </Typography>
                                    <Typography className={classes.detail} variant="body2" color="textSecondary">
                                        {group.detail}
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.button}>
                                    <Button component={Link} to={`/groups/${group.id}`} size="small" color="primary">
                                      投稿一覧
                                    </Button>
                                </Grid>
                            </Grid>
                            </Grid>
                         </Paper>
                       </Grid>
                    ))} 
                </Grid>
        </Container>
    )
}