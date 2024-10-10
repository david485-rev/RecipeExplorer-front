import React, { useEffect, useState } from 'react'
import "../../styles/Home/Home.css"

function Home() {
  const [recipes, setRecipes] = useState<Array<any> | undefined>(undefined);

  function nextRecipe(recipeId: string) {
    const removedRecipe = recipes?.filter((recipe: any) => {
        return recipe.uuid !== recipeId;
    })
    setRecipes(removedRecipe)
  }

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("http://localhost:8888/recipes")
      const data = await response.json();

      setRecipes(data)
    }
    getRecipes()
  }, [])

  return (
    <div className='home-wrapper'>
      { recipes ?  (
        <>
      <h2>{recipes[0].recipeName}</h2>
      <div className='home-image_wrapper'>
        <img id="recipe-image" src={recipes[0].recipeThumb} alt={recipes[0].recipeName} />
      </div>
      <div className='buttons-wrapper'>
        <button id="left-arrow" onClick={() => nextRecipe(recipes[0].uuid)}>&laquo;</button>
        <button id="comments">Comments</button>
        <button id="right-arrow">&raquo;</button>
      </div></>) : (<h2>Loading</h2>)
      }
    </div>
  )
}

export default Home;