import Profile from '../../components/profile/Profile'
import { connect } from 'react-redux'
import { getProfileById } from '../../redux/actions/Actions'


const mapStateToProps = state => ({
  profile: state.getCurrentProfile.profile,
  auth: state.register,
})

const mapDispatchToProps = dispatch => ({
  getProfileById: (userId) => dispatch(getProfileById(userId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)