import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import ProductCard from './ProductCard';
import './SearchModal.css';

const SearchModal = ({ products, onClose, onQuantityChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-modal-overlay">
      <div className="search-modal">
        <div className="search-modal-header">
          <div className="search-input-container">
            <Search size={20} className="search-input-icon" />
            <input
              type="text"
              placeholder="Search product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              autoFocus
            />
            <button className="close-search" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuantityChange={onQuantityChange}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No products found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;