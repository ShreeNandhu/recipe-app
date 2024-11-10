import { useState, useEffect } from 'react';
import { fetchByCategory, fetchByDish } from '../utilities/recipe';
  // Ensure the path is correct

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingDishes, setLoadingDishes] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all categories initially
  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        setLoadingCategories(true);
        const categoriesData = await fetchByCategory();
        setCategories(categoriesData);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategoriesData();
  }, []);

  // Fetch dishes when a category is selected
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchDishesData = async () => {
      try {
        setLoadingDishes(true);
        const dishesData = await fetchByDish(selectedCategory);
        setDishes(dishesData);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingDishes(false);
      }
    };
    fetchDishesData();
  }, [selectedCategory]);

  // Update selected category
  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  return {
    categories,
    dishes,
    selectCategory,
    loadingCategories,
    loadingDishes,
    error,
  };
};

export default useCategories;
