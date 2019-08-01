import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './sass/contact.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className="container contact">
    <div className={classes.root}>
      <Grid container spacing={3}
      style={{marginTop: '40px'}}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Amber Jones</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Phone: (210) 429 - 6474</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Email: me@amberjones.dev</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>LinkedIn: https://www.linkedin.com/in/amberlovescats14</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>GitHub: http://www.github.com/amberlovescats14</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>LikedIn:
          <Grid item xs={6}>
          <Paper className={classes.paper}>Email: me@amberjones.dev</Paper>
        </Grid></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}