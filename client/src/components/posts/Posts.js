import React, { Fragment, useEffect} from 'react'
import Spinner from '../layout/Spinner'
import PostItem from '../../containers/posts/PostItemContainer'
import PropTypes from 'prop-types'

const Posts = props => {
  const { getPosts } = props
  const { posts, loading } = props.gotPosts
  console.log(`POSTS: `, props)
  useEffect(()=> {
    getPosts()

  }, [getPosts])
  return (
    loading ? <Spinner/> :
    <Fragment>
      <h1 className="large text-primary">Posts:</h1>
      <p className="lead">
      <i className="fas fa-user"></i> Welcome to the community!
      </p>
      {/* PostForm */}
      <div className="posts">
        {posts.map(p => {
          console.log(`PPPP: `, p)
          return (
            <PostItem key={p._id} post={p} />
          )
        }
        )}
      </div>
    </Fragment>

  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  gotPosts: PropTypes.object.isRequired
}

export default Posts
