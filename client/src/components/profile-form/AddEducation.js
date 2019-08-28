import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Paper, Button, Typography } from '@material-ui/core'

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


const AddEducation = props => {
  const { addEducation, history } = props
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const [toDateDisabled, toggleDisabled] = useState(false)

  const { 
    school,
    degree,
    fieldofstudy,
    from,
    to, 
    current, 
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
       Add A Team
      </Typography>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Tell us about your training experience
      </p>
      <small>* = required field</small>
      <form className="form"
      onSubmit={e => {
        e.preventDefault()
        addEducation(formData, history, true)
      }}>
        <div className="form-group">
          <input type="text" placeholder="*Team or Organization" name="school" 
          value={school}
          onChange={e => onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Location" name="degree" 
                    value={degree}
                    onChange={e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="5k, 10k, Half or Full Marathon" name="fieldofstudy"
                    value={fieldofstudy}
                    onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" 
                    value={from}
                    onChange={e => onChange(e)}/>
        </div>
         <div className="form-group">
          <p><input type="checkbox" name="current" 
                    checked={current}
                    value={current}
                    onChange={e => {
                      setFormData({...formData, current: !current })
                      toggleDisabled(!toDateDisabled)
                    }}/> {' '}Current Team</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" 
          disabled={toDateDisabled ? 'disabled': ''}
                    value={to}
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
        <Button type="submit" variant="contained" style={styles.button}color="primary">Submit</Button>
        <Link to="/dashboard">
        <Button 
        style={styles.button} variant="contained" color="primary">Go Back</Button>
        </Link>
      </form>

    </Paper>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
}

export default AddEducation
