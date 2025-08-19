import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategorySidebar from './components/CategorySidebar';
import ProductList from './components/ProductList';
import BottomActions from './components/BottomActions';
import SearchModal from './components/SearchModal';
import FilterModal from './components/FilterModal';
import ViewModal from './components/ViewModal';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Johnson's Baby Powder",
    description: "64 Pcs (Stocks)",
    price: 127.00,
    quantity: 2.00,
    category: "Baby Powder",
    image: "👶"
  },
  {
    id: 2,
    name: "Johnson's Powder",
    description: "33 Pcs (Stocks)",
    price: 87.00,
    quantity: 1.00,
    category: "Baby Powder",
    image: "👶"
  },
  {
    id: 3,
    name: "Chai Ready-To-Drink",
    description: "42 Pcs (Stocks)",
    price: 83.00,
    quantity: 1.00,
    category: "Powder Drink",
    image: "🥤"
  },
  {
    id: 4,
    name: "TANG orange 25g",
    description: "15 Pcs (Stocks)",
    price: 24.00,
    quantity: 0.00,
    category: "Powder Drink",
    image: "🍊"
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showViewOptions, setShowViewOptions] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price', 'quantity'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  const categories = ['All', 'Baby Powder', 'Coffee and Creamer', 'Powder Drink'];

  // Apply filters and sorting
  let filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Apply price filter
  filteredProducts = filteredProducts.filter(product => 
    product.price >= priceRange.min && product.price <= priceRange.max
  );

  // Apply sorting
  filteredProducts.sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (sortBy === 'name') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const updateQuantity = (productId, newQuantity) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, quantity: Math.max(0, newQuantity) }
        : product
    ));
  };

  const totalAmount = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);

  // Fullscreen functionality
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Enter fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement ||
        false
      );
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className={`mobile-container ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      <Header 
        onFilterClick={() => setShowFilter(true)}
        onViewClick={() => setShowViewOptions(true)}
        isFullscreen={isFullscreen}
        onFullscreenToggle={toggleFullscreen}
      />
      
      <div className="main-content">
        <CategorySidebar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        
        <ProductList 
          products={filteredProducts}
          onQuantityChange={updateQuantity}
          viewMode={viewMode}
        />
      </div>

      <BottomActions 
        totalAmount={totalAmount}
        totalItems={totalItems}
        onSearchClick={() => setShowSearch(true)}
        isFullscreen={isFullscreen}
      />

      {showSearch && (
        <SearchModal 
          products={products}
          onClose={() => setShowSearch(false)}
          onQuantityChange={updateQuantity}
        />
      )}

      {showFilter && (
        <FilterModal 
          onClose={() => setShowFilter(false)}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      )}

      {showViewOptions && (
        <ViewModal 
          onClose={() => setShowViewOptions(false)}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      )}
    </div>
  );
}

export default App;