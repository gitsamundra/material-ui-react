import { AppBar, Avatar, Badge, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import useStyles  from './styles'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open})
    return (
        <div>
            <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logo}>
                        <IconButton aria-label='' />
                        <Typography >Material-UI</Typography>
                    </div>
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder='Search' className={classes.input} />
                        <Cancel onClick={() => setOpen(false)} className={classes.cancel}/>
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                        <Badge badgeContent={2} color='secondary' className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={10} color='secondary' className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar 
                            alt='Image'
                            src='https://media.istockphoto.com/photos/illustration-of-smiling-man-with-laptop-sitting-on-the-floor-in-yoga-picture-id1313326843'
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
