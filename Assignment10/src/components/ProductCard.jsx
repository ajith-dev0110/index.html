import React from 'react';
// ProductCard.jsx - Component to Display Individual Product Details  
function ProductCard({ product, onAddToCart }) {
  // The ProductCard component receives a product object and an onAddToCart function as props. It renders the product's image, name, category, description, and price. It also includes an "Add to Cart" button that, when clicked, calls the onAddToCart function with the product as an argument to add it to the shopping cart.
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image">{product.image}</div>
      {/* Product Name */}
      <h3>{product.name}</h3>
      {/* Product Category */}
      <p className="category-badge">{product.category}</p>
      {/* Product Description */}
      <p className="description">{product.description}</p>
      {/* Product Price */}
      <p className="price">${product.price.toFixed(2)}</p>
      {/* Add to Cart Button */}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;