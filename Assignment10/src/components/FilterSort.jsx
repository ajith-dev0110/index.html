import React from 'react';
// FilterSort.jsx - Component for Filtering and Sorting Products
function FilterSort({ category, onCategoryChange, sort, onSortChange }) {
  const resetFilters = () => {
    onCategoryChange('all');
    onSortChange('default');
  };
// The FilterSort component receives category (the currently selected category), onCategoryChange (a function to update the selected category), sort (the current sorting preference), and onSortChange (a function to update the sorting preference) as props. It renders two dropdowns for selecting the category and sorting options, as well as a "Reset" button to clear all filters and sorting preferences. The component allows users to filter products by category and sort them based on price or name.
  return (
    <div className="filter-sort">
      {/* Category Filter */}
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="Home">Home & </option>
        <option value="Office">Office </option>
        <option value="Toys">Toys</option>
        <option value="Outdoors">Outdoors</option>
        <option value="Music">Music</option>

      </select>
      {/* Sorting Options */}
      <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>

{/* Reset Button */}
      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}

export default FilterSort;