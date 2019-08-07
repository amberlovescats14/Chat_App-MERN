import CommentItem from '../../components/post/commentForm/CommentItem'
import { connect } from 'react-redux'
import { deleteComment } from '../../redux/actions/Actions'


const mapStateToProps = state => ({
  auth: state.register
})
const mapDispatchToProps = dispatch => ({
  deleteComment : (postId, commentId) => dispatch(deleteComment(postId, commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)