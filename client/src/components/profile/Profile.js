import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Profile = props => {
  const { getProfileById, profile, auth, match } = props
  useEffect(()=> {
    getProfileById(match.params.id)
  },[getProfileById])
  return (
    <Fragment>
      {profile === null || profile.loading ? <Spinner/> : 
    <Fragment>
      <Link to='/profiles' className="btn btn-light">
      Back to Profiles</Link>
      </Fragment> }
    </Fragment>
  )
}

Profile.propTypes = {
  getProfileById : PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default Profile
