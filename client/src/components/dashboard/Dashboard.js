import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import DashboardFunction from './DashboardFunction'
import ExperienceDashboard from '../../containers/ExperienceDashboardContainer'
import EducationDashboard from '../../containers/EducationDashboardContainer'
import PropTypes from 'prop-types'
import { Paper, Button, Typography } from '@material-ui/core'

const Dashboard = (props) => {
  const { getCurrentProfile } = props
  useEffect(()=> {
    getCurrentProfile()
  },[getCurrentProfile])
  return (
    props.auth.loading && props.profile === null ? <Spinner/> : <Paper className="container mx-4 dashboard "
    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography variant="h2" color="primary">Profile</Typography>
      {/* //This will be here weather the person has a profile or not */}
      <Typography variant="h4">
      <i className="fas fa-user" ></i>  Welcome {' '}
      {props.auth.user && props.auth.user.name}</Typography>
      <br/>
      {/* This wills show weather the user has a profile or not */}
      {props.profile !== null ?
      <Fragment>
        <DashboardFunction/>
        <ExperienceDashboard />
        <EducationDashboard/>

        <div className="my-2">
        <Button variant="contained" color="secondary"
        onClick={()=> props.deleteAccount()}>
        <i className="fas fa-user-minus"></i> Delete My Account
        </Button>
        </div>
      </Fragment> :
      <Fragment>
        <p>You have not setup a profile, please add some info!</p>
        <Link to='/create-profile' className="btn btn-primary my-1">
        Create Profile</Link>
      </Fragment>}
    </Paper>
  )
}

Dashboard.propTypes = {
 getCurrentProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 profile: PropTypes.object.isRequired,
 deleteAccount: PropTypes.func.isRequired,
}

export default Dashboard
