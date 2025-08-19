import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, onQuantityChange, viewMode = 'list' }) => {
  return (
    <div className="product-list">
      <div className={`product-container ${viewMode === 'grid' ? 'grid-view' : viewMode === 'text' ? 'text-view' : 'list-view'}`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuantityChange={onQuantityChange}
            viewMode={viewMode}
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="no-products">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;