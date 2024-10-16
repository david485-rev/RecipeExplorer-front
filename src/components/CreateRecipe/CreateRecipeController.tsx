import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CreateRecipeView from './CreateRecipeView'
import { UserContext } from '../Context/UserContext'
import config from '../../config';
const URL = `${config.path}`;

function CreateRecipeController() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const user = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(formData: Object) {
    try {
      if (Object.values(formData).includes("")) {
        setMessage("All fields are required");
      } else {
        createRecipe(formData);
      }
    } catch(err) {
      console.error(err);
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
        setSubmitted(true);
      }

      setTimeout(() => setSubmitted(false), 500);
    } catch(err) {
      setMessage("Failed to submit recipe, try again");
      console.error(err);
    }
  }

  useEffect(() => {
    if (!user?.token) {
      navigate("/");
    }
  }, [user?.token, navigate]);

  return (
    <CreateRecipeView submitForm={handleSubmit} formMessage={message} submitted={submitted}/>
  )
}

export default CreateRecipeController