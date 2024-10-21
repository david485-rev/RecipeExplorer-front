import React, { useEffect, useState } from 'react';
import HomeView from './HomeView';
import config from '../../config';
const URL = `${config.path}`;

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

export interface Recipe {
  uuid: string;
  recipeName: string;
  cuisine: string;
  category: string;
  instructions: string;
  recipeThumb: string;
  ingredients: string[];
  description?: string;
}

export interface RecipeComment {
  authorUuid: string;
  creationDate: number;
  description: string;
  rating: number;
  recipeUuid: string;
  type: string;
  uuid: string;
}

function HomeController() {
  const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
  const [randIndex, setRandIndex] = useState<number>(0);
  const [recipeComments, setRecipeComments] = useState<RecipeComment[] | undefined>(undefined);
  const [recipeRating, setRecipeRating] = useState<string>("No rating");
  
  async function getRandRecipe(recipesArr: Recipe[] | undefined) {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      
      if (!response.ok) {
        console.error("Error getting recipe");
      }

      const dataRand = await response.json();
      
      const randRecipe = transformMealData(dataRand);
      combineRecipes(randRecipe, recipesArr);
    } catch(err) {
      console.error(err);
    }
  }

  async function getRecipeComments(recipeId: string | undefined) {
    try {
      const response = await fetch(`${URL}/comments/recipe/?recipe=${recipeId}`);

      if (!response.ok) {
        console.error("Error getting comments");
      }

      const dataComments = await response.json();
    
      setRecipeComments(dataComments);
      calculateRecipeRating(dataComments);
    } catch(err) {
      console.error(err)
    }
  }

  function calculateRecipeRating(comments: RecipeComment[]) {
    const recipeRatings = comments.map(rating => {
      return rating.rating;
    })

    if (recipeRatings.length) {
      const sumRatings = recipeRatings.reduce((prevVal, currVal) => {
        return prevVal + currVal;
      }, 0);

      let ratingAvg; 

      if ((sumRatings / recipeRatings.length) % 1 !== 0) {
        ratingAvg = (sumRatings / recipeRatings.length).toFixed(1);
      } else {
        ratingAvg = sumRatings / recipeRatings.length;
      }
      
      setRecipeRating(`${ratingAvg}`);
    } else {
      setRecipeRating("No rating");
    }
  }
  
  function combineRecipes(randRecipe: Recipe[], recipesArr: Recipe[] | undefined) {
    if (recipesArr) {
      const combinedRecipes = [...recipesArr, ...randRecipe];
      
      randomIndex(combinedRecipes);
      setRecipes(combinedRecipes);
    } else {
      setRecipes(randRecipe);
    }
  }
  
  async function randomIndex(recipesArr: Recipe[]) {
    try {
      const randRecipeIndex = Math.floor(Math.random() * recipesArr.length);
      setRandIndex(randRecipeIndex);
  
      await getRecipeComments(recipesArr[randRecipeIndex].uuid);
    } catch(err) {
      console.error(err)
    }
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
  
  async function nextRecipe(recipeId: string | undefined) {
    try {
      const recipesRemoved = recipes?.filter((recipe: any) => {
          return recipe.uuid !== recipeId;
      })
  
      await getRandRecipe(recipesRemoved);
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await fetch(`${URL}/recipes`);

        if (!response.ok) {
          console.error("Error getting recipes");
        }

        const data = await response.json();
  
        await getRandRecipe(data);
      } catch (err) {
        console.error(err);
      }
    }

    getRecipes();
  }, [])

  return (
    <HomeView recipeIndex={randIndex} rating={recipeRating} comments={recipeComments} recipesArr={recipes} skipRecipe={() => nextRecipe(recipes?.[randIndex].uuid)} />
  );
}

export default HomeController;
