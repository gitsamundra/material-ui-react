import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    right: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    }
}))