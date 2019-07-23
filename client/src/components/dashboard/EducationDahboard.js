import React, { Fragment } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'


const EducationDashboard = props => {
  const { education, deleteEducation } = props

  const educations = education.map(exp => (
    <tr key={exp._id}>
      <td>{exp.school}</td>
      <td className="hide-sm">{exp.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -
        {exp.to === null ? (' Now ') :
         (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)}
      </td>
      <td>
        <button className="btn btn-danger"
        onClick={()=> deleteEducation(exp._id)}>Delete</button>
      </td>
    </tr>
  ))

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
      <thead>
        <tr>
          <th>School</th>
          <th className="hide-sm">Degree</th>
          <th className="hide-sm">Years</th>
          <th />
        </tr>
      </thead>
      <tbody>{educations}</tbody>
      </table>
    </Fragment>
  )
}

EducationDashboard.propTypes = {
  education : PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
}

export default EducationDashboard
