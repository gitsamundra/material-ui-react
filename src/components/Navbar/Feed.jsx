import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Post from './Post'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(2)
    }
}))

const Feed = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

export default Feed
