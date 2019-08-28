import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Paper, Button, Typography } from '@material-ui/core'

const AddExperience = props => {
  const { addExperience, history } = props
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    from: '',
    description: ''
  })

  const styles = {
    paper: {
      padding: '5%',
      width: '60%',
      margin: '40px auto 0 auto'
    },
    button: {
      marginLeft: '10px'
    }
  }

  // const [toDateDisabled, toggleDisabled] = useState(false)

  const { 
    title,
    location,
    from,
    description} = formData

  const onChange = (e )=> {
    setFormData({
      ...formData,
     [e.target.name]: e.target.value
     
    })
  }

  return (
    <Paper style={styles.paper}>
      <Typography variant="h2" color="primary">
       Add An Experience
      </Typography>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Tell us about any races that you have been participated in
      </p>
      <small>* = required field</small>
      <form className="form"
      onSubmit={e => {
        e.preventDefault()
        addExperience(formData, history, true)
      }}>
        <div className="form-group">
          <input type="text" placeholder="* Race" name="title" 
          value={title}
          onChange={e => onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location"
                    value={location}
                    onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <h4>Date</h4>
          <input type="date" name="from" 
                    value={from}
                    onChange={e => onChange(e)}/>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Description"
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <Button 
        type="submit" style={styles.button}
       variant="contained" color="primary" >Submit</Button>
        <Link  to="/dashboard">
        <Button 
        style={styles.button} variant="contained" color="primary">Go Back</Button>
        </Link>
      </form>

    </Paper>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
}

export default AddExperience
