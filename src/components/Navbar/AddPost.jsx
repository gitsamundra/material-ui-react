import { Fab, Tooltip, makeStyles, 
    Modal, Container, TextField, MenuItem, RadioGroup, 
    FormControlLabel, Radio, FormLabel, Button, Snackbar 
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { Add } from '@material-ui/icons'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 10,
        right: 10
    },
    container: {
        height: 550,
        width: 500,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
            width: '100vw'
        }
    },
    form: {
        padding: theme.spacing(2)
    },
    item: {
        marginBottom: theme.spacing(3)
    }
}))


const AddPost = () => {
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const classes = useStyles()

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant='filled' {...props} />
    }

    const handleClose = (e, reason) => {
        if(reason === 'clickAway') {
            return
        }
        setOpenAlert(false)
    }
    return (
        <>
            <Tooltip title='Add' onClick={() => setOpen(true)}>
                <Fab color='primary' className={classes.fab}>
                    <Add />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete='off'>
                        <div className={classes.item}>
                            <TextField label='Title...' size='small' fullWidth/>
                        </div>
                        <div className={classes.item}>
                            <TextField 
                                id='outlined-multiline-static'
                                label='Description' 
                                size='small' 
                                defaultValue='Tell your story...'
                                multiline
                                rows={4}
                                variant='outlined'
                                fullWidth
                            />
                        </div>
                        <div className={classes.item}>
                            <TextField label='Visibility' select value='Public' fullWidth>
                                <MenuItem value='Public'>Public</MenuItem>
                                <MenuItem value='Private'>Private</MenuItem>
                                <MenuItem value='Unlisted'>Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component='legend'>Who can comment?</FormLabel>
                            <RadioGroup >
                                <FormControlLabel label='My Friends' control={<Radio size='small'/>} value='My Friends' fullWidth/>
                                <FormControlLabel label='Everybody' control={<Radio size='small'/>} value='Everybody' fullWidth/>
                                <FormControlLabel label='Nobody' control={<Radio size='small'/>} value='Nobody' fullWidth/>
                                <FormControlLabel label='Custom' disabled control={<Radio size='small'/>} value='Custom (Premium)' fullWidth/>
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant='outlined' color='primary' onClick={() => setOpenAlert(true)} style={{marginRight: 20}}>Create</Button>
                            <Button variant='outlined' color='secondary' onClick={() => setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar 
                autoHideDuration={2000} 
                open={openAlert} 
                onClose={handleClose}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            >
                <Alert onClose={handleClose} severity='success' >
                    Success !!!
                </Alert>
            </Snackbar>
        </>
    )
}

export default AddPost
