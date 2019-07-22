import AddEducation from '../components/profile-form/AddEducation'
import { connect } from 'react-redux'
import { addExperience } from '../redux/actions/Actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => ({
  addExperience: () => dispatch(addExperience())
})

export default connect(null, mapDispatchToProps)(withRouter(AddEducation))