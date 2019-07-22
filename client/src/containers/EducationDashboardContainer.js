import EducationDashboard from '../components/dashboard/EducationDahboard'
import { connect } from 'react-redux'
import { deleteEducation } from '../redux/actions/Actions'

const mapStateToProps = state => ({
  education: state.getCurrentProfile.profile.education
})

const mapDispatchToProps = dispatch => ({
  deleteEducation: (id) => dispatch(deleteEducation(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EducationDashboard)