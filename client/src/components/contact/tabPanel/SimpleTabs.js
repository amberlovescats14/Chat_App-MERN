import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div 
    style={{width: '50%', height:'auto', padding: '20px', marginTop:'20px'}}
    className={classes.root}>
    <Box bgcolor="secondary.main" align="center"
    style={{padding: '20px'}}>
    <div className={classes.header}
    bgcolog="error.main">{"Front-End Design Projects"}</div>
    </Box>


      <AppBar position="static" 
      style={{marginTop: '10px'}}>
        <Tabs 
        value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Boutique" {...a11yProps(0)} />
          <Tab label="Job-Shop" {...a11yProps(1)} />
          <Tab label="Landing" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} align="center" >
      <a href="http://just-htmlcssbootstrap.surge.sh/"
      variant="h2" >Discover!</a>
        <img src={require('./img/MarleyLilly.png')} alt="MarleyLilly"/>
        This boutique project is styled with BootStrap
      </TabPanel>
      <TabPanel value={value} index={1} align="center">
      <a href="http://mighty-theory.surge.sh/">Have A Look!</a>
        <img src={require('./img/rivercity.png')} alt="rc"/>
        This job-shop project is styled with HTML and CSS
      </TabPanel>
      <TabPanel value={value} index={2} align="center">
      <a href="http://foregoing-government.surge.sh/">Check It Out!</a>
        <img src={require('./img/Screen Shot 2019-07-31 at 5.01.24 PM.png')} alt="landing"/>
        This landing page is styled with SASS
      </TabPanel>
    </div>
  );
}