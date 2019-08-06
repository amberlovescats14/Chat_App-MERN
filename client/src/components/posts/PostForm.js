import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PostForm = props => {
  const { addPost } = props
  const [ text, setText ] = useState('')
  return (
    <div>
      <div class="post-form">
        <div class="bg-primary p">
          <h3>Leave A Comment</h3>
        </div>
        <form class="form my-1"
        onSubmit={e => {
          e.preventDefault()
          addPost({text})
          setText('')
        }}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Comment on this post"
            required
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>

    </div>
  )
}

PostForm.propTypes = {
  addProps: PropTypes.func.isRequired,
}

export default PostForm
