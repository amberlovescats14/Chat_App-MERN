import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileTop = props => {
  const { status, company, location, website, social} = props.profile;
  const { name, avatar} = props.profile.user
  return (
    <Fragment>
       <div className="profile-top bg-primary p-2">
          <img
            className="round-img my-1"
            src={avatar}
            alt="avatar"
          />
          <h1 className="large">{name}</h1>
          <p className="lead">{status}
          {company && <span> @ {company}</span>}</p>
          <p>{location && <span> {location}</span>}</p>
          <div className="icons my-1">
          {
            website && (
            <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x"></i>
            </a>
            )
          }
          {
            social && social.twitter && (
            <a href={`http://${social.twitter}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            )
          }
          {
            social && social.facebook && (
            <a href={`http://${social.facebook}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            )
          }
          {
            social && social.linkedin && (
            <a href={`http://${social.linkedin}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            )
          }
          {
            social && social.linkedin && (
             <a href={`http://${social.linkedin}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
            )
          }
          {
            social && social.instagram && (
            <a href={`http://${social.instagram}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            )
          }
          </div>
          </div>
    </Fragment>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileTop
