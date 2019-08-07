import Post from '../../components/post/Post'
import { connect } from 'react-redux'
import { getPost } from '../../redux/actions/Actions'

const mapStateToProps = state => ({
  post: state.getPosts.post,
  loading: state.getPosts.loading
})

const mapDispatchToProps = dispatch => ({
  getPost : (id) => dispatch(getPost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)