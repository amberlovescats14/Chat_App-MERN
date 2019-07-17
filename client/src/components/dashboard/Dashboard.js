import React, { Fragment, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Dashboard = (props) => {
  console.log(`DASHBOARD:`, props.profile)
  useEffect(()=> {
    props.getCurrentProfile()
  },[])
  return (
    props.auth.loading && props.profile === null ? <Spinner/> : <Fragment>
      TEST
    </Fragment>
  )
}

Dashboard.propTypes = {
 getCurrentProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 profile: PropTypes.object.isRequired
}

export default Dashboard
