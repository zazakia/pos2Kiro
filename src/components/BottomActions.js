import React from 'react';
import { Search, Scan, Package, Plus } from 'lucide-react';
import './BottomActions.css';

const BottomActions = ({ totalAmount, totalItems, onSearchClick, isFullscreen }) => {
  return (
    <div className={`bottom-actions ${isFullscreen ? 'fullscreen-bottom' : ''}`}>
      {/* Review Section */}
      <div className="review-section">
        <div className="review-button">
          <span className="review-text">REVIEW</span>
        </div>
        
        <div className="totals">
          <div className="total-amount">
            <span className="total-label">TOTAL AMOUNT</span>
            <span className="total-value">{totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="product-qty">
            <span className="qty-label">PRODUCT QTY</span>
            <span className="qty-value">{totalItems.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* No more items message */}
      <div className="no-more-items">
        No more items to show
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar" onClick={onSearchClick}>
          <Search size={20} className="search-icon" />
          <span className="search-placeholder">Search product</span>
          <span className="search-close">✕</span>
          <div className="barcode-icon">📊</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="action-btn scan-btn">
          <Scan size={24} />
          <span>SCAN PRODUCT</span>
        </button>
        
        <button className="action-btn inventory-btn">
          <Package size={24} />
          <span>NON-INVENTORY PRODUCT</span>
        </button>
        
        <button className="action-btn add-btn">
          <Plus size={24} />
          <span>ADD PRODUCT</span>
        </button>
      </div>
    </div>
  );
};

export default BottomActions;