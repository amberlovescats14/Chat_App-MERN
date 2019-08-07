import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const AddExperience = props => {
  const { addExperience, history } = props
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    from: '',
    description: ''
  })

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
    <div className="container mx-4 my-6">
      <h1 className="large text-primary">
       Add An Experience
      </h1>
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
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>

    </div>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
}

export default AddExperience
