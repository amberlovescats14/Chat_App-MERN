import AddExperience from '../components/profile-form/AddExperience'
import { connect } from 'react-redux'
import { addExperience } from '../redux/actions/Actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => ({
  addExperience: (formData, history, edit) => dispatch(addExperience(formData, history, edit))
})

export default connect(null, mapDispatchToProps)(withRouter(AddExperience))