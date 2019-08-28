import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Button, Paper, Typography } from '@material-ui/core'


const Register = (props) => {
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
    <Paper className="container mx-4">
    <Typography variant="h2" color="primary">Sign Up</Typography>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" 
      onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} 
          onChange={e => onChange(e)}
           />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" 
          value={email}
          onChange={e => onChange(e)}
          />
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
            
            value={password}
            onChange={e => onChange(e)}
           
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            
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

