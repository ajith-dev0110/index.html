import React from 'react';
// ProductList.jsx - Component to Display a List of Products
import ProductCard from './ProductCard';
// The ProductList component receives an array of products and an onAddToCart function as props. It checks if there are any products to display; if not, it shows a message indicating that no products were found. If products are available, it maps over the array and renders a ProductCard for each product, passing the product data and the onAddToCart function as props to each card. This component is responsible for displaying the grid of products on the main page.
function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    // If there are no products to display, show an empty state message
    return <h3 className="empty-state">No products found. Please adjust your filters.</h3>;
  }

  return (
    // Render a grid of ProductCard components for each product in the products array
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;