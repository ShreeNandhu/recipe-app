import React from "react";
import "./Modal.css"; // Import your custom modal styles

const Modal = ({ isOpen, recipe, onClose }) => {
  if (!isOpen) return null;

  // Check if the recipe exists
  const hasRecipe = recipe && recipe.strMeal;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>

        {/* Display the recipe details if available */}
        {hasRecipe ? (
          <>
            <h2>{recipe.strMeal}</h2>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="recipe-image"
            />
            <h3>Ingredients:</h3>
            <ul className="Ingredient">
              {Array.from({ length: 20 }).map((_, index) => {
                const ingredient = recipe[`strIngredient${index + 1}`];
                if (!ingredient) return null;
                return <li key={index}>{ingredient}</li>;
              })}
            </ul>
            <h3>Cooking Method:</h3>
            <ul>
              {recipe.strInstructions
                ? recipe.strInstructions
                    .split(/\r?\n|\r|\./) // Split by line breaks or period to separate steps
                    .map(
                      (step, index) =>
                        step.trim() && <li key={index}>{step.trim()}</li>
                    )
                : "No instructions available"}{" "}
              {/* Fallback if no instructions */}
            </ul>
          </>
        ) : (
          <p className="missing-recipe">
            Sorry, we don't have the recipe available.
          </p> // Display this message if recipe is unavailable
        )}
      </div>
    </div>
  );
};

export default Modal;
