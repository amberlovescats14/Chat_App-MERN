import Login from '../components/auth/Login'
import { connect } from 'react-redux'
import { setAlert, authFunc, loginFunc} from '../redux/actions/Actions'


const mapStateToProps = (state) => ({
  isAuthenticated: state.register.isAuthenticated
})

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
  register: (name, email, password)=> dispatch(authFunc(name, email, password)),
  loginFunc : (email, password) => dispatch(loginFunc(email, password))
})
// const mapStateToProps = (state) => ({
//   //gives us everything
//   // auth: state.auth
//   //or
//   isAuthenticated: state.auth.isAuthenticated
// })

export default connect(mapStateToProps, mapDispatchToProps)(Login)