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
    return {
      ...state,
      profile: payload,
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
    default: 
    return state
  }
}


export default combineReducers({
  alert: setAlert,
  register: authFunc,
  getCurrentProfile
})

//template 
//   {
//     id: 1,
//     msg:`Passwords donnot match`,
//      alertType: `Danger`
//   }
