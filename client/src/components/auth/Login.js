import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


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
    <div className="container mx-4">
    <h1 className="large text-info">LogIn</h1>
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
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? 
        <Link to='/register'>Sign Up!</Link>
      </p>    
      </div>
  )
}

  Login.prototype = {
    loginFunc: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }


export default Login


