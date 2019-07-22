import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfilesItems = props => {
  const { profile: { user:{ _id, name, avatar,}},
          profile: {status,company, location, skills }
        } = props
        console.log(props)
  return (
    <div key={_id} className="profile bg-light">
      <img className="round-img" src={avatar} alt="avatar"/>
      <div>
        <h2>{name}</h2>
        <p>{status} 
        {company && <span> at {company}</span>}
        </p>
      </div>
    </div>
  )
}

ProfilesItems.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfilesItems
