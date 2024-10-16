import React, { useState } from 'react'
import "../../styles/Recipes/CreateRecipeView.css"

type FormProps = {submitForm: (event: React.FormEvent<HTMLFormElement>) => void, formMessage: string, submitted: boolean}

function CreateRecipeView({submitForm, formMessage, submitted}: FormProps) {
  const [imageFile, setImageFile] = useState<string | undefined>(undefined);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = file ? URL.createObjectURL(file) : undefined;
      setImageFile(imageUrl);
    }
  }

  return (
    <div className='create-recipe-wrapper'>
      <h2>Create A New Recipe</h2>
      <form className="create-recipe-form" method='POST' onSubmit={submitForm}>
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
          <input type="file" id='recipe-image-upload' name='recipeThumb' onChange={handleChange} required/>
          </label>
          {imageFile ? <img id='image-preview' src={imageFile} alt="preview" /> : ''}
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