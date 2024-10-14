import React from 'react'
import "../../styles/Home/CommentsView.css";
import {RecipeComment } from './HomeController'

type CommentsProps = {comments: RecipeComment[] | undefined}

function CommentsView({comments}: CommentsProps) {
  return (
    <div className='comments-wrapper'>
    {comments && comments.length ? (comments.map((comment) => (
      (<p className="recipe-comment" key={comment.uuid}>{comment.description}</p>)
      ))) : <p>No comments</p>
    }
    </div>
  )
}

export default CommentsView