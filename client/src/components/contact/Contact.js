import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleTabs from './tabPanel/SimpleTabs'

import './sass/contact.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "secondary.main"
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
          <Paper className={classes.paper}
         >Amber Jones</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Phone: (210) 429 - 6474</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Email: me@amberjones.dev</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>LinkedIn: 
          <a href="https://www.linkedin.com/in/amberlovescats14"> in/amberlovescats14</a>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>GitHub: 
          <a href="http://www.github.com/amberlovescats14"> /amberlovescats14</a>
          </Paper>
        </Grid>
      </Grid>
    </div>
    <div id="bottom">
    <SimpleTabs/>
    <div className="left" >
    <img src="https://www.abeautifulsite.net/uploads/2017/02/sass.png?width=600&key=a18980ed50ba77f256a580d00ba54a8fe80d85f7a96bbe3ff3463890acc91fca" alt="sass" className="styles"
    />
    <img src="https://t.ly/LD7W" alt="materialUI" className="styles"/>
    <img src="https://t.ly/qPvJ" alt="bootstrap" className="styles"/>
    </div>
    </div>
    </div>
  );
}

