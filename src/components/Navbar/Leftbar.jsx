import { Container, Typography } from '@material-ui/core'
import { Apps, CameraAlt, Collections, Home, People, Settings, Videocam } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles'

const Leftbar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.leftContainer}>
            <div className={classes.item}>
                <Home className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <People className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <Apps className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <CameraAlt className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <Videocam className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <Apps className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Collections className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <CameraAlt className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <CameraAlt className={classes.leftIcon}/>
                <Typography className={classes.leftText}>Logout</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
