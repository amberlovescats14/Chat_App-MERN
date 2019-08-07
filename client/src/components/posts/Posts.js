import React, { useEffect} from 'react'
import Spinner from '../layout/Spinner'
import PostItem from '../../containers/posts/PostItemContainer'
import PostFormContainer from '../../containers/posts/PostFormContainer'
import Post from '../../containers/post/PostContainer'
import PropTypes from 'prop-types'

const Posts = props => {
  const { getPosts, posts, loading } = props
  useEffect(()=> {
    getPosts()
  }, [getPosts])
  return (
    loading ? <Spinner/> :
    <div className="container mx-4">
      <h1 className="large text-primary">Posts:</h1>
      <p className="lead">
      <i className="fas fa-user"></i> Welcome to the community!
      </p>
      <PostFormContainer />
      <div className="posts">
        {posts.map(p => {
          return (
            <PostItem key={p._id}  eachPost={p}/>
          )
        }
        )}
      </div>
    </div>

  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

export default Posts
