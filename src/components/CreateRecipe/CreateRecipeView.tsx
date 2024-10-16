import React, { useEffect, useRef, useState } from 'react'
import "../../styles/Recipes/CreateRecipeView.css"

type FormProps = {submitForm: (formData: Object) => void, formMessage: string, submitted: boolean}

function CreateRecipeView({submitForm, formMessage, submitted}: FormProps) {
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [imageFileURL, setImageFileURL] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>(formMessage);
  const recipeFormRef = useRef<HTMLFormElement | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const file = e.target.files?.[0];
      if (file) {
        setErrorMessage("");
        const imageUrl = URL.createObjectURL(file);
        setImageFileURL(imageUrl);
        setImageFile(file);
      }
    } catch(err) {
      console.error(err);
    }
  }

  function handleImageInsertion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (imageFile) {
        const form = e.currentTarget;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        formJson.recipeThumb = imageFile;
        submitForm(formJson);
      } else {
        setErrorMessage("Image selection required");
      }
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (submitted && recipeFormRef.current) {
      recipeFormRef.current.reset();
      setImageFile(undefined);
      setImageFileURL(undefined);
      setErrorMessage("");
    }
  }, [submitted]);

  useEffect(() => {
    return () => {
      if (imageFileURL) {
        URL.revokeObjectURL(imageFileURL);
      }
    };
  }, [imageFileURL]);

  return (
    <div className='create-recipe-wrapper'>
      <h2>Create A New Recipe</h2>
      <form ref={recipeFormRef} className="create-recipe-form" onSubmit={handleImageInsertion}>
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
          <input type="file" id='recipe-image-upload' name='recipeThumb' onChange={handleChange}/>
          </label>
          {imageFileURL ? <img id='image-preview' src={imageFileURL} alt="preview" /> : ''}
        </div>

        <div className='recipe-form-message'>
          <p>{errorMessage ? errorMessage : "" }</p>
        </div>

        <button type='submit'>{submitted ? "Recipe Submitted" : "Submit Recipe"}</button>
      </form>
    </div>
  )
}

export default CreateRecipeView