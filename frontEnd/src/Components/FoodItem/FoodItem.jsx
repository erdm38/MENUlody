// FoodItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css';
import rating_starts from '../../Assets/rating_starts.webp'; // Yıldız resmini içe aktarın

const FoodItem = ({ id, name, time, description, image }) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <Link to={`/recipes/${id}`}>
          <img className='food-item-image' src={image} alt=""/>
        </Link>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* Yıldızları göstermek için resmi kullanın */}
          <img className='stars-image' src={rating_starts} alt=""/>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-time">{time}</p>
      </div>
    </div>
  );
}

export default FoodItem;
