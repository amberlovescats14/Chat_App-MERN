import AddEducation from '../components/profile-form/AddEducation'
import { connect } from 'react-redux'
import { addEducation } from '../redux/actions/Actions'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => ({
  addEducation: (formData, history, edit) => dispatch(addEducation(formData, history, edit))
})

export default connect(null, mapDispatchToProps)(withRouter(AddEducation))