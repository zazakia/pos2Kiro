import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onQuantityChange, viewMode = 'list' }) => {
  const handleCardClick = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  if (viewMode === 'text') {
    return (
      <div className="product-card text-card clickable" onClick={handleCardClick}>
        <div className="text-product-info">
          <span className="text-product-name">{product.name}</span>
          <span className="text-product-price">₱{product.price.toFixed(2)}</span>
        </div>
        <div className="text-quantity-display">
          <span className="text-quantity-value">{product.quantity.toFixed(0)}</span>
        </div>
      </div>
    );
  }

  if (viewMode === 'grid') {
    return (
      <div className="product-card grid-card clickable" onClick={handleCardClick}>
        <div className="grid-product-image">
          {product.image}
        </div>
        <div className="grid-product-info">
          <h3 className="grid-product-name">{product.name}</h3>
          <div className="grid-product-price">₱ {product.price.toFixed(2)}</div>
        </div>
        <div className="grid-quantity-display">
          <span className="grid-quantity-value">QTY: {product.quantity.toFixed(0)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card clickable" onClick={handleCardClick}>
      <div className="product-info">
        <div className="product-image">
          {product.image}
        </div>
        
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">₱ {product.price.toFixed(2)}</div>
        </div>
      </div>
      
      <div className="quantity-display">
        <span className="quantity-value">{product.quantity.toFixed(2)}</span>
        <span className="quantity-label">QTY</span>
      </div>
    </div>
  );
};

export default ProductCard;