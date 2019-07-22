import Profiles from '../../components/profiles/Profiles'
import { connect } from 'react-redux'
import { getProfiles } from '../../redux/actions/Actions'


const mapStateToProps = state => ({
  profiles: state.getCurrentProfile.profiles,
  loading: state.getCurrentProfile.loading
})
const mapDispatchToProps = dispatch => ({
  getProfiles: () => dispatch(getProfiles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)