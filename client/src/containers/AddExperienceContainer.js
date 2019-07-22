import AddExperience from '../components/profile-form/AddExperience'
import { connect } from 'react-redux'
import { addExperience } from '../redux/actions/Actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => ({
  addExperience: (formData, history) => dispatch(addExperience(formData, history))
})

export default connect(null, mapDispatchToProps)(withRouter(AddExperience))