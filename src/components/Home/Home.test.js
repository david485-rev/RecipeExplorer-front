import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeController from "./HomeController";
import HomeView from "./HomeView";
import CommentsView from "./CommentsView";
import config from "../../config";

jest.mock("./HomeView", () => {
  return function MockHomeView() {
    return <div>Mocked HomeView</div>;
  };
});

describe("HomeController and HomeView Tests", () => {
  const api = "https://www.themealdb.com/api/json/v1/1/random.php";

  const mockRecipe = {
    uuid: "12345",
    recipeName: "Test Recipe",
    cuisine: "Test Cuisine",
    category: "Test Category",
    instructions: "Test Instructions",
    recipeThumb: "Test Thumb",
    ingredients: ["Ingredient1", "Ingredient2"],
    description: "Test description"
  };

  const mockComments = [
    {
      authorUuid: "author1",
      creationDate: 1234567890,
      description: "Test comment",
      rating: 5,
      recipeUuid: "12345",
      type: "comment",
      uuid: "comment1"
    }
  ];

  const mockRecipes = [mockRecipe];

  const homeViewProps = {
    recipeIndex: 0,
    rating: "4.5",
    recipesArr: mockRecipes,
    skipRecipe: jest.fn(),
    comments: mockComments
  };

  const commentsViewProps = {
    isVisible: true,
    comments: mockComments
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the HomeView component from HomeController", async () => {
    render(<HomeController />);

    const mockedView = screen.getByText((content) => {
      return content.includes("Mocked HomeView");
    });

    expect(mockedView).toBeInTheDocument();
  });

  it("fetches and sets a random recipe from HomeController", async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({ recipes: mockRecipes })
    });

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({ meals: [mockRecipe] })
    });

    render(<HomeController />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`${config.path}/recipes`);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(api);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });

  it("fetches and sets recipe comments from HomeController", async () => {
    const mockedRandomIndex = 0;

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({ recipes: mockRecipes })
    });

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue({ meals: [mockRecipe] })
    });

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockComments)
    });

    render(<HomeController />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(`${config.path}/recipes`);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(api);
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `${config.path}/comments/recipe/?recipe=${mockRecipes[mockedRandomIndex].uuid}`
      );
    });

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(3);
    });
  });

  it("handles errors in API calls from HomeController", async () => {
    fetch.mockRejectedValueOnce(new Error("API error"));

    render(<HomeController />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
