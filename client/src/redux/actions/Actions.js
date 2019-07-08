import uuid from 'uuid'

export const getAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {msg, alertType, id}
  })

}

//THIS IS WHAT its going to look like
//   {
//     id: 1,
//     msg:`Passwords donnot match`,
//     alertType: `Danger`
//   }
