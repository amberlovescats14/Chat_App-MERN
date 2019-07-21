import EditProfile from '../components/profile-form/EditProfile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createProfile, getCurrentProfile } from '../redux/actions/Actions'

const mapStateToProps = (state) => ({
  profile: state.getCurrentProfile.profile
})

const mapDispatchToProps = (dispatch) => ({
createProfile: (formData, history) => dispatch(createProfile(formData, history)),
getCurrentProfile: () => dispatch(getCurrentProfile()),

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile))