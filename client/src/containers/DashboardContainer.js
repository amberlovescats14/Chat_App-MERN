import Dashboard from '../components/dashboard/Dashboard'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../redux/actions/Actions'

const mapStateToProps = state => ({
  auth: state.register,
  profile: state.getCurrentProfile.profile
})
const mapDispatchToProps = dispatch => ({
  getCurrentProfile: () => dispatch(getCurrentProfile())
})



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)