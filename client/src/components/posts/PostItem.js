import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const PostItem = props => {
  const { auth } = props
  const { _id, name, avatar, user, likes, comments, date, text} = props.post
  console.log(props.post)
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
            <button type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up"></i>
              <span>4</span>
            </button>
            <button type="button" className="btn btn-light">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <a href="post.html" className="btn btn-primary">
              Discussion <span className='comment-count'>2</span>
            </a>
            <button      
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i>
          </button>
          </div>
        </div>
    </Fragment>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default PostItem
