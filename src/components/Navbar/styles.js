import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles(theme =>({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0
    },
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover' : {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            display: props => props.open ? 'flex' : 'none',
            width: '60%'
        }
    }, 
    input: {
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    cancel: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    icons: {
        alignItems: 'center',
        display: props => props.open ? 'none' : 'flex'
    },
    badge: {
        marginRight: theme.spacing(2)
    },
    
    leftContainer: {
        height: '100vh',
        color: 'white',
        paddingTop: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')] : {
            backgroundColor: 'white',
            color: '#555',
            border: '1px solid #ece7e7'
        }
    },
    item : {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')] : {
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        }
    },
    leftIcon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px'
        }
    },
    leftText: {
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))