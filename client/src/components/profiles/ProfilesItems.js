import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfilesItems = props => {
  const { profile: { user:{ _id, name, avatar,}},
          profile: {status,company, location, skills }
        } = props
  return (
    <div key={_id} className="profile bg-light">
      <img className="round-img" src={avatar} alt="avatar"/>
      <div>
        <h2>{name}</h2>
        <p>{status} 
        {company && <span> at {company}</span>}
        </p>
        <p className="my-1">
        {location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
        View Profile</Link>
        <ul>
          {skills.slice(0,4).map((skill, i)=> {
           return (
              <li key={i} className="text-primary" >
              <i className="fas fa-check"></i>
              {' '}{skill}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

ProfilesItems.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfilesItems
