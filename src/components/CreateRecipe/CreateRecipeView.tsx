import React from 'react'
import "../../styles/Recipes/CreateRecipeView.css"
import config from '../../config';

const URL = `${config.path}`;

function CreateRecipeView() {
  return (
    <div className='create-recipe-wrapper'>
      <h2>Create A New Recipe</h2>
      <form className="create-recipe-form" method='POST' action={`${URL}/recipes`}>
        <label>Recipe name
        <input type="text" id='recipe-name' name='recipe-name'/>
        </label>
        
        <label>Category
        <input type="text" id='recipe-category' name='category'/>
        </label>

        <label>Cuisine
        <input type="text" id='recipe-cuisine' name='cuisine'/>
        </label>

        <label>Description
        <textarea id='description' name='description'/>
        </label>

        <label>Instructions
        <textarea id='recipe-instructions' name='instructions'/>
        </label>

        <label>Ingredients
        <input type='text' id='recipe-ingredients' name='ingredients'/>
        </label>

        <label>Image
        <input type="file" id='recipe-image-upload' name='image'/>
        </label>

        <button type='submit'>Create Recipe</button>
      </form>
    </div>
  )
}

export default CreateRecipeView