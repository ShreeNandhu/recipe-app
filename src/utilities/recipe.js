const BASE_URL = "https://www.themealdb.com/api/json/v1/1";


async function fetchRecipesBySearch(query) {
  try {
    // Fetch the response from the API
    const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json()
    // Return the meals if available, else return an empty array
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching recipes by search:", error);
    throw new Error('Failed to fetch recipes');
  }
};

// Fetch recipes by category
async function fetchByCategory() {
  try {
    const response = await fetch(`${BASE_URL}/categories.php`);
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching by category:", error);
    throw error;
  }
}
async function fetchByDish(category) {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
    const data = await response.json();

    return data.meals || [];
  } catch (error) {
    console.error("Error fetching dishes by category:", error);
    throw error; // Ensure the error is propagated for error handling in components
  }
}

// Fetch meal details by ID to get images and more details
async function fetchMealDetails(mealID) {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${mealID}`);
    const data = await response.json();
    return data.meals[0] || null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    throw error;
  }
}

async function fetchRandomMeal() {
    try {
      const response = await fetch(`${BASE_URL}/random.php`);
      const data = await response.json();
      return data.meals[0] || null;
    } catch (error) {
      console.error("Error fetching random meal:", error);
      throw error;
    }
  }

export { fetchByDish, fetchByCategory, fetchMealDetails,fetchRandomMeal, fetchRecipesBySearch};
