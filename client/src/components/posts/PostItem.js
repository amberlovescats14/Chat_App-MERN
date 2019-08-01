import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const PostItem = props => {
  const { auth, loading, addLike, removeLike } = props
  const { _id, name, avatar, user, likes, comments, date, text} = props.eachPost
  console.log(`PROPS: `, props)
  return (
    <Fragment>
         
        <div className="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
                className="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </a>
          </div>
          <div>
            <p className="my-1">
              {text}
            </p>
             <p className="post-date">
                Posted on <Moment format="MM/DD/YYY">{date}</Moment>
            </p>
            <button type="button" className="btn btn-light"
            onClick={(_id )=> addLike(_id)}>
              <i className="fas fa-thumbs-up"></i> {' '}
              {likes.length > 0 && (
                <span>{likes.length}</span>
              )}
            </button>
            <button type="button" className="btn btn-light"
            onClick={(_id)=> removeLike(_id)}>
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} className="btn btn-primary">
              Discussion 
              {comments.length > 0 && (
                <span className='comment-count'> {comments.length}</span>
                )}
            </Link>
            {!loading && user === auth.id && (
            <button      
            type="button"
            className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
            )}
          </div>
        </div>
    </Fragment>
  )
}

PostItem.propTypes = {
  eachPost: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default PostItem