import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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
    <div className="container mx-4 my-6">
      <h1 className="large text-primary">
       Add A Team
      </h1>
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
                    }}/> {' '}Current School</p>
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
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>

    </div>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
}

export default AddEducation
