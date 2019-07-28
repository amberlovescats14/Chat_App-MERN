import PostItem from '../../components/posts/PostItem'
import { connect } from 'react-redux'
import { addLike, removeLike } from '../../redux/actions/Actions'


const mapStateToProps = state => ({
  auth: state.register.user,
  loading: state.getPosts.loading,
  

})

const mapDispatchToProps = dispatch => ({
  addLike: (id) => dispatch(addLike(id)),
  removeLike: (id) => dispatch(removeLike(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)