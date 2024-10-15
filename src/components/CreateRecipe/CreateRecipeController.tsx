import React, { useState, useContext } from 'react'
import CreateRecipeView from './CreateRecipeView'
import { UserContext } from '../Context/UserContext'
import config from '../../config';
const URL = `${config.path}`;

function CreateRecipeController() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const user = useContext(UserContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());

      if (Object.values(formJson).includes("")) {
        setMessage("All fields are required")
      } else {
        createRecipe(formJson);
      }
    } catch(err) {
      console.error(err)
    }
  }

  async function createRecipe(recipe: Object) {
    const payload = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${user?.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    }

    try {
      const recipeResponse = await fetch(`${URL}/recipes`, payload);
      
      if (recipeResponse.ok) {
        setSubmitted(true)
      }
    } catch(err) {
      setMessage("Failed to submit recipe, try again")
      console.error(err)
    }
  }

  return (
    <CreateRecipeView submitForm={handleSubmit} formMessage={message} submitted={submitted}/>
  )
}

export default CreateRecipeController