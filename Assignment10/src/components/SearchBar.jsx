import React from 'react';
// SearchBar.jsx - Component for Product Search Functionality
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    // The SearchBar component receives searchTerm (the current search query) and onSearchChange (a function to update the search query) as props. It renders an input field where users can type their search queries. The value of the input is controlled by the searchTerm prop, and whenever the user types something, the onSearchChange function is called with the new value to update the search term in the parent component (App.jsx). This allows for real-time filtering of products based on the user's search input.
    <div className="search-bar">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;