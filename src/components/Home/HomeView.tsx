import React from 'react'
import { Recipe } from './HomeController'

type HomeProps = {recipeIndex: number, recipesArr: Recipe[] | undefined, skipRecipe: () => void}

function HomeView({recipeIndex, recipesArr, skipRecipe}: HomeProps) {
  return (
    <div className='home-wrapper'>
      {recipesArr ? (
        <>
      <h2>{recipesArr[recipeIndex].recipeName}</h2>
      <div className='home-image_wrapper'>
        <img id="recipe-image" src={recipesArr[recipeIndex].recipeThumb} alt={recipesArr[recipeIndex].recipeName} />
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