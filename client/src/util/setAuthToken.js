import axios from 'axios'

export const settingAuthToken = token => {
  if(token){
   return axios.defaults.headers.common['x-auth-token'] =token;
  } else {
     return delete axios.defaults.headers.common['x-auth-token']
  }
}

export default settingAuthToken