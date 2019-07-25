import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const ProfileExperience = props => {
  const { company, title, location, current, to, from, description} = props
  console.log(`TITLE: `, from)
  return (
    <div>
      <h3 className="textt-darl">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> - 
        {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>{title}
      </p>
      <p>
        <strong>Description: </strong>{description}
      </p>
    </div>
  )
}

ProfileExperience.propTypes = {
  experienced : PropTypes.array.isRequired,
}

export default ProfileExperience
