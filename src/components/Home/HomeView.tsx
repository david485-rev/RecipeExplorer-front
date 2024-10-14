import React from 'react'
import { Recipe } from './HomeController'

type HomeProps = {recipeIndex: number, recipesArr: Recipe[] | undefined, skipRecipe: () => void}

function HomeView({recipeIndex, recipesArr, skipRecipe}: HomeProps) {
  return (
    <div className='home-wrapper'>
      {recipesArr ? (
        <>
      <h2>{recipesArr[recipeIndex].recipeName}</h2>
      <div className='home-info_wrapper'>
        <p><span id='cuisine'>Cuisine:&nbsp;{recipesArr[recipeIndex].cuisine}</span><span id='category'>Category:&nbsp;{recipesArr[recipeIndex].category}</span></p>
      </div>
      <div className='home-image_wrapper'>
        <img id="recipe-image" src={recipesArr[recipeIndex].recipeThumb} alt={recipesArr[recipeIndex].recipeName} />
      </div>
      <div className='home-desc_wrapper'>
        <h4>Description:</h4>
        <p id="description">{recipesArr[recipeIndex].description ?? "No description"}</p>
      </div>
      <div className='buttons-wrapper'>
        <button id="left-arrow" onClick={skipRecipe}>&laquo;</button>
        <button id="comments">Comments</button>
        <button id="right-arrow">&raquo;</button>
      </div></>) : (<h2>Loading</h2>)
      }
    </div>
  )
}

export default HomeView