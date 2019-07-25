import PostItem from '../../components/posts/PostItem'
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  auth: state.register.user
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)