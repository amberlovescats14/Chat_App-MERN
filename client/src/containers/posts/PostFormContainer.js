import PostForm from '../../components/posts/PostForm'
import { connect } from 'react-redux'
import { addPost } from '../../redux/actions/Actions'


const mapStateToProps = state => ({
  user: state.register.user
})
const mapDispatchToProps = dispatch => ({
  addPost : (formData) => dispatch(addPost(formData))
})

export default connect(mapStateToProps ,mapDispatchToProps)(PostForm)