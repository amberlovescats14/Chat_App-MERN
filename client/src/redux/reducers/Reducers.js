import { combineReducers } from 'redux'



//! Check form validation
export const setAlert = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return [...state, action.payload];
    case 'REMOVE_ALERT':
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
}

//!AUTH
const authInitialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}

export const authFunc = (state = authInitialState, action) => {
  switch(action.type){
    case `USER_LOADED`:
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: action.payload
    }
    case 'REGISTER_SUCCESS': 
    case `LOGIN_SUCCESS`:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case 'REGISTER_FAIL':
    case `AUTH_ERROR`:
    case `LOGIN_FAIL`:
    case `LOGOUT`:
    case `ACCOUNT_DELETED`:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
}

//! PROFILE REDUCER
const profileState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}
export const getCurrentProfile = (state = profileState, action) => {
  const { type, payload } = action
  switch(type){
    case `GET_PROFILE`: 
    case `UPDATE_PROFILE`:
    return {
      ...state,
      profile: payload,
      loading: false
    }
    //PLURAL
    case `GET_PROFILES`: 
    return {
      ...state,
      profiles: payload,
      loading: false
    }
    case `PROFILE_ERROR`:
    return {
      ...state,
      error: payload,
      loading: false
    }
    case `CLEAR_PROFILE`:
    return {
      ...state,
      profile: null,
      repos: [],
      loading: false
    }
    case `GET_REPOS`: 
    return {
      ...state,
      repos: payload,
      loading: false
    }
    default: 
    return state
  }
}


//! This is for post
const postInitialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}

export const getPosts = (state= postInitialState, action) => {
  const { type, payload } = action
  switch(type){
    case `GET_POSTS`: 
    return {
      ...state,
      posts: payload,
      loading: false
    }
    case `POST_ERROR`:
    return {
      error: payload,
      loading: false
    }
    case `UPDATE_LIKES`:
      return {
        ...state,
        posts: state.getPosts.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
    default: return state
  }
}




export default combineReducers({
  alert: setAlert,
  register: authFunc,
  getCurrentProfile,
  getPosts
})


