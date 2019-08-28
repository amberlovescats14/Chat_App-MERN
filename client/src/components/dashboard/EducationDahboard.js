import React, { Fragment } from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { Paper, Button, Typography } from '@material-ui/core'

const styles = {
  paper: {
    width: 'auto',
    padding: '2%'
  },
  heading: {
    margin: '10px 0 10px 0'
  }
}

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
        <Button variant="contained" color="secondary"
        onClick={()=> deleteEducation(exp._id)}>Delete</Button>
      </td>
    </tr>
  ))

  return (
    <Paper style={styles.paper}>
      <Paper>
      <Typography variant="h5" color="primary">Training Credentials</Typography>
      <table className="table">
      <thead>
        <tr>
          <th className="text-dark">Team</th>
          <th className="hide-sm text-dark">Location</th>
          <th className="hide-sm text-dark">Years</th>
          <th />
        </tr>
      </thead>
      <tbody className="tableBody">{educations}</tbody>
      </table>
      </Paper>
    </Paper>
  )
}

EducationDashboard.propTypes = {
  education : PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
}

export default EducationDashboard
