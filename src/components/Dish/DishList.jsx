import React, { useState } from "react";
import "./DishList.css"; // Import your styles for DishList
import Modal from "../../modals/Modal";

const DishList = ({ recipe }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal and set the selected recipe (single dish)
  const handleRecipeClick = (dish) => {
    setSelectedRecipe(dish); // Set the selected dish
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="dish-list">
      {recipe.map((dish, index) => (
        <div
          key={index}
          className="dish-item"
          onClick={() => handleRecipeClick(dish)} // Pass the clicked dish to the function
        >
          <img src={dish.strMealThumb} alt={dish.strMeal} />
          <p>{dish.strMeal}</p>
        </div>
      ))}

      {/* Render the Modal component when a dish is selected */}
      <Modal
        isOpen={isModalOpen}
        recipe={selectedRecipe}
        onClose={closeModal}
      />
    </div>
  );
};

export default DishList;
