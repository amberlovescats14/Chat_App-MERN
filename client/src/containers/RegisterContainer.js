import Register from '../components/auth/Register'
import { connect } from 'react-redux'
import { setAlert, authFunc} from '../redux/actions/Actions'

const mapStateToProps = (state) => ({
  alert: state.alert,
  isAuthenticated: state.isAuthenticated
  // register: state.register
})

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
  register: (name, email, password)=> dispatch(authFunc(name, email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)