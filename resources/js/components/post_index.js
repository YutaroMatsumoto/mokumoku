import React, { Component, useEffect } from 'react';
import Items from './Items'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import { Link }　from 'react-router-dom'

import { Button, TextField, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PostAddIcon from '@material-ui/icons/PostAdd';

import { readPosts } from '../actions/index'

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      backgroundColor: '#D9E5FF'
    },
    accordingSummary: {
      height: '1px',
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
    },
    title: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '50%',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',

    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '50%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '40%',
      color: theme.palette.text.secondary,
    },
    editLink: {
      fontSize: theme.typography.pxToRem(15),
    },
    content: {
      whiteSpace: 'pre-line',
      flexBasis: '85%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.success,
    },
    paper2: {
        padding: theme.spacing(2),
        whiteSpace: 'pre-line',
        backgroundColor: 'rgba(0, 0, 0, .03)',
    },
  }));


export const PostIndex = (props) => {

    const classes = useStyles();
    const button_style = { margin: 12 }

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        // 閉じた状態でクリックすると、expandedがtrueになる　-> trueのため、expandedが、panelの値になる。
        // expandedとクリックされたidが同じだと、パネルが開いた状態になる。
        setExpanded(isExpanded ? panel : false);
    };
    const dispatch = useDispatch()


    /**  useeffectを利用せず、以下だけでreadpostを実行しようとするの、無限にrequestが発生する  **/
    // readPosts(id)
    // dispatch(readPosts(id))
    /** **/

    const { id } = props.match.params
    useEffect(() => {
        dispatch(readPosts(id))
    },[id])

    const group_posts = useSelector(state => state.groups)

    var post_check = false
    const no_post_message = 'まだ投稿がありません。'
    if(group_posts.posts) {
        const check = Object.keys(group_posts.posts).length
        if(check === 0) {
            post_check = true
        }
    }

    return (
        <Container maxWidth="lg">
            <br/>
            <Grid container spacing={1}>
                <Grid item xs={12}><Paper className={classes.paper}>グループ情報</Paper></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper2}>
                        グループ名：{group_posts.group_name ? group_posts.group_name : ''} <br/>
                        グループ詳細：{group_posts.group_detail ? group_posts.group_detail : ''}
                    </Paper>
                </Grid>
            </Grid>

            <br/>

            <Button
                variant="contained"
                component={Link}
                to='/'
                style={button_style}
            >戻る</Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`${group_posts.group_id}/edit`}
                style={button_style}
            >グループ情報を編集する</Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`${group_posts.group_id}/post/new`}
                style={button_style}
            >投稿</Button>

            <br/>
            <br/>

            <Grid container spacing={1}>
                <Grid item xs={12}><Paper className={classes.paper}>投稿一覧</Paper></Grid>
            </Grid>
            <br/>
            {post_check ? no_post_message : ''}
            {_.map(group_posts.posts, post => {
                const panel_id = `panel${post.id}`
                const panel_area = `${panel_id}bh-content`
                const panel_area_id = `${panel_id}1bh-header`
                return (
                    <Accordion key={post.id} expanded={expanded === panel_id} onChange={handleChange(`${panel_id}`)}>
                        <AccordionSummary
                            className={classes.accordingSummary}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={panel_area}
                            id={panel_area_id}
                        >
                            <Typography className={classes.heading}>{post.title}</Typography>
                            <Typography className={classes.secondaryHeading}>日付：{post.date}</Typography>
                            {/* <Link to={`${group_posts.group_id}/post/${post.id}/edit`}>編集</Link> */}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.content}>
                                {post.content}                                
                            </Typography>
                            <Typography className={classes.editLink}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to={`${group_posts.group_id}/post/${post.id}/edit`}
                                >投稿を編集</Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Container>
    )
}

// const mapStateToProps = state => ({ group_posts: state.groups })

// const mapDispatchToProps = ({ readPosts })

// export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);