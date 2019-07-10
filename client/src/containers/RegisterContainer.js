import Register from '../components/auth/Register'
import { connect } from 'react-redux'
import { setAlert } from '../redux/actions/Actions'

const mapStateToProps = (state) => ({
  alert: state.alert
})

const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)