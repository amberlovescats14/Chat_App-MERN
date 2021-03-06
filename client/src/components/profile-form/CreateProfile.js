import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CreateProfile = props => {
  //THIS COMPONENT is called CreateProfile and the action is called createProfile
  const [ formData, setFormData ] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    twitter: '',
    facebook: '',
    youtube: '',
    instagram: ''
  })
  //destructuring from formData
  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    youtube,
    instagram
  } = formData
  // In this instance of useState I set the default value to false
  const [ displaySocialInputs, toggleSocialInput ] = useState(false)
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.createProfile(formData, props.history, true)
  }
  return (
    <Fragment>
       {/* <nav className="navbar bg-dark">
      <h1>
        <Link to='/'><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
        <li><Link to='/profiles'>Developers</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li>
          |
          <Link to='/dashboard' title="Dashboard"
            ><i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span></Link
          >
        </li>
        <li>
          <Link to='/login' title="Logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span></Link
          >
        </li>
      </ul>
    </nav> */}
    <section className="container">
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form"
      onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <select name='status' value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Status</option>
            <option value="Professional Runner">Professional</option>
            <option value="Advanced Runner">Advanced</option>
            <option value="Intermediate Runner">Intermediate</option>
            <option value="Beginner Runner">Beginner</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Team" name="company" 
          value={company} 
          onChange={e => onChange(e)}/>
          <small className="form-text"
            >If you are apart of a team</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" 
          value={website}
          onChange={e => onChange(e)}/>
          <small className="form-text"
            >Could be your own personal website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" 
                    value={location}
                    onChange={e => onChange(e)}/>
          <small className="form-text"
            >City & state suggested (eg. San Antonio, TX)</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" 
                    value={skills}
                    onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please use comma separated values </small
          >
        </div>
 
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"
                    value={bio}
                    onChange={e => onChange(e)}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
          onClick={()=> toggleSocialInput(!displaySocialInputs)}
          type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
          {displaySocialInputs &&
          <Fragment>
        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" 
                    value={twitter}
                    onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" 
                    value={facebook}
                    onChange={e => onChange(e)}/>
        </div>

        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube" 
                    value={youtube}
                    onChange={e => onChange(e)}/>
        </div>


        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" 
                    value={instagram}
                    onChange={e => onChange(e)}/>
        </div>
          </Fragment>}
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="dashboard">Go Back</Link>
      </form>
      </section>
    </Fragment>
  )
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
}

export default CreateProfile
