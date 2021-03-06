import React, { Fragment, useState,  useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Paper, Button, Typography } from '@material-ui/core'

const styles = {
  paper: {
    padding: '5%',
    width: '60%',
    margin: '40px auto 0 auto'
  },
  button: {
    marginLeft: '10px'
  },
  secondButton: {
    background: '#f4f4f4'
  }
}
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
  }, [profile.loading]);



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
  return (
    <Paper style={styles.paper}>
    <section className="container">
      <Typography variant="h2" color="primary">
        Edit Your Profile
      </Typography>
      <p className="lead">
        <i className="fas fa-user"></i> Tell us about yourself!
      </p>
      <small>* = required field</small>
      <form className="form"
      onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <select name='status' value={status} onChange={e => onChange(e)}>
            <option value="0">* What Kind of Runner are you?</option>
            <option value="Professional Runner">Professional</option>
            <option value="Advanced Runner">Advanced</option>
            <option value="Intermediate Runner">Intermediate</option>
            <option value="Begginer Runner">Begginer</option>
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
          <Button style={styles.secondButton} variant="text"
          onClick={()=> toggleSocialInput(!displaySocialInputs)}
          type="button" className="btn btn-light">
            Add Social Network Links
          </Button>
          <span>  *Optional</span>
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
        
        <Button type="submit" variant="contained" style={styles.button}color="primary">Submit</Button>
        <Link to="dashboard">
        <Button variant="contained" color="primary" style={styles.button}> Go Back</Button>
        </Link>
      </form>
      </section>
    </Paper>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
}

export default EditProfile
