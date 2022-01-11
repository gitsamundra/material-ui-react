import { Grid } from '@material-ui/core';
import React from 'react';
import AddPost from './components/Navbar/AddPost';
import Feed from './components/Navbar/Feed';
import Leftbar from './components/Navbar/Leftbar';
import Navbar from './components/Navbar/Navbar';
import Rightbar from './components/Navbar/Rightbar'
import useStyles from './styles'

function App() {
  const classes = useStyles()
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}><Leftbar /></Grid>
        <Grid item sm={7} xs={10}><Feed /></Grid>
        <Grid item sm={3} className={classes.right}> <Rightbar /></Grid>
      </Grid>
      <AddPost />
    </>
  );
}

export default App;
