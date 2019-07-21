import CreateProfile from '../components/profile-form/CreateProfile'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { createProfile } from '../redux/actions/Actions'

// const mapStateToProps = (state) => ({
  
// })

const mapDispatchToProps = (dispatch) => ({
createProfile: (formData, history) => dispatch(createProfile(formData, history))

})

export default connect(null, mapDispatchToProps)(withRouter(CreateProfile))