import EducationDashboard from '../components/dashboard/EducationDahboard'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  education: state.getCurrentProfile.profile.education
})

export default connect(mapStateToProps)(EducationDashboard)