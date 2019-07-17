import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PrivateRoute = ({component: Component, auth:{isAuthenicated, loading} , ...rest}) => (
  //if NOT AUTHENTICATED AND NOT LOADING
  console.log(...rest)
  // <Route {...rest} 
  // render={props => 
  // !isAuthenicated && !loading ? (
  //   <Redirect to='/login'/>
  // ): (
  //   <Component {...props}/>
  // )}/>
)
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.register
})

export default connect(mapStateToProps)(PrivateRoute)
