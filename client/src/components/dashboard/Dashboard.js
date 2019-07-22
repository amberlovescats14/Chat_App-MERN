import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import DashboardFunction from './DashboardFunction'
import ExperienceDashboard from '../../containers/ExperienceDashboardContainer'
import EducationDashboard from '../../containers/EducationDashboardContainer'
import PropTypes from 'prop-types'

const Dashboard = (props) => {
  useEffect(()=> {
    props.getCurrentProfile()
  },[])
  return (
    props.auth.loading && props.profile === null ? <Spinner/> : <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      {/* //This will be here weather the person has a profile or not */}
      <p className="lead">
      <i className="fas fa-user"></i>  Welcome {' '}
      {props.auth.user && props.auth.user.name}</p>
      {/* This wills show weather the user has a profile or not */}
      {props.profile !== null ?
      <Fragment>
        <DashboardFunction/>
        <ExperienceDashboard />
        <EducationDashboard/>
      </Fragment> :
      <Fragment>
        <p>You have not setup a profile, please add some info!</p>
        <Link to='/create-profile' className="btn btn-primary my-1">
        Create Profile</Link>
      </Fragment>}
    </Fragment>
  )
}

Dashboard.propTypes = {
 getCurrentProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 profile: PropTypes.object.isRequired
}

export default Dashboard
