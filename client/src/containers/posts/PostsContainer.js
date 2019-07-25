import Posts from '../../components/posts/Posts'
import { connect } from 'react-redux'
import { getPosts } from '../../redux/actions/Actions'

const mapStateToProps = state => ({
  gotPosts : state.getPosts
 
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
