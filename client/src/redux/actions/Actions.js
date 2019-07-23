import uuid from 'uuid'
import axios from 'axios'
import settingAuthToken from '../../util/setAuthToken'


export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: 'SET_ALERT',
    payload: {msg, alertType, id}
  });
  setTimeout(()=>  dispatch({
    type: `REMOVE_ALERT`,
    payload: id
  }), timeout)
}
//THIS IS WHAT its going to look like
//   {
//     id: 1,
//     msg:`Passwords donnot match`,
//     alertType: `Danger`
//   }

//!AUTH
// REGISTER_SUCCESS 
// REGISTER_FAIL
export const authFunc = ({name, email, password}) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({name, email, password})
    try {
      const res = await axios.post('/api/users', body, config)

      dispatch({
        type: `REGISTER_SUCCESS`,
        payload: res.data
      })
      dispatch(loadUser())
    } catch (err) {
      const errors = err.response.data.errors;
      if(errors){
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }

      dispatch({
        type: `REGISTER_FAIL`
      })
    }

}

//!actions AUTH
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    settingAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('/api/auth')

    dispatch({
      type: `USER_LOADED`,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: `AUTH_ERROR`
    })
  }
}

//LOGIN USER
export const loginFunc = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({email, password})
  try {
    const res = await axios.post('/api/auth', body, config)

    dispatch({
      type: `LOGIN_SUCCESS`,
      payload: res.data
    })
    dispatch(loadUser())
  } catch (err) {
    const errors = err.response.data.errors;
    if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: `LOGIN_FAIL`
    })
  }

}


//!LOG_OUT && CLEAR token and profile

export const logout = () => dispatch => {
  dispatch({
    type: `LOGOUT`
  })
  dispatch({
    type: `CLEAR_PROFILE`
  })
}

//!GETTING PROFILE 
//This will get the current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me')
    dispatch({
      type: `GET_PROFILE`,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}


//! GET ALL PROFILES
export const getProfiles = () => async dispatch => {
  //clear all before seeing all profiles
  dispatch({
    type: `CLEAR_PROFILE`
  })

  try {
    const res = await axios.get('/api/profile')
    //PLURAL PROFILES
    dispatch({
      type: `GET_PROFILES`,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}
//! GET PROFILE BY ID
export const getProfileById = (userId) => async dispatch => {
  
  try {
    const res = await axios.get(`/api/profile/user/${userId}`)
    //PLURAL PROFILES
    dispatch({
      type: `GET_PROFILE`,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//! GET GITHUB REPOS
export const getGithubRepos = (username) => async dispatch => {
  
  try {
    const res = await axios.get(`/api/profile/github/${username}`)
    //PLURAL PROFILES
    dispatch({
      type: `GET_REPOS`,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}
//! CREATES OR UPDATES THE CURRENT PROFILE
// This action takes in history so that we can redirect after editing or creating and set the false value to know when to redirect
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    //post request to api/profile
    const res = await axios.post('/api/profile', formData, config)
    console.log(`RES`, res.data)
    dispatch({
      type: `GET_PROFILE`,
      payload: res.data
    });
    dispatch(setAlert(edit ? `Profile Updated!` : `Profile Created!`, 'success'))

    //Only if we are creating a new profile will we redirect. Not editing
    //! This started out as if !edit but I had to change it to edit  because Im sending in true at the end
    if(edit) {
      history.push('/dashboard')
    }
  } catch (err) {
  
    //This will check if we forgot the fields
    const errors = err.response.data.errors;
    if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
} 

//!PROFILE ACTION
//!Add experience
export const addExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    //post request to api/profile
    const res = await axios.put('/api/profile/experience', formData, config)
    console.log(`RES`, res.data)
    dispatch({
      type: `UPDATE_PROFILE`,
      payload: res.data
    });
    dispatch(setAlert('Experience Added.', 'success'))
 
      history.push('/dashboard')
    
  } catch (err) {
    //This will check if we forgot the fields & set errors
    const errors = err.response.data.errors;
    if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//!PROFILE ACTION
//! add education
export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    //post request to api/profile
    const res = await axios.put('/api/profile/education', formData, config)
    console.log(`RES`, res.data)
    dispatch({
      type: `UPDATE_PROFILE`,
      payload: res.data
    });
    dispatch(setAlert('Education Added.', 'success'))
 
      history.push('/dashboard')
    
  } catch (err) {
    //This will check if we forgot the fields & set errors
    const errors = err.response.data.errors;
    if(errors){
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//!DELETE EXPERIENCE
export const deleteExperience = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`)

    dispatch({
      type: `UPDATE_PROFILE`,
      payload: res.data
    })

    dispatch(setAlert('Experienced Removed', 'success'))
  } catch (err) {
    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//! DELETE EDUCATION

export const deleteEducation = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`)

    dispatch({
      type: `UPDATE_PROFILE`,
      payload: res.data
    })

    dispatch(setAlert('Education Removed', 'success'))
  } catch (err) {
    dispatch({
      type: `PROFILE_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//!DELETE FULL ACCOUNT!!!!

export const deleteAccount = () => async dispatch => {
  if(window.confirm('Are you sure? This cannot be undone!')){
    try {
      await axios.delete(`/api/profile`)
  
      dispatch({
        type: `CLEAR_PROFILE`,
      })
      dispatch({
        type: `ACCOUNT_DELETED`
      })
  
      dispatch(setAlert('Your account has been deleted :('))
    } catch (err) {
      dispatch({
        type: `PROFILE_ERROR`,
        payload: {msg: err.response.statusText, status: err.response.status}
      })
    }
  }

}




