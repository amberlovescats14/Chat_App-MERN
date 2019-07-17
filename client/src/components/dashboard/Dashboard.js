import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Dashboard = (props) => {
  useEffect(()=> {
    props.getCurrentProfile()
  },[])
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

Dashboard.propTypes = {
 getCurrentProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 profile: PropTypes.object.isRequired
}

export default Dashboard
