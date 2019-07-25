import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import PropTypes from 'prop-types'

const Profile = props => {
  const { getProfileById, profile, auth, match } = props

  useEffect(()=> {
    getProfileById(match.params.id)
  },[getProfileById, match.params.id])
  return (
    <Fragment>
      {profile === null || profile.loading ? <Spinner/> : 
    <Fragment>
      <Link to='/profiles' className="btn btn-light">
      Back to Profiles</Link>
      {auth.isAuthenticated && 
        auth.loading  === false && 
          auth.user._id === profile.user._id && (
            <Link to='/edit-profile' className="btn btn-dark">
            Edit Profile
            </Link>
          )}
          <div class="profile-grid my-1">
          <ProfileTop profile={profile}/>
          <ProfileAbout profile={profile}/>
          <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {profile.experience.length > 0 ?
          (
            <Fragment>
              {profile.experience.map(exp => {
                console.log(exp)
                return (
                  <ProfileExperience key={exp._id} experience={profile.experience}/>
                )
              })}
            </Fragment>
          ):
          (<h4>No Experiene Credentials</h4>)}
          </div>
          </div>
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
