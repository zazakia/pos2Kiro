import React from 'react';
import './CategorySidebar.css';

const CategorySidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-sidebar">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-item ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;