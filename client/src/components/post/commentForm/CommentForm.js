import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CommentForm = props => {
  const { addComment } = props
  const { postId } = props
  const [ text, setText] = useState('')
  return (
    <div>
          <div>
      <div class="post-form">
        <div class="bg-primary p">
          <h3>How does this make you feel...</h3>
        </div>
        <form class="form my-1"
        onSubmit={e => {
          e.preventDefault()
          addComment(postId, {text})
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

    </div>
  )
}

CommentForm.propTypes = {
  addComment : PropTypes.func.isRequired,
}

export default CommentForm
