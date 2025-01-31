
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipesContext } from '../../context/RecipesContext';
import './FoodDetail.css';

const FoodDetail = () => {
  const { id } = useParams();
  const { food_list } = useContext(RecipesContext);
  const foodItem = food_list.find(item => item._id === id);

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  return (
    <div className="food-detail">
      <div className="main-content">
        <h2>{foodItem.name}</h2>
        <div className="category-time">
          <span className="category">{foodItem.category}</span>
          <span className="time">Cook Time: {foodItem.time}</span>
        </div>
        <img src={foodItem.image} alt={foodItem.name} className="food-image" />
        <p className="description">{foodItem.description}</p>
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {foodItem.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Steps</h3>
        <ol className="steps-list">
          {foodItem.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <div className="sidebar">
        <div className="nutrition">
          <h3>Nutrition</h3>
          <ul>
            <li>Calories: {foodItem.nutrition.calories}</li>
            <li>Protein: {foodItem.nutrition.protein}</li>
            <li>Fat: {foodItem.nutrition.fat}</li>
            <li>Carbs: {foodItem.nutrition.carbs}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;