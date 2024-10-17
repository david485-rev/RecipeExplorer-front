import React from 'react'
import "../../styles/Recipes/CreateRecipeView.css"

type FormProps = {submitForm: (e: React.FormEvent<HTMLFormElement>, imageFile: File | undefined) => void, selectImage: (e: React.ChangeEvent<HTMLInputElement>) => void, imageFile: File | undefined, imageURL: string | undefined, formMessage: string, submitted: boolean}

function CreateRecipeView({submitForm, selectImage, imageFile, imageURL, formMessage, submitted}: FormProps) {
  return (
    <div className='create-recipe-wrapper'>
      <h2>Create A New Recipe</h2>
      <form className="create-recipe-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitForm(e, imageFile)}>
        <label>Recipe name
        <input type="text" id='recipe-name' name='recipeName' required/>
        </label>
        
        <label>Category
        <input type="text" id='recipe-category' name='category' required/>
        </label>

        <label>Cuisine
        <input type="text" id='recipe-cuisine' name='cuisine' required/>
        </label>

        <label>Description
        <textarea id='description' name='description' required/>
        </label>

        <label>Instructions
        <textarea id='recipe-instructions' name='instructions' required/>
        </label>

        <label>Ingredients
        <input type='text' id='recipe-ingredients' name='ingredients' required/>
        </label>

        <div className="image-upload-wrapper">
          <label id="recipe-image-upload-label">Image
          <input type="file" id='recipe-image-upload' name='recipeThumb' onChange={selectImage}/>
          </label>
          {imageURL ? <img id='image-preview' src={imageURL} alt="preview" /> : ''}
        </div>

        <div className='recipe-form-message'>
          <p>{formMessage ? formMessage : "" }</p>
        </div>

        <button type='submit'>{submitted ? "Recipe Submitted" : "Submit Recipe"}</button>
      </form>
    </div>
  )
}

export default CreateRecipeView