// App.jsx - Main Application Component
import  { useState } from 'react';
import { productData } from './data/products';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FilterSort from './components/FilterSort';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './style/App.css';

function App() {
  // State Management
  // products is static data, so we don't need a setter for it
  const [products] = useState(productData);
  // cart will hold the products added to the shopping cart
  const [cart, setCart] = useState([]);
  // searchTerm will hold the current search query for filtering products
  const [searchTerm, setSearchTerm] = useState('');
  // selectedCategory will hold the currently selected category for filtering products
  const [selectedCategory, setSelectedCategory] = useState('all');
  // sortOrder will hold the current sorting preference for the product list
  const [sortOrder, setSortOrder] = useState('default');
  // showCart will determine whether the shopping cart is currently visible or not
  const [showCart, setShowCart] = useState(false);

  // Add to Cart Logic
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from Cart Logic
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Derived State: Filtering and Sorting
  let processedProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (sortOrder === 'price-asc') {
    processedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    processedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'name-asc') {
    processedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'name-desc') {
    processedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="app-container">
      <Navbar cartCount={cart.length} toggleCart={() => setShowCart(!showCart)} />
      
      {showCart ? (
        <Cart cartItems={cart} onRemove={handleRemoveFromCart} />
      ) : (
        <main>
          <div className="controls-section">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <FilterSort 
              category={selectedCategory} 
              onCategoryChange={setSelectedCategory}
              sort={sortOrder}
              onSortChange={setSortOrder}
            />
          </div>
          <ProductList products={processedProducts} onAddToCart={handleAddToCart} />
        </main>
      )}
    </div>
  );
}

export default App;