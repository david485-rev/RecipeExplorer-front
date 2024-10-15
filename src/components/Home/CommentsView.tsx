import React from 'react'
import "../../styles/Home/CommentsView.css";
import {RecipeComment } from './HomeController'

type CommentsProps = {comments: RecipeComment[] | undefined, isVisible: boolean}

function CommentsView({comments, isVisible}: CommentsProps) {
  return (
    <div className={`comments-wrapper ${isVisible ? "" : "hidden"}`}>
    {comments && comments.length ? (comments.map((comment) => (
      (<p className="recipe-comment" key={comment.uuid}>{comment.description}</p>)
      ))) : <p>No comments</p>
    }
    </div>
  )
}

export default CommentsView