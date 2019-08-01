import React, { Fragment, useState,  useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const EditProfile = (props) => {
  const { getCurrentProfile, createProfile, profile, history} = props
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

  // In this instance of useState I set the default value to false
  const [ displaySocialInputs, toggleSocialInput ] = useState(false)
      // destructuring from formData
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

  // this is like a component did mount 
  useEffect(() => {
    getCurrentProfile();
    // This will make the form pre-filled with current data
    setFormData({
      company: profile.loading || !profile.company ? '' : profile.company,
      website: profile.loading || !profile.website ? '' : profile.website,
      location: profile.loading || !profile.location ? '' : profile.location,
      status: profile.loading || !profile.status ? '' : profile.status,
      skills: profile.loading || !profile.skills ? '' : profile.skills.join(','),
      bio: profile.loading || !profile.bio ? '' : profile.bio,
      twitter: profile.loading || !profile.social ? '' : profile.social.twitter,
      facebook: profile.loading || !profile.social ? '' : profile.social.facebook,
      youtube: profile.loading || !profile.social ? '' : profile.social.youtube,
      instagram: profile.loading || !profile.social ? '' : profile.social.instagram
    });
  }, [profile.loading, getCurrentProfile, profile]);



  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createProfile(formData, history, true)
  }
  console.log(`EDIT PROFILE: FORMDATA:`, formData)
  console.log(`EDIT PROPS:`, props.profile.user)
  return (
    <Fragment>
       {/* <nav className="navbar bg-dark">
      <h1>
        <Link to='/'><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
        <li><Link to='/developers'>Developers</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li>
          |
          <Link to='/dashboard' title="Dashboard"
            ><i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span></Link
          >
        </li>
        <li>
          <a href="login.html" title="Logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span></a
          >
        </li>
      </ul>
    </nav> */}
    <section className="container">
      <h1 className="large text-primary">
        Edit Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Tell us about yourself!
      </p>
      <small>* = required field</small>
      <form className="form"
      onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <select name='status' value={status} onChange={e => onChange(e)}>
            <option value="0">* What Kind of Runner are you?</option>
            <option value="Developer">Professional</option>
            <option value="Junior Developer">Advanced</option>
            <option value="Senior Developer">Intermediate</option>
            <option value="Manager">Begginer</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" 
          value={company} 
          onChange={e => onChange(e)}/>
          <small className="form-text"
            >Are you apart of a team?</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" 
          value={website}
          onChange={e => onChange(e)}/>
          <small className="form-text"
            >Personal Website</small
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
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
}

export default EditProfile
