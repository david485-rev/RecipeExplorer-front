import React, { useEffect, useState } from 'react'
import "../../styles/Home/Home.css"

function Home() {
  const [recipes, setRecipes] = useState<any[] | undefined>(undefined);
  const [randIndex, setRandIndex] = useState<number>(0);

  function nextRecipe(recipeId: string) {
    const recipesRemoved = recipes?.filter((recipe: any) => {
        return recipe.uuid !== recipeId;
    })

    randomIndex(recipesRemoved);
    setRecipes(recipesRemoved)
  }

  function randomIndex(recipesArr: any[] | undefined) {
    if (recipesArr) {
      const randRecipeIndex = Math.floor(Math.random() * recipesArr.length);
      setRandIndex(randRecipeIndex);
      console.log(randRecipeIndex)
    }
  }

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("http://localhost:8888/recipes")
      const data = await response.json();

      randomIndex(data)
      setRecipes(data);
    }
    getRecipes();
  }, [])

  return (
    <div className='home-wrapper'>
      { recipes ?  (
        <>
      <h2>{recipes[randIndex].recipeName}</h2>
      <div className='home-image_wrapper'>
        <img id="recipe-image" src={recipes[randIndex].recipeThumb} alt={recipes[randIndex].recipeName} />
      </div>
      <div className='buttons-wrapper'>
        <button id="left-arrow" onClick={() => nextRecipe(recipes[randIndex].uuid)}>&laquo;</button>
        <button id="comments">Comments</button>
        <button id="right-arrow">&raquo;</button>
      </div></>) : (<h2>Loading</h2>)
      }
    </div>
  )
}

export default Home;