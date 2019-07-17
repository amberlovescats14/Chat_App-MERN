import Navbar from '../components/layout/Navbar'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/Actions'

const mapStateToProps = (state) => ({
  auth: state.register
})

const mapDispatchToProps = (dispatch) => ({
  logout : (email, password) => dispatch(logout(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)