import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchBar({ onSearch, onGeolocation }) {
  const [input, setInput] = useState('');
  const popularCities = ["San Francisco, CA", "New York, NY", "Los Angeles, CA", "Miami, FL", "Seattle, WA"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for a city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-white text-gray-800 pl-4 pr-10 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition">
          Search
        </button>
      </form>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 items-center">
        <button onClick={onGeolocation} className="flex items-center gap-1 hover:text-blue-600 transition">
          <MapPin size={16} /> Use My Location
        </button>
        {popularCities.map((city) => (
          <button key={city} onClick={() => onSearch(city)} className="hover:text-black transition">
            • {city}
          </button>
        ))}
      </div>
    </div>
  );
}