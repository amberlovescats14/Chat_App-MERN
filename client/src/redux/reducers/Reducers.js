import { combineReducers } from 'redux'



export const setAlert = (state = [], action) => {
 

  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
}



export default combineReducers({
  alert: setAlert
})

//template 
//   {
//     id: 1,
//     msg:`Passwords donnot match`,
//      alertType: `Danger`
//   }
