import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CreateRecipeView from './CreateRecipeView'
import { UserContext } from '../Context/UserContext'
import config from '../../config';
const PURL = `${config.path}`;

function CreateRecipeController() {
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [imageFileURL, setImageFileURL] = useState<string | undefined>(undefined);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const user = useContext(UserContext);
  const navigate = useNavigate();

  function handleImageSelection(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const file = e.target.files?.[0];
      
      if (file) {
        setMessage("");
        const imageUrl = URL.createObjectURL(file);
        setImageFileURL(imageUrl);
        setImageFile(file);
      }
    } catch(err) {
      console.error(err);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, imageFile: File | undefined) {
    e.preventDefault();

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());

      if (formJson.recipeThumb instanceof File && formJson.recipeThumb.name === "" && imageFile) {
        formJson.recipeThumb = imageFile;
      }

      if (Object.values(formJson).includes("")) {
        setMessage("All fields are required");
      } else if (formJson.recipeThumb instanceof File && formJson.recipeThumb.name === "") {
        setMessage("You must upload an image")
      } else {
        createRecipe(formJson, form);
      }
    } catch(err) {
      console.error(err);
    }
  }

  async function createRecipe(recipe: Object, formElement: HTMLFormElement) {
    const payload = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${user?.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipe)
    }

    try {
      const recipeResponse = await fetch(`${PURL}/recipes`, payload);
      
      if (recipeResponse.ok) {
        setSubmitted(true);
        formElement.reset();
        setImageFile(undefined);
        setImageFileURL(undefined);
        setMessage("");
      }

      setTimeout(() => setSubmitted(false), 500);
    } catch(err) {
      setMessage("Failed to submit recipe, try again");
      console.error(err);
    }
  }

  useEffect(() => {
    return () => {
      if (imageFileURL) {
        URL.revokeObjectURL(imageFileURL);
      }
    };
  }, [imageFileURL]);

  useEffect(() => {
    if (!user?.token) {
      navigate("/");
    }
  }, [user?.token, navigate]);

  return (
    <CreateRecipeView submitForm={handleSubmit} selectImage={handleImageSelection} imageFile={imageFile} imageURL={imageFileURL} formMessage={message} submitted={submitted}/>
  )
}

export default CreateRecipeController