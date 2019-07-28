import Posts from '../../components/posts/Posts'
import { connect } from 'react-redux'
import { getPosts } from '../../redux/actions/Actions'

const mapStateToProps = state => ({
 posts : state.getPosts.posts,
 loading: state.getPosts.loading
 
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
