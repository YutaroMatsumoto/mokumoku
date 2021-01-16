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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { readPosts } from '../actions/index'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    accordingSummary: {
      height: '1px',
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
    //   marginBottom: -1,
    //   verticalAlign: 'middle'
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
      flexBasis: '90%',
    }
  }));

const style={  }

export const PostIndex = (props) => {

    const classes = useStyles();
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

    // const a = props
    // const { group_posts } = props
    // console.log('aaa')
    // console.log(props)
    // console.log('aaa')
    // console.log('postsをひょうじする')
    // console.log('postsをひょうじする')
    // console.log(group_posts.posts)
    // console.log('postsをひょうじする')
    // console.log('postsをひょうじする')
    // const check = Object.keys(group_posts.posts).length
    // if(group_posts.posts) {
        // console.log('投稿あり')
    // } else {
        // console.log('投稿なし')
    // }
    return (
        <Container maxWidth="lg">
                <p>グループ情報</p>
                <p>グループ名：{group_posts.group_name ? group_posts.group_name : '' }</p>
                <p>グループ詳細：{group_posts.group_detail ? group_posts.group_detail : '' }</p>
                <Link to='/'>戻る</Link>
                <Link to={`${group_posts.group_id}/edit`}>グループ情報を編集する</Link>
                <Link to={`${group_posts.group_id}/post/new`}>投稿</Link>
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
                                      color="primary"
                                      component={Link}
                                      to={`${group_posts.group_id}/post/${post.id}/edit`}
                                    >編集</Button>
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