import React from 'react';
import useCategories from './../../hooks/useCategories';
import DishList from '../Dish/DishList';
import Loading from '../loading/loading';
import "./Category.css";

const Category = () => {
  const {
    categories,
    dishes,
    selectCategory,
    loadingCategories,
    loadingDishes,
    error,
  } = useCategories();

  return (
    <div className="category-container" id="dishes">
      <h3>Feeling creative? How about trying a new cuisine you haven't explored yet?</h3>
      {loadingCategories && <Loading />}
      {error && <p>Error: {error.message}</p>}

      <div className="category-buttons">
        {categories.map((category) => (
          <div className='category-b' key={category.strCategory}> {/* Added key here */}
            <button onClick={() => selectCategory(category.strCategory)}>
              {category.strCategory}
            </button>
          </div>
        ))}
      </div>

      {loadingDishes ? (
        <Loading />
      ) : (
        dishes.length > 0 && <DishList recipe={dishes} />
      )}
    </div>
  );
};

export default Category;
