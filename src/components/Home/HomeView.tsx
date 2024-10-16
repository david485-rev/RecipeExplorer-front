import React, { useState } from 'react'
import "../../styles/Home/HomeView.css";
import { Recipe, RecipeComment } from './HomeController'
import CommentsView from './CommentsView'

type HomeProps = {recipeIndex: number, rating: string, recipesArr: Recipe[] | undefined, skipRecipe: () => void, comments: RecipeComment[] | undefined}

function HomeView({recipeIndex, rating, comments, recipesArr, skipRecipe}: HomeProps) {
  const [visible, setVisibile] = useState<boolean>(false);

  function toggleComments() {
    setVisibile(!visible)
  }

  return (
    <div className='home-wrapper'>
      {recipesArr && recipesArr.length ? (
        <>
      <h2>{recipesArr[recipeIndex].recipeName}</h2>
      <div className='home-info_wrapper'>
        <p><span id="rating">{rating}</span><span id='cuisine'>Cuisine:&nbsp;{recipesArr[recipeIndex].cuisine}</span><span id='category'>Category:&nbsp;{recipesArr[recipeIndex].category}</span></p>
      </div>
      <div className='home-image_wrapper'>
        <img id="recipe-image" src={recipesArr[recipeIndex].recipeThumb} alt={recipesArr[recipeIndex].recipeName} />
      </div>
      <div className='home-desc_wrapper'>
        <h4>Description:</h4>
        <p id="description">{recipesArr[recipeIndex].description ?? "No description available"}</p>
      </div>
      <div className='buttons-wrapper'>
        <button id="left-arrow" onClick={skipRecipe}>&laquo;</button>
        <button id="comments" onClick={toggleComments}>Comments</button>
        <button id="right-arrow">&raquo;</button>
      </div></>) : <h2>Loading</h2>
      }
      <CommentsView isVisible={visible} comments={comments} />
    </div>
  )
}

export default HomeView