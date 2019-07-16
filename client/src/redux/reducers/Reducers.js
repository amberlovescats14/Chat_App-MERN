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






export default combineReducers({
  alert: setAlert,
  register: authFunc
})

//template 
//   {
//     id: 1,
//     msg:`Passwords donnot match`,
//      alertType: `Danger`
//   }
