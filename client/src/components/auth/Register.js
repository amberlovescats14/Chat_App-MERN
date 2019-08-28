import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Button, Paper, Typography, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '70%',
    margin: '8% auto ',
    padding: '5%',
    background: '#f5f5f5'
  },
  input: {
    margin: theme.spacing(1),
    width: '90%'
  },
}));

const Register = (props) => {
  const classes = useStyles()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const { name, email, password, password2 } = formData

  const onChange = e =>  setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault()
    if(password !== password2) {
     
    props.setAlert(`Passwords do not match`, 'danger')
    } else {
      props.register({name, email, password})

    }
  }
  if(props.isAuthenticated){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Paper className={classes.container}>
    <Typography variant="h2" color="primary">Sign Up</Typography>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" 
      onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <Input type="text" placeholder="Name" name="name" value={name} 
          className={classes.input}
          onChange={e => onChange(e)}
           />
        </div>
        <div className="form-group">
          <Input type="email" placeholder="Email Address" name="email" 
          value={email}
          className={classes.input}
          onChange={e => onChange(e)}
          />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            className={classes.input}
            value={password}
            onChange={e => onChange(e)}
           
          />
        </div>
        <div className="form-group">
          <Input 
            type="password"
            placeholder="Confirm Password"
            name="password2"
            className={classes.input}
            value={password2}
            onChange={e => onChange(e)}
           
          />
        </div>
        <Button type="submit" variant="contained" color="primary" >Register</Button>
      </form>
      <p className="my-1">
        Already have an account?   
          <Link to='/login'>
          <Typography color="primary">Sign In!</Typography>
          </Link>
      </p>    
      </Paper>
  )
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}


export default Register

