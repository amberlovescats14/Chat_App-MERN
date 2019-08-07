import CommentForm from '../../components/post/commentForm/CommentForm'
import { connect } from 'react-redux'
import { addComment } from '../../redux/actions/Actions'


const mapDispatchToProps = dispatch => ({
  addComment: (postId, formData) => dispatch(addComment(postId, formData))
})

export default connect( null, mapDispatchToProps)(CommentForm)