import React, { useState } from 'react';
import useRecipeRecommendations from './../../hooks/useRecipeRecommendation';
import Random from './Random';
import './cook.css';
import Loading from '../loading/loading';
import Modal from '../../modals/Modal';

export default function Cook() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const { recommendations, loading } = useRecipeRecommendations(searchQuery);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle click on a recipe item
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="cook-container" id="wanttocook">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Recommendations or Random Meals */}
      <div className="recommendations">
        {/* Only render when not loading */}
        {!loading && (
          recommendations.length > 0 ? (
            recommendations.map((meal) => (
              <div 
                key={meal.idMeal} 
                className="recommendation-item" 
                onClick={() => handleRecipeClick(meal)} // Handle click to open modal
              >
                <img 
                  src={meal.strMealThumb} 
                  alt={meal.strMeal} 
                  className="recommendation-image" 
                />
                <p>{meal.strMeal}</p>
              </div>
            ))
          ) : searchQuery.trim() === '' ? (
            <Random /> // Display random meals if no search query
          ) : (
            <p>No results found for "{searchQuery}"</p>
          )
        )}
        {loading && <Loading />}
      </div>

      {/* Modal for Recipe Details */}
      <Modal 
        isOpen={isModalOpen} 
        recipe={selectedRecipe} 
        onClose={closeModal} 
      />
    </div>
  );
}
