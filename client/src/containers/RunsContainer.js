import Runs from '../components/map/Map'
import { connect } from 'react-redux'
import { getRuns } from '../redux/actions/Actions'

const mapStateToProps = (state) => ({
  runDATA: state.runDATA,
  location: state.location
})
const mapDispatchToProps = (dispatch) => ({
  getRuns: (users) => dispatch(getRuns(users))
})

export default connect(mapStateToProps,mapDispatchToProps)(Runs)