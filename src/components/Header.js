import React from 'react';
import { ArrowLeft, Filter, Eye, Maximize, Minimize } from 'lucide-react';
import './Header.css';

const Header = ({ onFilterClick, onViewClick, isFullscreen, onFullscreenToggle }) => {
  return (
    <div className="header">
        <div className="header-left">
          <ArrowLeft size={24} className="back-icon" />
          <h1 className="header-title">POS</h1>
        </div>
        
        <div className="header-actions">
          <button className="header-btn filter-btn" onClick={onFilterClick}>
            <Filter size={16} />
            <span>Product Filter</span>
          </button>
          
          <button className="header-btn view-btn" onClick={onViewClick}>
            <Eye size={16} />
          </button>

          <button 
            className="header-btn fullscreen-btn" 
            onClick={onFullscreenToggle}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            <span>{isFullscreen ? "Exit Full" : "Fullscreen"}</span>
          </button>
          
          <div className="orders-badge">
            <span>ORDERS</span>
            <span className="orders-count">1</span>
          </div>
        </div>
      </div>
  );
};

export default Header;