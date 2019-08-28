import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import PostItem from '../../containers/posts/PostItemContainer'
import CommentForm from '../../containers/post/CommentFormContainer'
import CommentItem from '../../containers/post/CommentItemContainer'

const Post = props => {
  const { getPost, match, post, loading} = props
  useEffect(()=> {
    getPost(match.params.id)
  },[getPost])
  return (
    loading || post === null ? <Spinner/> : 
    <div className="container ">
    <Link to='/posts' className="btn">Back To Posts</Link>
    <PostItem eachPost={post} showActions={false}/>
    <CommentForm postId={post._id} />
    <div className="comments">
    {post.comments.map(comment=> (
      <CommentItem key={comment._id} comment={comment} postId={post._id}/>
    ))}
    </div>
    </div>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

export default Post
