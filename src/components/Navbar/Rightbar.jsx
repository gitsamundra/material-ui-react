import { Avatar, Container, Typography, makeStyles, ImageList, ImageListItem, Link, Divider } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import React from 'react'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(2)
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        color: '#555'
    },
    link: {
        marginRight: theme.spacing(2),
        color: '#555',
        fontSize: 16
    }
}))

const Rightbar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>Online friends</Typography>
            <AvatarGroup max={5} style={{marginBottom: 20}}>
                <Avatar alt='New' src='https://images.pexels.com/photos/7669771/pexels-photo-7669771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                <Avatar alt='New' src='https://media.istockphoto.com/photos/breakfast-picture-id91713133?s=612x612' />
                <Avatar alt='New' src='' />
                <Avatar alt='New' src='https://images.pexels.com/photos/7972551/pexels-photo-7972551.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                <Avatar alt='New' src='https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                <Avatar alt='New' src='https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
            </AvatarGroup>
            <Typography gutterBottom className={classes.title}>Gallery</Typography>
            <ImageList rowHeight={100} cols={3} style={{marginBottom: 20}}>
                <ImageListItem>
                    <img src="https://images.pexels.com/photos/68495/pexels-photo-68495.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.pexels.com/photos/9689915/pexels-photo-9689915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.pexels.com/photos/4587721/pexels-photo-4587721.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.pexels.com/photos/4115311/pexels-photo-4115311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.pexels.com/photos/7075789/pexels-photo-7075789.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://images.pexels.com/photos/188014/pexels-photo-188014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title} gutterBottom >Categories</Typography>
            <Link href='#' className={classes.link} variant='body2'>Sports</Link>
            <Link href='#' className={classes.link} variant='body2'>Food</Link>
            <Link href='#' className={classes.link} variant='body2'>Music</Link>
            <Divider flexItem style={{marginBottom: 5}} />
            <Link href='#' className={classes.link} variant='body2'>Movies</Link>
            <Link href='#' className={classes.link} variant='body2'>Science</Link>
            <Link href='#' className={classes.link} variant='body2'>Life</Link>
        </Container>
    )
}

export default Rightbar
