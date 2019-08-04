import React from 'react'
import { Link } from 'react-router-dom'

const DashboardFunction = () => {
  return (
    <div className="dash-buttons">
        <Link to="edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i>
         Edit Profile</Link>
        <Link to="add-experience" className="btn btn-light">
        <i class="fas fa-running text-primary"></i> 
                {' '} Add Experience</Link>
        <Link to="add-education" className="btn btn-light">
        <i className="fas fa-users text-primary"></i>
        {' '}          Add Training Groups
          </Link>
      </div>
  )
}

export default DashboardFunction
