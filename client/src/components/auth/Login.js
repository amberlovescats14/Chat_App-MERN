import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Paper, Typography, Button, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '70%',
    margin: '10% auto ',
    padding: '5%',
    background: '#f5f5f5'
  },
  input: {
    margin: theme.spacing(1),
    width: '90%'
  },
}));

const Login = (props) => {
  const classes = useStyles()
  //USE STATE
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  //DESTRUCTURE
  const { email, password } = formData
  // UPDATE STATE
  const onChange = e =>  setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault()
    props.loginFunc(email, password)
  }
  //Redirecting if logged in
  if(props.isAuthenticated){
    return <Redirect to="/dashboard" />
  }
  return (
    <Paper className={classes.container}>
    <Typography variant="h2" color="primary">LogIn</Typography>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" 
      onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <Input type="email" placeholder="Email Address" name="email" 
          value={email}
          className={classes.input}
          onChange={e => onChange(e)}
          required/>
          
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
            minLength="6"
            value={password}
            className={classes.input}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <Button type="submit" variant="contained" color="primary" value="Login">Login</Button>
      </form>
      <p className="my-1">
        Don't have an account? 
        <Link to='/register' >
        <Typography color="primary">Sign Up!</Typography></Link>
      </p>    
      </Paper>
  )
}

  Login.prototype = {
    loginFunc: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }


export default Login


