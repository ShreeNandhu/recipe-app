import { useState, useEffect } from 'react';
import { fetchRecipesBySearch } from '../utilities/recipe';
 // Import the utility function

const useRecipeRecommendations = (searchQuery) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecommendations = async () => {
      if (searchQuery.trim() === '') return; // Do nothing if the search is empty

      setLoading(true);
      setError(null);
      try {
        const meals = await fetchRecipesBySearch(searchQuery);
        setRecommendations(meals.slice(0, 8)); // Limit to the first 8 recommendations
      } catch (err) {
        setError('Failed to fetch recommendations.');
      } finally {
        setLoading(false);
      }
    };

    getRecommendations();
  }, [searchQuery]); // Refetch recommendations whenever searchQuery changes

  return { recommendations, loading, error };
};

export default useRecipeRecommendations;
