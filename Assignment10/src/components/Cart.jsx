import React from 'react';
// Cart.jsx - Shopping Cart Component
function Cart({ cartItems, onRemove }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
// The Cart component receives cartItems (the products added to the cart) and onRemove (a function to remove items from the cart) as props. It calculates the total price of the items in the cart and renders a list of cart items along with their prices and a "Remove" button for each item. If the cart is empty, it displays a message indicating that the cart is empty.
  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.image} {item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;