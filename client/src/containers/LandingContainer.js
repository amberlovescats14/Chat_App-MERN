import Landing from '../components/layout/Landing'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  isAuthenticated: state.register.isAuthenticated
})






export default connect(mapStateToProps, null)(Landing)