import PostItem from '../../components/posts/PostItem'
import { connect } from 'react-redux'
import { addLike, removeLike, deletePost } from '../../redux/actions/Actions'


const mapStateToProps = state => ({
  auth: state.register,
  loading: state.getPosts.loading,
  

})

const mapDispatchToProps = dispatch => ({
  addLike: (_id) => dispatch(addLike(_id)),
  removeLike: (_id) => dispatch(removeLike(_id)),
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)