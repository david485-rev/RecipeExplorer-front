import React, { useEffect, useState } from 'react';
import "../../styles/Home/Home.css";

interface Meal {
  meals: [ 
    {
      idMeal: string;
      strMeal: string;
      strCategory: string;
      strArea: string;
      strInstructions: string;
      strMealThumb: string;
      strTags: string | null;
      strIngredient1: string | null;
      strIngredient2: string | null;
      strIngredient3: string | null;
      strIngredient4: string | null;
      strIngredient5: string | null;
      strIngredient6: string | null;
      strIngredient7: string | null;
      strIngredient8: string | null;
      strIngredient9: string | null;
      strIngredient10: string | null;
      strIngredient11: string | null;
      strIngredient12: string | null;
      strIngredient13: string | null;
      strIngredient14: string | null;
      strIngredient15: string | null;
      strIngredient16: string | null;
      strIngredient17: string | null;
      strIngredient18: string | null;
      strIngredient19: string | null;
      strIngredient20: string | null;
      strMeasure1: string | null;
      strMeasure2: string | null;
      strMeasure3: string | null;
      strMeasure4: string | null;
      strMeasure5: string | null;
      strMeasure6: string | null;
      strMeasure7: string | null;
      strMeasure8: string | null;
      strMeasure9: string | null;
      strMeasure10: string | null;
      strMeasure11: string | null;
      strMeasure12: string | null;
      strMeasure13: string | null;
      strMeasure14: string | null;
      strMeasure15: string | null;
      strMeasure16: string | null;
      strMeasure17: string | null;
      strMeasure18: string | null;
      strMeasure19: string | null;
      strMeasure20: string | null;
    }
  ]
}

interface Recipe {
  uuid: string;
  recipeName: string;
  cuisine: string;
  category: string;
  instructions: string;
  recipeThumb: string;
  ingredients: string[];
  description?: string;
}

function Home() {
  const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
  const [randIndex, setRandIndex] = useState<number>(0);
  
  async function getRandRecipe(recipesArr: Recipe[] | undefined) {
    const responseRand = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const dataRand = await responseRand.json();
    
    const randRecipe = transformMealData(dataRand);
    combineRecipes(randRecipe, recipesArr);
  }
  
  function combineRecipes(randRecipe: Recipe[], recipesArr: Recipe[] | undefined) {
    if (recipesArr) {
      const indexRand = Math.floor(Math.random() * (recipesArr.length + 1));
      const combinedRecipes = [...recipesArr?.slice(0, indexRand), ...randRecipe, ...recipesArr?.slice(indexRand)];
      
      randomIndex(combinedRecipes);
      setRecipes(combinedRecipes);
    } else {
      setRecipes(randRecipe)
    }
    console.log(recipes)
  }
  
  function randomIndex(recipesArr: Recipe[]) {
    const randRecipeIndex = Math.floor(Math.random() * recipesArr.length);
    setRandIndex(randRecipeIndex);
  }
  
  function transformMealData(randRecipe: Meal): Recipe[] {
    return randRecipe.meals.map((recipe) => ({
      uuid: recipe.idMeal,
      recipeName: recipe.strMeal,
      cuisine: recipe.strArea,
      category: recipe.strCategory,
      instructions: recipe.strInstructions,
      recipeThumb: recipe.strMealThumb,
      ingredients: [
        recipe.strIngredient1,
        recipe.strIngredient2,
        recipe.strIngredient3,
        recipe.strIngredient4,
        recipe.strIngredient5,
        recipe.strIngredient6,
        recipe.strIngredient7,
        recipe.strIngredient8,
        recipe.strIngredient9,
        recipe.strIngredient10,
        recipe.strIngredient11,
        recipe.strIngredient12,
        recipe.strIngredient13,
        recipe.strIngredient14,
        recipe.strIngredient15,
        recipe.strIngredient16,
        recipe.strIngredient17,
        recipe.strIngredient18,
        recipe.strIngredient19,
        recipe.strIngredient20,
      ].filter((ingredient): ingredient is string => ingredient !== null && ingredient !== "")
    }));
  }
  
  async function nextRecipe(recipeId: string) {
    const recipesRemoved = recipes?.filter((recipe: any) => {
        return recipe.uuid !== recipeId;
    })

    await getRandRecipe(recipesRemoved);
  }

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch("http://localhost:8888/recipes");
      const data = await response.json();

      await getRandRecipe(data)
    }

    getRecipes()
  }, [])

  return (
    <div className='home-wrapper'>
      {recipes ? (
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
  );
}

export default Home;
