import uuid from 'uuid'
import axios from 'axios'
import settingAuthToken from '../../util/setAuthToken'
import { TabContainer } from 'react-bootstrap';


export const setAlert = (msg, alertType, timeout = 2000) => dispatch => {
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
export const getProfiles = () => async (dispatch , getState)=> {
  //clear all before seeing all profiles
  dispatch({
    type: `CLEAR_PROFILE`
  })

  try {
    
    const res = await axios.get('/api/profile')
    const { getCurrentProfile } = getState()
    //PLURAL PROFILES
    dispatch({
      type: `GET_PROFILES`,
      payload: res.data,
      profiles: getCurrentProfile.profiles
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
    dispatch(setAlert('Team Added.', 'success'))
 
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

    dispatch(setAlert('Experience Removed', 'success'))
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

    dispatch(setAlert('Team Removed', 'success'))
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

//! getting posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts')

    dispatch({
      type: `GET_POSTS`,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: {err: err}
    })
  }
}

//! ADDING A LIKE

export const addLike = _id => async (dispatch, getState) => {
  try {
    const res = await axios.put(`/api/posts/like/${_id}`);
    const { getPosts } = getState()
    dispatch({
      type: `UPDATE_LIKES`,
      payload: {
        _id,
        likes: res.data,
        getPosts
      }
    });
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: { 
        err: err
         }
    });
  }
};


//! REMOVE A LIKE
export const removeLike = (_id) => async (dispatch , getState)=> {
  
  try {
    const res = await axios.put(`/api/posts/unlike/${_id}`)
    const { getPosts } = getState()

    dispatch({
      type: `UPDATE_LIKES`,
      payload: {
        _id,
        likes: res.data,
        getPosts
      }
    })
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}

//! DELETE Post
export const deletePost = id => async (dispatch, getState) => {
  try {
     await axios.delete(`/api/posts/${id}`)
     const { getPosts } = getState()
    dispatch({
      type: `DELETE_POST`,
      payload: { 
        id,
        posts: getPosts.posts
        }
    })
    dispatch(
      setAlert(`Post Removed`, 'success')
    )
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: {
        msg: err.response,
        status: err.response.status
      }
    })
  }
}

//! ADD Post
export const addPost = formData => async (dispatch, getState) => {
  const { getPosts } = getState()
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  console.log(`HELLO`)
try {
     const res = await axios.post('/api/posts', formData, config)
    dispatch({
      type: `ADD_POST`,
      payload: {
        oldPosts: getPosts.posts,
        newPosts: res.data
      }
    })
    dispatch(
      setAlert(`Post Created`, 'success')
    )
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: {
        msg: err.response,
        status: err.response.status
      }
    })
  }
}
//!ADD COMMENT. SINGLE POST

export const addComment = (postId, formData) => async (dispatch, getState) => {
  const { getPosts } = getState()
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
try {
     const res = await axios.post(`/api/posts/comment/${postId}`, formData, config)
    dispatch({
      type: `ADD_COMMENT`,
      payload: {
        newComment: res.data,
        originalPost: getPosts.post
      }
    })
    dispatch(
      setAlert(`Comment Added`, 'success')
    )
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: {
        msg: err.response,
        status: err.response.status
      }
    })
  }
}


//!DELETTE COMMENT. SINGLE POST
export const deleteComment = (postId, commentId) => async (dispatch, getState) => {
  const { getPosts } = getState()

try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`)
    dispatch({
      type: `REMOVE_COMMENT`,
      payload: {
        commentId,
        originalPost: getPosts.post
      }
    })
    dispatch(
      setAlert(`Comment Removed`, 'success')
    )
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: {
        msg: err.response,
        status: err.response.status
      }
    })
  }
}



//!GET SINGLE POST
//! getting posts
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${id}`)

    dispatch({
      type: `GET_POST`,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: `POST_ERROR`,
      payload: {err: err}
    })
  }
}

//!EVENTBRITE get runs
export const getRuns = (users) => {
  return (dispatch) => {
    fetch('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=6307+Donely+pl%2C+san+antonio%2Ctx&location.within=20mi&categories=108&subcategories=8001&start_date.range_start=2019-08-01T01%3A01%3A00Z&start_date.range_end=2019-08-31T01%3A01%3A00Z&token=KXBIEIL3SS3GWKDXSU7F')
    .then(response => response.json())
     .then(runs => {
       dispatch({
         type: "SET_RUNS",
         value: runs.events
       })
         
         })
  }
}
