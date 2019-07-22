import ExperienceDashboard from '../components/dashboard/ExperienceDashboard'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  experience: state.getCurrentProfile.profile.experience
})

export default connect(mapStateToProps)(ExperienceDashboard)