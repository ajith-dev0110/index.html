import React from 'react';
// Navbar.jsx - Navigation Bar Component
function Navbar({ cartCount, toggleCart }) {
  // The Navbar component receives cartCount (the number of items in the cart) and toggleCart (a function to show/hide the cart) as props. It renders a navigation bar with the store's logo and a cart button that displays the current number of items in the cart. When the cart button is clicked, it calls the toggleCart function to show or hide the shopping cart.
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>🛍️ Tech&Threads</h1>
      </div>
      {/* Cart Button */}
      <button className="cart-toggle-btn" onClick={toggleCart}>
        🛒 Cart <span className="cart-badge">{cartCount}</span>
      </button>
    </nav>
  );
}

export default Navbar;