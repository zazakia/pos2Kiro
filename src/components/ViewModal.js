import React from 'react';
import { X, List, Grid, Eye, AlignLeft } from 'lucide-react';
import './ViewModal.css';

const ViewModal = ({ onClose, viewMode, setViewMode }) => {
  const handleViewChange = (mode) => {
    setViewMode(mode);
    onClose();
  };

  return (
    <div className="view-modal-overlay">
      <div className="view-modal">
        <div className="view-header">
          <h3>Product View</h3>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="view-content">
          <div className="view-section">
            <h4><Eye size={16} /> Display Mode</h4>
            <div className="view-options">
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => handleViewChange('list')}
              >
                <List size={20} />
                <div className="view-info">
                  <span className="view-title">List View</span>
                  <span className="view-desc">Detailed product information</span>
                </div>
              </button>
              
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => handleViewChange('grid')}
              >
                <Grid size={20} />
                <div className="view-info">
                  <span className="view-title">Grid View</span>
                  <span className="view-desc">Compact card layout</span>
                </div>
              </button>

              <button 
                className={`view-btn ${viewMode === 'text' ? 'active' : ''}`}
                onClick={() => handleViewChange('text')}
              >
                <AlignLeft size={20} />
                <div className="view-info">
                  <span className="view-title">Text Only</span>
                  <span className="view-desc">Simple text list format</span>
                </div>
              </button>
            </div>
          </div>

          <div className="view-section">
            <h4>Display Options</h4>
            <div className="display-options">
              <label className="option-item">
                <input type="checkbox" defaultChecked />
                <span>Show product images</span>
              </label>
              <label className="option-item">
                <input type="checkbox" defaultChecked />
                <span>Show stock information</span>
              </label>
              <label className="option-item">
                <input type="checkbox" defaultChecked />
                <span>Show price details</span>
              </label>
              <label className="option-item">
                <input type="checkbox" defaultChecked />
                <span>Show quantity controls</span>
              </label>
            </div>
          </div>
        </div>

        <div className="view-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={onClose}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;