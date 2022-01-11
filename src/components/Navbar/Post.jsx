import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(4)
    },
    media: {
        height: '250px',
        [theme.breakpoints.down('sm')]: {
            height: 150
        }
    }
}))

const Post = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image="https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title ='My Title'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5'>The Brocoli</Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi, aspernatur? Tempore neque omnis delectus illum, 
                        et qui sapiente perferendis eum voluptatibus voluptate fuga recusandae. 
                        Repellendus dolore ea blanditiis aliquid nam?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary'>Share</Button>
                    <Button size='small' color='primary'>Learn more</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default Post
