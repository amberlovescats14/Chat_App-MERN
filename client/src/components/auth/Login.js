import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Paper, Typography, Button } from '@material-ui/core'


const Login = (props) => {
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
    <Paper className="container mx-4 ">
    <Typography variant="h2" color="primary">LogIn</Typography>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" 
      onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" 
          value={email}
          onChange={e => onChange(e)}
          required/>
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
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


