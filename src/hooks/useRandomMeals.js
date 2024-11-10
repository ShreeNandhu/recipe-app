import { useState, useEffect } from 'react';
import { fetchRandomMeal } from '../utilities/recipe';


const useRandomMeals = () => {
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRandomMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        // Array to hold promises for 8 random meals
        const mealsPromises = Array.from({ length: 8 }, () => fetchRandomMeal());
        const meals = await Promise.all(mealsPromises); // Resolve all promises
        setRandomMeals(meals); // Set random meals to state
      } catch (err) {
        setError('Failed to fetch random meals.');
      } finally {
        setLoading(false);
      }
    };

    getRandomMeals();
  }, []);

  return { randomMeals, loading, error };
};

export default useRandomMeals;
