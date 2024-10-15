import React from 'react'
import "../../styles/Recipes/CreateRecipeView.css"

type FormProps = {submitForm: (event: React.FormEvent<HTMLFormElement>) => void, formMessage: string, submitted: boolean}

function CreateRecipeView({submitForm, formMessage, submitted}: FormProps) {
  return (
    <div className='create-recipe-wrapper'>
      <h2>Create A New Recipe</h2>
      <form className="create-recipe-form" method='POST' onSubmit={submitForm}>
        <label>Recipe name
        <input type="text" id='recipe-name' name='recipeName'/>
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
        <input type="file" id='recipe-image-upload' name='recipeThumb'/>
        </label>

        <div>
        <p className='recipe-form-message'>{formMessage ? formMessage : "" }</p>
        </div>
        <button type='submit'>{submitted ? "Recipe Submitted" : "Submit Recipe"}</button>
      </form>
    </div>
  )
}

export default CreateRecipeView