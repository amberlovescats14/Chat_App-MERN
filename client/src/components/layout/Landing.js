import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './landing.css'
import PropTypes from 'prop-types';

const Landing = ({isAuthenticated}) => {
  console.log(`ISAUTHENTICATED:`, isAuthenticated)
  if(isAuthenticated) {
    console.log(`YES`)
    return <Redirect to='/dashboard'/>
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large text-white"
          style={{color:'white'}}>Run With Confidence!</h1>
          <p className="lead">
            Focus On Your Goal, Dont Look In Any Direction But Ahead.
          </p>
          <div className="buttons">
            <Link to='/register' className="btn btn-primary one">Sign Up</Link>
            <Link to='/login' className="btn btn-light two">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

export default Landing

//RACF
