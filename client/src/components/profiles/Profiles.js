import React, { Fragment, useEffect} from 'react'
import Spinner from '../layout/Spinner'
import ProfileItem from '../../components/profiles/ProfilesItems'
import PropTypes from 'prop-types'

const Profiles = props => {
  const { profiles, loading, getProfiles } = props
  useEffect(()=> {
    getProfiles()
  },[getProfiles])
  return (
    <div className="container mx-4 postsOutside">
      {loading ? <Spinner/> : 
    <Fragment>
      <h1 className="large text-primary">Runners</h1>
      <p className="lead">
      <i className="fab fa-connectdevelop"></i> Browse and connect with fellow runners
      </p>
      <div className="profiles">
      {profiles.length > 0 ? (
        profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile}/>
        ))
      ) : <h4>No Profiles Found...</h4>}
      </div>
      </Fragment>}
    </div>
  )
}

Profiles.propTypes = {
  profiles: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
  
}

export default Profiles
