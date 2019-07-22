import ExperienceDashboard from '../components/dashboard/ExperienceDashboard'
import { connect } from 'react-redux'
import { deleteExperience } from '../redux/actions/Actions'

const mapStateToProps = state => ({
  experience: state.getCurrentProfile.profile.experience
})
const mapDispatchToProps = dispatch => ({
  deleteExperience: (id) => dispatch(deleteExperience(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceDashboard)