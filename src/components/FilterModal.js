import React from 'react';
import { X, ArrowUpDown, DollarSign } from 'lucide-react';
import './FilterModal.css';

const FilterModal = ({ 
  onClose, 
  sortBy, 
  setSortBy, 
  sortOrder, 
  setSortOrder, 
  priceRange, 
  setPriceRange 
}) => {
  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('asc');
    }
  };

  const handlePriceRangeChange = (type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: parseFloat(value)
    }));
  };

  const resetFilters = () => {
    setSortBy('name');
    setSortOrder('asc');
    setPriceRange({ min: 0, max: 200 });
  };

  return (
    <div className="filter-modal-overlay">
      <div className="filter-modal">
        <div className="filter-header">
          <h3>Product Filter</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="filter-content">
          <div className="filter-section">
            <h4><ArrowUpDown size={16} /> Sort By</h4>
            <div className="sort-options">
              <button 
                className={`sort-btn ${sortBy === 'name' ? 'active' : ''}`}
                onClick={() => handleSortChange('name')}
              >
                Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button 
                className={`sort-btn ${sortBy === 'price' ? 'active' : ''}`}
                onClick={() => handleSortChange('price')}
              >
                Price {sortBy === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
              <button 
                className={`sort-btn ${sortBy === 'quantity' ? 'active' : ''}`}
                onClick={() => handleSortChange('quantity')}
              >
                Quantity {sortBy === 'quantity' && (sortOrder === 'asc' ? '↑' : '↓')}
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4><DollarSign size={16} /> Price Range</h4>
            <div className="price-range">
              <div className="price-input">
                <label>Min: ₱</label>
                <input 
                  type="number" 
                  value={priceRange.min}
                  onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                  min="0"
                />
              </div>
              <div className="price-input">
                <label>Max: ₱</label>
                <input 
                  type="number" 
                  value={priceRange.max}
                  onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                  min="0"
                />
              </div>
            </div>
            <div className="price-slider">
              <input 
                type="range" 
                min="0" 
                max="200" 
                value={priceRange.min}
                onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                className="slider"
              />
              <input 
                type="range" 
                min="0" 
                max="200" 
                value={priceRange.max}
                onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                className="slider"
              />
            </div>
          </div>
        </div>

        <div className="filter-actions">
          <button className="reset-btn" onClick={resetFilters}>
            Reset Filters
          </button>
          <button className="apply-btn" onClick={onClose}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;