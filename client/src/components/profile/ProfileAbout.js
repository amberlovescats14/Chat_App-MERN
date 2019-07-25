import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = props => {
  const { bio, skills} = props.profile
  const { name } = props.profile.user
  return (
    <Fragment>
              <div className="profile-about bg-light p-2">
        {bio && (
          <Fragment>
          <h2 className="text-primary">{name.trim().split(' ')[0]}s Bio</h2>
          <p>{bio}</p>
          <div className="line"></div>
          </Fragment>
        )}
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
        {skills.map((skill, i)=> (
          <div className="p-1" key={i}>
          <i className="fas fa-check"></i> {skill}
          </div>
        ))}
          </div>
        </div>
    </Fragment>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileAbout
