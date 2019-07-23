import React, { Fragment, useEffect} from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Profile = props => {
  const { getProfileById, profile, auth, match } = props
  useEffect(()=> {
    getProfileById(match.params.id)
  },[getProfileById])
  return (
    <div>
      profile
    </div>
  )
}

Profile.propTypes = {
  getProfileById : PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default Profile
