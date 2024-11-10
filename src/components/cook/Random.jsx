import React, { useState } from 'react'; // Importing useState from React
import useRandomMeals from '../../hooks/useRandomMeals';

import "./random.css";
import Modal from '../../modals/Modal';
import Loading from '../loading/loading';

const Random = () => {
  const { randomMeals, loading, error } = useRandomMeals();
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  
  // Handle click on a recipe item
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (loading) return <Loading />; // Show loading state while data is being fetched
  if (error) return <p>{error}</p>;

  return (
    <>
      {randomMeals.length > 0 && (
        <div className="random">
          {randomMeals.map((meal, index) => (
            <div key={index} className="random-item" onClick={() => handleRecipeClick(meal)}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="random-image"
              />
              <p>{meal.strMeal}</p>
            </div>
          ))}
        </div>
      )}
      
      {/* Modal for Recipe Details */}
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          recipe={selectedRecipe} 
          onClose={closeModal} 
        />
      )}

      {/* If no recommendations found */}
      {randomMeals.length === 0 && (
        <p>No recommendations found. Try another search.</p>
      )}
    </>
  );
};

export default Random;
