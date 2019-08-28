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

const ExperienceDashboard = props => {
  const { experience, deleteExperience } = props

  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> 
      </td>
      <td>
        <Button variant="contained" color="secondary"
        onClick={()=> deleteExperience(exp._id)}>Delete</Button>
      </td>
    </tr>
  ))

  return (
    <Paper style={styles.paper}>
      <Paper>
      <Typography variant="h5" color="primary" style={styles.heading}>Experience Credentials</Typography>
      <table className="table">
      <thead>
        <tr>
          <th className="text-dark">Race</th>
          <th className="hide-sm text-dark">Date</th>
          <th className="hide-sm"></th>
        </tr>
      </thead>
      <tbody className="tableBody">{experiences}</tbody>
      </table>
      </Paper>
    </Paper>
  )
}

ExperienceDashboard.propTypes = {
  experience : PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
}

export default ExperienceDashboard
